import ClassifiedsList from '@/components/inventory/classified-list';
import CustomSidebar from '@/components/inventory/sidebar';
import { CustomPagination } from '@/components/shared/custom-pagination';
import { CLASSIFIEDS_PER_PAGE } from '@/config/constants';
import { routes } from '@/config/routes';
import { AwaitedPageProps, Favourites, PageProps } from '@/config/types';
import { prisma } from '@/lib/prisma';
import { redisStore } from '@/lib/redis-store';
import { getSourceId } from '@/lib/source-id';
import { z } from 'zod';

const getInventory = async (searchParams: AwaitedPageProps['searchParams']) => {
    const pageSchema = z
        .string()
        .transform((value) => Math.max(Number(value), 1))
        .optional();
    const validPage = pageSchema.parse(searchParams?.page);
    const page = validPage ? validPage : 1;
    const offset = (page - 1) & CLASSIFIEDS_PER_PAGE;

    return await prisma.classified.findMany({
        where: {},
        include: {
            images: { take: 1 },
        },
        skip: offset,
        take: CLASSIFIEDS_PER_PAGE,
    });
};

export default async function InventoryPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const classifieds = await getInventory(searchParams);
    const count = await prisma.classified.count({
        where: {},
    });
    const totalPages = Math.ceil(count / CLASSIFIEDS_PER_PAGE);

    const sourceId = await getSourceId();
    const favourites = await redisStore.get<Favourites>(sourceId ?? '');

    return (
        <div className='flex'>
            <CustomSidebar minMaxValues={null} searchParams={searchParams} />

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
                        {/* <DialogFilters /> */}
                    </div>
                    <CustomPagination
                        baseUrl={routes.inventory}
                        totalPages={totalPages}
                        styles={{
                            paginationRoot: 'flex justify-end',
                            paginationPrevious: '',
                            paginationNext: '',
                            paginationLink: 'border-none active:border',
                            paginationLinkActive: '',
                        }}
                    />
                    <ClassifiedsList
                        classifieds={classifieds}
                        favourites={favourites ? favourites.ids : []}
                    />
                </div>
            </div>
        </div>
    );
}
