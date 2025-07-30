import ClassifiedsList from '@/components/inventory/classified-list';
import DialogFilters from '@/components/inventory/dialog-filters';
import InventorySkeleton from '@/components/inventory/inventory-skeleton';
import CustomSidebar from '@/components/inventory/sidebar';
import { CustomPagination } from '@/components/shared/custom-pagination';
import { CLASSIFIEDS_PER_PAGE } from '@/config/constants';
import { routes } from '@/config/routes';
import { AwaitedPageProps, Favourites, PageProps } from '@/config/types';
import { prisma } from '@/lib/prisma';
import { redisStore } from '@/lib/redis-store';
import { getSourceId } from '@/lib/source-id';
import { buildClassifiedFilterQuery } from '@/lib/utils';
import { PageSchema } from '@/schemas/page.schema';
import { ClassifiedStatus } from '@prisma/client';
import { Suspense } from 'react';

const getInventory = async (searchParams: AwaitedPageProps['searchParams']) => {
    const validPage = PageSchema.parse(searchParams?.page);
    const page = validPage ? validPage : 1;
    const offset = (page - 1) * CLASSIFIEDS_PER_PAGE;
    return prisma.classified.findMany({
        where: buildClassifiedFilterQuery(searchParams),
        include: {
            images: { take: 1 },
        },
        skip: offset,
        take: CLASSIFIEDS_PER_PAGE,
    });
};

export default async function InventoryPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const classifieds = getInventory(searchParams);
    const count = await prisma.classified.count({
        where: buildClassifiedFilterQuery(searchParams),
    });
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
                <Suspense fallback={<InventorySkeleton />}>
                    <ClassifiedsList
                        classifieds={classifieds}
                        favourites={favourites ? favourites.ids : []}
                    />
                </Suspense>
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
