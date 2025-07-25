import { ClassifiedWithImage } from '@/config/types';
import ClassifiedCard from './classified-card';

interface ClassifiedListProps {
    classifieds: ClassifiedWithImage[];
    favourites: number[];
}

export default function ClassifiedsList(props: ClassifiedListProps) {
    const { classifieds, favourites } = props;
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {classifieds.map((classified) => {
                return (
                    <ClassifiedCard
                        key={classified.id}
                        classified={classified}
                        favourites={favourites}
                    />
                );
            })}
        </div>
    );
}
