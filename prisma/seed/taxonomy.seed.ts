import { Prisma, PrismaClient } from '@prisma/client';
import { parse } from 'csv';
import fs from 'node:fs';

/* 
    TODO: define the data structure for each row in the CSV file
    * from { ABARTH,500,Turismo,2023,TRUE } become an object like:
    * {
    *   make: 'ABARTH',
    *   model: '500',
    *   variant: 'Turismo',
    *   yearStart: 2023,
    *   yearEnd: 2024
    * }
 */
type TRow = {
    make: string;
    model: string;
    variant: string | undefined;
    yearStart: number;
    yearEnd: number;
};

/* 
    TODO: transform flat array of rows into a nested structure:
    * input: rows: TRow[]
    * output: result: TMakeModel - group by Make → Model → Variants
    * {
    *   ABARTH: {
    *       "500": {
    *           variants: {
    *               "Turismo": { yearStart: 2023, yearEnd: 2024 },
    *               "Scorpionissima": { yearStart: 2023, yearEnd: 2024 }
    *           }
    *       },
    *       "595": { ... }
    *   },
    *   TOYOTA: { ... }
    * }
*/
type TMakeModel = {
    [make: string]: {
        [model: string]: {
            variants: {
                [variant: string]: {
                    yearStart: number;
                    yearEnd: number;
                };
            };
        };
    };
};

// number of records to insert per batch when seeding
const BATCH_SIZE = 100;

/* 
    TODO: helper function to split bulk insert into batches 
    * purpose: avoid overloading db connection when inseting large datasets
*/
async function insertInBatches<TUpsertArgs>(
    items: TUpsertArgs[],
    batchSize: number,
    insertFuntion: (batch: TUpsertArgs[]) => void
) {
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        await insertFuntion(batch);
    }
}

export async function seedTaxonomy(prisma: PrismaClient) {
    /* 
    TODO: parse csv file into an array of TRow
    * input: cvs file
    *   ABARTH,500,,2009,2015,FALSE
    *   ABARTH,500,Turismo,2023,2024,FALSE
    *   ...
    * output: rows:TRow[]
    *   [
    *       { make: 'ABARTH', model: '500', variant: undefined, yearStart: 2009, yearEnd: 2015 },
    *       { make: 'ABARTH', model: '500', variant: 'Turismo', yearStart: 2023, yearEnd: 2024 },
    *       ...
    *   ]
    */
    const rows = await new Promise<TRow[]>((resolve, reject) => {
        const eachRow: TRow[] = [];
        fs.createReadStream('taxonomy.csv')
            .pipe(parse({ columns: true }))
            .on('data', (row: { [index: string]: string }) => {
                eachRow.push({
                    make: row.Make,
                    model: row.Model,
                    variant: row.Model_Variant || undefined,
                    yearStart: Number(row.Year_Start),
                    yearEnd: row.Year_End ? Number(row.Year_End) : new Date().getFullYear(),
                });
            })
            .on('error', (error) => {
                console.log({ error });
                reject(error);
            })
            .on('end', () => {
                resolve(eachRow);
            });
    });

    // build the nested structure from CSV rows
    const result: TMakeModel = {};
    for (const row of rows) {
        if (!result[row.make]) {
            result[row.make] = {};
        }

        if (!result[row.make][row.model]) {
            result[row.make][row.model] = {
                variants: {},
            };
        }

        if (row.variant) {
            result[row.make][row.model].variants[row.variant] = {
                yearStart: row.yearStart,
                yearEnd: row.yearEnd,
            };
        }
    }

    /* 
    TODO: upsert Makes into DB (if exists → update image, else → create)
    * input: result keys (make names)
    * output: array of prisma promise upserts, ex:
    * [
    *   ...
    *   prisma.make.upsert({ where: { name: 'ABARTH' }, ... }),
    *   prisma.make.upsert({ where: { name: 'TOYOTA' }, ... }),
    *   ...
    * ]
    */
    const imageURL = (name: string) =>
        `https://vl.imgix.net/img/${name
            .replace(/\s+/g, '-')
            .toLowerCase()}-logo.png?auto-format,compress`;
    const makePromises = Object.entries(result).map(([name]) => {
        return prisma.make.upsert({
            where: { name },
            update: {
                name,
                image: imageURL(name),
            },
            create: {
                name,
                image: imageURL(name),
            },
        });
    });
    const makes = await Promise.all(makePromises);
    console.log(`Seeded db with ${makes.length} makes ✅`);

    /* 
    TODO: prepare upsert promises for Models under each Make
    * input: nested result[make.name]
    * output:  array of Prisma Promise upserts, like:
    * prisma.model.upsert({
    *   where: { makeId_name: { name: '500', makeId: 'uuid' } },
    *   ...
    * })
    */
    const modelPromises: Prisma.Prisma__ModelClient<unknown, unknown>[] = [];
    for (const make of makes) {
        for (const model in result[make.name]) {
            modelPromises.push(
                prisma.model.upsert({
                    where: {
                        makeId_name: {
                            name: model,
                            makeId: make.id,
                        },
                    },
                    update: {
                        name: model,
                    },
                    create: {
                        name: model,
                        make: { connect: { id: make.id } },
                    },
                })
            );
        }
    }
    // insert Models in batches
    await insertInBatches<Prisma.Prisma__ModelClient<unknown, unknown>>(
        modelPromises,
        BATCH_SIZE,
        async (batch) => {
            const models = await Promise.all(batch);
            console.log(`Seeded batch of ${models.length} models ✅`);
        }
    );

    /* 
    TODO: upsert Variants for each Model
    * input: result[make][model].variants
    * output: array of Prisma Promise upserts, like:
    * prisma.modelVariant.upsert({
    *   where: { modelId_name: { name: 'Turismo', modelId: 'uuid' } },
    *   ...
    * })
    */

    const allModels = await prisma.model.findMany({
        select: { id: true, name: true, make: { select: { name: true } } },
    });
    /*
     * allModels = [
     *   { id: 101, name: '500', make: { name: 'ABARTH' } },
     *   { id: 102, name: '595', make: { name: 'ABARTH' } },
     *   { id: 103, name: 'Giulia', make: { name: 'ALFA ROMEO' } }
     *   ...
     *   ]
     */
    const modelMap = new Map<string, number>();
    for (const model of allModels) {
        const key = `${model.make.name}-${model.name}`;
        modelMap.set(key, model.id);
    }
    /*
     *  Key (String)                    => Value (Number)
     * ----------------------------------------------------
     * 'ABARTH-500'                     => 101
     * 'ABARTH-595'                     => 102
     * 'ALFA ROMEO-Giulia'              => 103
     * ...
     */
    const variantPromises: Prisma.Prisma__ModelVariantClient<unknown, unknown>[] = [];
    for (const [makeName, models] of Object.entries(result)) {
        for (const [modelName, modelData] of Object.entries(models)) {
            const modelId = modelMap.get(`${makeName}-${modelName}`);
            if (!modelId) continue;
            for (const [variantName, year_range] of Object.entries(modelData.variants)) {
                variantPromises.push(
                    prisma.modelVariant.upsert({
                        where: {
                            modelId_name: {
                                name: variantName,
                                modelId: modelId,
                            },
                        },
                        update: {
                            name: variantName,
                        },
                        create: {
                            name: variantName,
                            yearStart: year_range.yearStart,
                            yearEnd: year_range.yearEnd,
                            model: {
                                connect: { id: modelId },
                            },
                        },
                    })
                );
            }
        }
    }
    await insertInBatches<Prisma.Prisma__ModelVariantClient<unknown, unknown>>(
        variantPromises,
        BATCH_SIZE,
        async (batch) => {
            const variants = await Promise.all(batch);
            console.log(`Seeded batch of ${variants.length} variants ✅`);
        }
    );
}
