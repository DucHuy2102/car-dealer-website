'use client';

import { ClassifiedWithImage } from '@/config/types';
import { use } from 'react';
import ClassifiedCard from './classified-card';

interface ClassifiedListProps {
    classifieds: Promise<ClassifiedWithImage[]>;
    favourites: number[];
}

export default function ClassifiedsList(props: ClassifiedListProps) {
    const { classifieds, favourites } = props;
    const inventory = use(classifieds);
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {inventory.map((classified) => {
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
