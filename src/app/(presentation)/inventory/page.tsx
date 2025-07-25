import ClassifiedsList from '@/components/inventory/classified-list';
import DialogFilters from '@/components/inventory/dialog-filters';
import CustomSidebar from '@/components/inventory/sidebar';
import { CustomPagination } from '@/components/shared/custom-pagination';
import { CLASSIFIEDS_PER_PAGE } from '@/config/constants';
import { routes } from '@/config/routes';
import { AwaitedPageProps, Favourites, PageProps } from '@/config/types';
import { prisma } from '@/lib/prisma';
import { redisStore } from '@/lib/redis-store';
import { getSourceId } from '@/lib/source-id';
import { ClassifiedStatus, Prisma } from '@prisma/client';
import { z } from 'zod';

const PageSchema = z
    .string()
    .transform((value) => Math.max(Number(value), 1))
    .optional();

const ClassifiedFilterSchema = z.object({
    q: z.string().optional(),
    make: z.string().optional(),
    model: z.string().optional(),
    modelVariant: z.string().optional(),
    minYear: z.string().optional(),
    maxYear: z.string().optional(),
    minPrice: z.string().optional(),
    maxPrice: z.string().optional(),
    minReading: z.string().optional(),
    maxReading: z.string().optional(),
    currency: z.string().optional(),
    odoUnit: z.string().optional(),
    transmission: z.string().optional(),
    fuelType: z.string().optional(),
    bodyType: z.string().optional(),
    colour: z.string().optional(),
    doors: z.string().optional(),
    seats: z.string().optional(),
    ulezCompliance: z.string().optional(),
});

const buildClassifiedFilterQuery = (
    searchParams: AwaitedPageProps['searchParams'] | undefined
): Prisma.ClassifiedWhereInput => {
    const { data } = ClassifiedFilterSchema.safeParse(searchParams);
    if (!data)
        return {
            status: ClassifiedStatus.LIVE,
        };

    const keys = Object.keys(data);
    const taxonomyFilters = ['make', 'model', 'modelVariant'];
    const rangeFilters = {
        minYear: 'year',
        maxYear: 'year',
        minPrice: 'price',
        maxPrice: 'price',
        minReading: 'odoReading',
        maxReading: 'odoReading',
    };
    const numberFilters = ['seats', 'doors'];
    const enumFilters = [
        'odoUnit',
        'currency',
        'transmission',
        'fuelType',
        'bodyType',
        'colour',
        'ulezCompliance',
    ];

    const mapParamsToFields = keys.reduce((acc, key) => {
        const value = searchParams?.[key] as string | undefined;
        if (!value) return acc;

        if (taxonomyFilters.includes(key)) {
            acc[key] = { id: Number(value) };
        } else if (enumFilters.includes(key)) {
            acc[key] = value.toUpperCase();
        } else if (numberFilters.includes(key)) {
            acc[key] = Number(value);
        } else if (key in rangeFilters) {
            const field = rangeFilters[key as keyof typeof rangeFilters];
            acc[field] = acc[field] || {};
            if (key.startsWith('min')) {
                acc[field].gte = Number(value);
            } else if (key.startsWith('max')) {
                acc[field].lte = Number(value);
            }
        }

        return acc;
    }, {} as { [key: string]: any });

    return {
        status: ClassifiedStatus.LIVE,
        ...(searchParams?.q && {
            OR: [
                {
                    title: { contains: searchParams.q as string, mode: 'insensitive' },
                },
                {
                    description: { contains: searchParams.q as string, mode: 'insensitive' },
                },
            ],
        }),
        ...mapParamsToFields,
    };
};

const getInventory = async (searchParams: AwaitedPageProps['searchParams']) => {
    const where = buildClassifiedFilterQuery(searchParams);
    const validPage = PageSchema.parse(searchParams?.page);
    const page = validPage ? validPage : 1;
    const offset = (page - 1) * CLASSIFIEDS_PER_PAGE;
    const [classifieds, count] = await Promise.all([
        prisma.classified.findMany({
            where,
            include: {
                images: { take: 1 },
            },
            skip: offset,
            take: CLASSIFIEDS_PER_PAGE,
        }),
        prisma.classified.count({ where }),
    ]);

    return { classifieds, count };
};

export default async function InventoryPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const { classifieds, count } = await getInventory(searchParams);
    const totalPages = Math.ceil(count / CLASSIFIEDS_PER_PAGE);
    const sourceId = await getSourceId();
    const favourites = await redisStore.get<Favourites>(sourceId ?? '');

    const minMaxValues = await prisma.classified.aggregate({
        where: { status: ClassifiedStatus.LIVE },
        _min: {
            price: true,
            year: true,
            odoReading: true,
        },
        _max: {
            price: true,
            year: true,
            odoReading: true,
        },
    });

    return (
        <div className='flex'>
            <CustomSidebar minMaxValues={minMaxValues} searchParams={searchParams} />

            <div className='flex-1 p-4 bg-white'>
                <div className='flex space-y-2 flex-col items-center justify-center pb-4 -mt-1'>
                    <div className='flex justify-between items-center w-full'>
                        <h2 className='text-sm md:text-base lg:text-lg font-semibold min-w-fit'>
                            We have found{' '}
                            <span className='text-white bg-primary rounded-full px-3 pb-0.5'>
                                {count}
                            </span>{' '}
                            classifieds
                        </h2>
                        <DialogFilters minMaxValues={minMaxValues} searchParams={searchParams} />
                    </div>
                    <CustomPagination
                        baseUrl={routes.inventory}
                        totalPages={totalPages}
                        styles={{
                            paginationRoot: 'justify-end hidden lg:flex',
                            paginationPrevious: '',
                            paginationNext: '',
                            paginationLink: 'border-none active:border',
                            paginationLinkActive: '',
                        }}
                    />
                </div>
                <ClassifiedsList
                    classifieds={classifieds}
                    favourites={favourites ? favourites.ids : []}
                />
                <CustomPagination
                    baseUrl={routes.inventory}
                    totalPages={totalPages}
                    styles={{
                        paginationRoot: 'pt-12 justify-center lg:hidden',
                        paginationPrevious: '',
                        paginationNext: '',
                        paginationLink: 'border-none active:border',
                        paginationLinkActive: '',
                    }}
                />
            </div>
        </div>
    );
}
