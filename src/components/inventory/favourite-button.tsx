import { endpoints } from '@/config/endpoints';
import { api } from '@/lib/api-client';
import { cn } from '@/lib/utils';
import { HeartIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

type FavouriteButtonProps = {
    id: number;
    setIsFavourite: (isFavourite: boolean) => void;
    isFavourite: boolean;
};

export default function FavouriteButton(props: FavouriteButtonProps) {
    const { id, setIsFavourite, isFavourite } = props;
    const router = useRouter();

    const handleFavouriteClick = async () => {
        setIsFavourite(!isFavourite);
        try {
            const { ids } = await api.post<{ ids: number[] }>(endpoints.favourites, {
                json: { id },
            });
            if (ids.includes(id)) {
                setIsFavourite(true);
            } else {
                setIsFavourite(false);
            }
        } catch (error) {
            console.log('Error toggling favourite:', error);
            setIsFavourite(isFavourite);
        } finally {
            router.refresh();
        }
    };

    return (
        <Button
            onClick={handleFavouriteClick}
            variant={'ghost'}
            size={'icon'}
            className={cn(
                'absolute top-2.5 left-3.5 rounded-full z-10 hover:bg-red-500 group',
                '!h-6 !w-6 lg:!h-8 lg:!w-8 xl:!h-10 xl:!w-10',
                isFavourite ? 'bg-white' : 'bg-muted/15'
            )}
        >
            <HeartIcon
                className={cn(
                    'text-white h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-6 xl:w-6',
                    isFavourite
                        ? 'text-red-500 group-hover:text-white fill-red-500'
                        : 'text-muted-foreground group-hover:text-white'
                )}
            />
        </Button>
    );
}
