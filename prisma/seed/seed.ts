import { PrismaClient } from '@prisma/client';
import { seedTaxonomy } from './taxonomy.seed';
import { seedClassified } from './classified.seed';
import { seedImages } from './images.seed';

const prisma = new PrismaClient();

async function main() {
    // await prisma.$executeRaw`truncate table "makes", "models" restart identity cascade`;
    // await seedTaxonomy(prisma);
    // await seedClassified(prisma);
    await seedImages(prisma);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
