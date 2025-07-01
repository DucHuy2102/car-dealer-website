import ClassifiedsList from '@/components/inventory/classified-list';
import { AwaitedPageProps, PageProps } from '@/config/types';
import { prisma } from '@/lib/prisma';

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
    return <ClassifiedsList classifieds={classifieds} />;
}
