'use client';

import { cn } from '@/lib/utils';
import debounce from 'debounce';
import { SearchIcon, XIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { ChangeEvent, InputHTMLAttributes, useCallback, useRef } from 'react';
import { Input } from '../ui/input';

function debounceFunc<T extends (...args: any) => any>(
    func: T,
    wait: number,
    opts: { immediate: boolean }
) {
    return debounce(func, wait, opts);
}

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export default function SearchInput(props: SearchProps) {
    const { className, ...rest } = props;
    const [q, setSearch] = useQueryState('q', { shallow: false });
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useCallback(
        debounceFunc(
            (value: string) => {
                setSearch(value || null);
                if (inputRef.current) {
                    inputRef.current.value = value;
                }
            },
            1000,
            { immediate: false }
        ),
        []
    );

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        handleSearch(newValue);
    };

    const clearSearch = () => {
        setSearch(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <form className='relative flex-1'>
            <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500' />
            <Input
                type='text'
                ref={inputRef}
                defaultValue={q || ''}
                className={cn(className, 'pl-8')}
                onChange={onChangeValue}
                {...rest}
            />
            {q && (
                <XIcon
                    className='absolute top-2.5 right-2.5 h-4 w-4 p-0.5 
                    text-white bg-gray-500 rounded-full cursor-pointer'
                    onClick={clearSearch}
                />
            )}
        </form>
    );
}
