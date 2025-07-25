'use client';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { env } from '@/env';
import { cn } from '@/lib/utils';
import { useQueryState } from 'nuqs';
import { useEffect, useState } from 'react';

interface PaginationProps {
    baseUrl: string;
    totalPages: number;
    maxVisiblePages?: number;
    styles: {
        paginationRoot: string;
        paginationPrevious: string;
        paginationNext: string;
        paginationLink: string;
        paginationLinkActive: string;
    };
}

export function CustomPagination(props: PaginationProps) {
    const { baseUrl, totalPages, maxVisiblePages = 5, styles } = props;
    const [curentPage, setCurrentPage] = useQueryState('page', {
        defaultValue: 1,
        parse: (value) => {
            const parsedValue = Number.parseInt(value, 10);
            return Number.isNaN(parsedValue) || parsedValue < 1 ? 1 : parsedValue;
        },
        serialize: (value) => value.toString(),
        shallow: false,
    });
    const [visibleRange, setVisibleRange] = useState({
        start: 1,
        end: Math.min(maxVisiblePages, totalPages),
    });

    useEffect(() => {
        const halfVisible = Math.floor(maxVisiblePages / 2);
        const newStart = Math.max(
            1,
            Math.min(curentPage - halfVisible, totalPages - maxVisiblePages + 1)
        );
        const newEnd = Math.min(totalPages, newStart + maxVisiblePages - 1);
        setVisibleRange({
            start: newStart,
            end: newEnd,
        });
    }, [curentPage, totalPages, maxVisiblePages]);

    const createPageUrl = (pageNumber: number) => {
        const url = new URL(baseUrl, env.NEXT_PUBLIC_APP_URL);
        url.searchParams.set('page', pageNumber.toString());
        return url.toString();
    };

    const handleEllipsisClick = (direction: 'left' | 'right') => {
        const left = Math.max(1, visibleRange.start - maxVisiblePages);
        const right = Math.min(totalPages, visibleRange.end + maxVisiblePages);
        const newPage = direction === 'left' ? left : right;
        setCurrentPage(newPage);
    };

    return (
        <Pagination className={styles.paginationRoot}>
            <PaginationContent className='lg:gap-4 justify-end'>
                <PaginationItem>
                    <PaginationPrevious
                        href={createPageUrl(curentPage - 1)}
                        className={cn(curentPage === 1 && 'hidden', styles.paginationPrevious)}
                        onClick={(e) => {
                            e.preventDefault();
                            if (curentPage > 1) setCurrentPage(curentPage - 1);
                        }}
                    />
                </PaginationItem>

                {visibleRange.start > 1 && (
                    <PaginationItem className='hidden lg:block'>
                        <PaginationLink
                            href='#'
                            className={styles.paginationLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleEllipsisClick('left');
                            }}
                        >
                            ...
                        </PaginationLink>
                    </PaginationItem>
                )}

                {Array.from(
                    { length: visibleRange.end - visibleRange.start + 1 },
                    (_, index) => visibleRange.start + index
                ).map((pageNumber) => {
                    const isActive = pageNumber === curentPage;
                    let rel = '';
                    if (pageNumber === curentPage - 1) rel = 'prev';
                    if (pageNumber === curentPage + 1) rel = 'next';
                    return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink
                                isActive={isActive}
                                {...(rel ? { rel } : {})}
                                href={createPageUrl(pageNumber)}
                                className={cn(
                                    styles.paginationLink,
                                    isActive && styles.paginationLinkActive
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!isActive) setCurrentPage(pageNumber);
                                }}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                {visibleRange.end < totalPages && (
                    <PaginationItem className='hidden lg:block'>
                        <PaginationLink
                            href='#'
                            className={styles.paginationLink}
                            onClick={(e) => {
                                e.preventDefault();
                                handleEllipsisClick('right');
                            }}
                        >
                            ...
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        href={createPageUrl(curentPage + 1)}
                        className={cn(curentPage >= totalPages && 'hidden', styles.paginationNext)}
                        onClick={(e) => {
                            e.preventDefault();
                            if (curentPage < totalPages) setCurrentPage(curentPage + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
