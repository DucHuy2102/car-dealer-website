'use client ';

import { FilterOptions } from '@/config/types';
import { SelectHTMLAttributes } from 'react';

interface SelectType extends SelectHTMLAttributes<HTMLSelectElement> {
    options: FilterOptions<string, number>;
}

interface RangeSelectProps {
    label: string;
    minSelect: SelectType;
    maxSelect: SelectType;
}

export const RangeSelect = (props: RangeSelectProps) => {
    const { label, minSelect, maxSelect } = props;

    return (
        <>
            <h4 className='text-base font-semibold'>{label}</h4>
            <div className='flex gap-2'>
                <select
                    {...minSelect}
                    className='flex-1 w-full pl-3 py-2 border rounded-md 
                    custom-select appearance-none pr-12 bg-no-repeat'
                >
                    <option>Select</option>
                    {minSelect.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <select
                    {...maxSelect}
                    className='flex-1 w-full pl-3 py-2 border rounded-md 
                    custom-select appearance-none pr-12 bg-no-repeat'
                >
                    <option>Select</option>
                    {maxSelect.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};
