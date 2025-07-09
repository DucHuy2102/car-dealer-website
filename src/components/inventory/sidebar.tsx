'use client';

import { routes } from '@/config/routes';
import type { AwaitedPageProps } from '@/config/types';
import { env } from '@/env';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { parseAsString, useQueryStates } from 'nuqs';
import { useEffect, useState } from 'react';

interface SidebarProps extends AwaitedPageProps {
    minMaxValues: any;
}

export default function CustomSidebar({ minMaxValues, searchParams }: SidebarProps) {
    const router = useRouter();
    const [filterCount, setFilterCount] = useState(0);
    const [queryStates, setQueryStates] = useQueryStates(
        {
            make: parseAsString.withDefault(''),
            model: parseAsString.withDefault(''),
            modelVariant: parseAsString.withDefault(''),
            minYear: parseAsString.withDefault(''),
            maxYear: parseAsString.withDefault(''),
            minPrice: parseAsString.withDefault(''),
            maxPrice: parseAsString.withDefault(''),
            minReading: parseAsString.withDefault(''),
            maxReading: parseAsString.withDefault(''),
            currency: parseAsString.withDefault(''),
            odoUnit: parseAsString.withDefault(''),
            transmission: parseAsString.withDefault(''),
            fuelType: parseAsString.withDefault(''),
            bodyType: parseAsString.withDefault(''),
            colour: parseAsString.withDefault(''),
            doors: parseAsString.withDefault(''),
            seats: parseAsString.withDefault(''),
            ulezCompliance: parseAsString.withDefault(''),
        },
        { shallow: false }
    );

    useEffect(() => {
        const filterCount = Object.entries(searchParams as Record<string, string>).filter(
            ([key, value]) => key !== 'page' && value
        ).length;
        setFilterCount(filterCount);
    }, [searchParams]);

    const handleClearFilters = () => {
        const url = new URL(routes.inventory, env.NEXT_PUBLIC_APP_URL);
        window.location.replace(url.toString());
        setFilterCount(0);
    };

    return (
        <div className='py-4 w-[21.25rem] bg-white border-r border-muted block'>
            <div className=''>
                <div className='text-lg font-semibold flex justify-between px-4'>
                    <span>Filters</span>
                    <button
                        type='button'
                        onClick={handleClearFilters}
                        aria-disabled={!filterCount}
                        className={cn(
                            'text-sm font-semibold text-gray-500 py-1 px-3 hover:bg-zinc-200/40 rounded-xl',
                            !filterCount
                                ? 'cursor-default disabled opacity-50 pointer-events-none'
                                : 'cursor-pointer hover:text-gray-600'
                        )}
                    >
                        Clear all {filterCount ? `(${filterCount})` : null}
                    </button>
                </div>
            </div>
        </div>
    );
}
