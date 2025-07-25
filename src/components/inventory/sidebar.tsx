'use client';

import { routes } from '@/config/routes';
import { SidebarProps } from '@/config/types';
import { env } from '@/env';
import {
    cn,
    formatBody,
    formatColour,
    formatFuelType,
    formatTransmission,
    formatUlezCompliance,
} from '@/lib/utils';
import {
    BodyType,
    Colour,
    CurrencyCode,
    FuelType,
    OdoUnit,
    Transmission,
    ULEZCompliance,
} from '@prisma/client';
import { useRouter } from 'next/navigation';
import { parseAsString, useQueryStates } from 'nuqs';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchInput from '../shared/search-input';
import { Select } from '../ui/select';
import RangeFilter from './range-filters';
import TaxonomyFilters from './taxonomy-filters';

export default function CustomSidebar({ minMaxValues, searchParams }: SidebarProps) {
    const router = useRouter();
    const [filterCount, setFilterCount] = useState(0);
    const { _min, _max } = minMaxValues;
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

    const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setQueryStates({ [name]: value || null });
        if (name === 'make') setQueryStates({ model: null, modelVariant: null });
        router.refresh();
    };

    return (
        <div className='py-4 w-[21.25rem] bg-white border-r border-muted hidden lg:block'>
            <div>
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
                <div className='mt-2' />
            </div>
            <div className='p-4'>
                <SearchInput
                    placeholder='Search...'
                    className='w-full px-3 py-2 border rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='p-4 space-y-2'>
                <TaxonomyFilters searchParams={searchParams} handleChange={handleChange} />
                <RangeFilter
                    label='Year'
                    minName='minYear'
                    maxName='maxYear'
                    defaultMin={_min.year || 1925}
                    defaultMax={_max.year || new Date().getFullYear()}
                    searchParams={searchParams}
                    handleChange={handleChange}
                />
                <RangeFilter
                    label='Price'
                    minName='minPrice'
                    maxName='maxPrice'
                    defaultMin={_min.price || 0}
                    defaultMax={_max.price || 21474836}
                    searchParams={searchParams}
                    handleChange={handleChange}
                    increment={1000000}
                    thousandSeparator
                    currency={{ currencyCode: 'GBP' }}
                />
                <RangeFilter
                    label='Odometer Reading'
                    minName='minReading'
                    maxName='maxReading'
                    defaultMin={_min.odoReading || 0}
                    defaultMax={_max.odoReading || 1000000}
                    searchParams={searchParams}
                    handleChange={handleChange}
                    increment={5000}
                    thousandSeparator
                />
                <Select
                    label='Currency'
                    name='currency'
                    value={queryStates.currency || ''}
                    onChange={handleChange}
                    options={Object.values(CurrencyCode).map((value) => ({
                        label: value,
                        value,
                    }))}
                />
                <Select
                    label='Odometer Unit'
                    name='odoUnit'
                    value={queryStates.odoUnit || ''}
                    onChange={handleChange}
                    options={Object.values(OdoUnit).map((value) => {
                        const isKilometers = value === OdoUnit.KILOMETERS;
                        return {
                            label: isKilometers ? 'Kilometers' : 'Miles',
                            value,
                        };
                    })}
                />
                <Select
                    label='Transmission'
                    name='transmission'
                    value={queryStates.transmission || ''}
                    onChange={handleChange}
                    options={Object.values(Transmission).map((value) => ({
                        label: formatTransmission(value),
                        value,
                    }))}
                />
                <Select
                    label='Fuel Type'
                    name='fuelType'
                    value={queryStates.fuelType || ''}
                    onChange={handleChange}
                    options={Object.values(FuelType).map((value) => ({
                        label: formatFuelType(value),
                        value,
                    }))}
                />
                <Select
                    label='Body Type'
                    name='bodyType'
                    value={queryStates.bodyType || ''}
                    onChange={handleChange}
                    options={Object.values(BodyType).map((value) => ({
                        label: formatBody(value),
                        value,
                    }))}
                />
                <Select
                    label='Colour'
                    name='colour'
                    value={queryStates.colour || ''}
                    onChange={handleChange}
                    options={Object.values(Colour).map((value) => ({
                        label: formatColour(value),
                        value,
                    }))}
                />
                <Select
                    label='ULEZ Compliance'
                    name='ulezCompliance'
                    value={queryStates.ulezCompliance || ''}
                    onChange={handleChange}
                    options={Object.values(ULEZCompliance).map((value) => ({
                        label: formatUlezCompliance(value),
                        value,
                    }))}
                />
                <Select
                    label='Doors'
                    name='doors'
                    value={queryStates.doors || ''}
                    onChange={handleChange}
                    options={Array.from({ length: 6 }).map((_, i) => {
                        const doorCount = i + 1;
                        return {
                            label: `${doorCount} Door${doorCount > 1 ? 's' : ''}`,
                            value: doorCount.toString(),
                        };
                    })}
                />
                <Select
                    label='Seats'
                    name='seats'
                    value={queryStates.seats || ''}
                    onChange={handleChange}
                    options={Array.from({ length: 8 }).map((_, i) => {
                        const seatCount = i + 1;
                        return {
                            label: `${seatCount} Seat${seatCount > 1 ? 's' : ''}`,
                            value: seatCount.toString(),
                        };
                    })}
                />
            </div>
        </div>
    );
}
