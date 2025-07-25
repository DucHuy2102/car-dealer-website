'use client';

import { FilterOptions, TaxonomyFiltersProps } from '@/config/types';
import { formatNumber, formatPrice } from '@/lib/utils';
import { CurrencyCode } from '@prisma/client';
import { useEffect, useState } from 'react';
import { RangeSelect } from '../ui/range-select';

interface RangeFilterProps extends TaxonomyFiltersProps {
    label: string;
    minName: string;
    maxName: string;
    defaultMin: number;
    defaultMax: number;
    increment?: number;
    thousandSeparator?: boolean;
    currency?: {
        currencyCode: CurrencyCode;
    };
}

export default function RangeFilter(props: RangeFilterProps) {
    const {
        label,
        minName,
        maxName,
        defaultMin,
        defaultMax,
        increment,
        thousandSeparator,
        currency,
        handleChange,
        searchParams,
    } = props;

    const getInitialState = () => {
        const state: FilterOptions<string, number> = [];
        let iterator = defaultMin - (increment ?? 1);
        do {
            if (increment) {
                iterator += increment;
            } else {
                iterator++;
            }

            if (currency) {
                state.push({
                    label: formatPrice({ price: iterator, currency: currency.currencyCode }),
                    value: iterator,
                });
            } else if (thousandSeparator) {
                state.push({
                    label: formatNumber(iterator),
                    value: iterator,
                });
            } else {
                state.push({ label: iterator.toString(), value: iterator });
            }
        } while (iterator < defaultMax);
        return state;
    };
    const initialState = getInitialState();
    const [minOptions, setMinOptions] = useState<FilterOptions<string, number>>(initialState);
    const [maxOptions, setMaxOptions] = useState<FilterOptions<string, number>>(
        initialState.toReversed()
    );

    useEffect(() => {
        if (searchParams?.[minName]) {
            setMaxOptions(
                initialState.filter(({ value }) => value > Number(searchParams[minName]))
            );
        }
        if (searchParams?.[maxName]) {
            setMinOptions(
                initialState.filter(({ value }) => value < Number(searchParams[maxName]))
            );
        }
    }, [searchParams?.[minName], searchParams?.[maxName]]);

    return (
        <RangeSelect
            label={label}
            minSelect={{
                name: minName,
                value: Number(searchParams?.[minName]) || '',
                options: minOptions,
                onChange: handleChange,
            }}
            maxSelect={{
                name: maxName,
                value: Number(searchParams?.[maxName]) || '',
                options: maxOptions,
                onChange: handleChange,
            }}
        />
    );
}
