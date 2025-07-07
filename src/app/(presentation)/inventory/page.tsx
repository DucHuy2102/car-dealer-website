import ClassifiedsList from '@/components/inventory/classified-list';
import { AwaitedPageProps, Favourites, PageProps } from '@/config/types';
import { prisma } from '@/lib/prisma';
import { redisStore } from '@/lib/redis-store';
import { getSourceId } from '@/lib/source-id';

const getInventory = async (searchParams: AwaitedPageProps['searchParams']) => {
    return await prisma.classified.findMany({
        include: {
            images: true,
        },
    });
};

export default async function InventoryPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const classifieds = await getInventory(searchParams);

    const sourceId = await getSourceId();
    const favourites = await redisStore.get<Favourites>(sourceId ?? '');

    return (
        <ClassifiedsList classifieds={classifieds} favourites={favourites ? favourites.ids : []} />
    );
}
