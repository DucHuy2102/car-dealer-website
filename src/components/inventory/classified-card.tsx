'use client';

import { routes } from '@/config/routes';
import { ClassifiedWithImage, MultiStepFormEnum } from '@/config/types';
import {
    formatColour,
    formatFuelType,
    formatNumber,
    formatOdoUnit,
    formatPrice,
    formatTransmission,
} from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Cog, Fuel, GaugeCircle, Paintbrush2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HTMLParser } from '../shared/html-parser';
import { Button } from '../ui/button';
import FavouriteButton from './favourite-button';

interface ClassifiedCardProps {
    classified: ClassifiedWithImage;
    favourites: number[];
}

const getKeyClassifiedInfo = (classified: ClassifiedWithImage) => {
    return [
        {
            id: 'odoReading',
            icon: <GaugeCircle className='w-4 h-4' />,
            value: `${formatNumber(classified.odoReading)} ${formatOdoUnit(classified.odoUnit)}`,
        },
        {
            id: 'transmission',
            icon: <Cog className='w-4 h-4' />,
            value: classified?.transmission ? formatTransmission(classified.transmission) : null,
        },
        {
            id: 'fuelType',
            icon: <Fuel className='w-4 h-4' />,
            value: classified?.fuelType ? formatFuelType(classified.fuelType) : null,
        },
        {
            id: 'colour',
            icon: <Paintbrush2 className='w-4 h-4' />,
            value: classified?.colour ? formatColour(classified.colour) : null,
        },
    ];
};

export default function ClassifiedCard(props: ClassifiedCardProps) {
    const pathname = usePathname();
    const { classified, favourites } = props;
    const [isFavourite, setIsFavourite] = useState(favourites.includes(classified.id));
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isFavourite && pathname === routes.favourites) setIsVisible(false);
    }, [isFavourite, pathname]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='bg-white rounded-md relative shadow-md overflow-hidden flex flex-col'
                >
                    <div className='aspect-3/2 relative'>
                        <Link href={routes.singleClassified(classified.slug)}>
                            <Image
                                placeholder='blur'
                                src={classified.images[0]?.src}
                                alt={classified.images[0]?.alt || 'Car Image'}
                                blurDataURL={classified.images[0]?.blurhash}
                                className='object-cover rounded-t-md'
                                fill
                                quality={25}
                            />
                        </Link>
                        <FavouriteButton
                            id={classified.id}
                            setIsFavourite={setIsFavourite}
                            isFavourite={isFavourite}
                        />
                        <div
                            className='absolute top-2.5 right-3.5 bg-primary 
                    text-slate-50 font-bold px-2 py-1 rounded-sm'
                        >
                            <p className='text-xs lg:text-base xl:text-lg font-semibold'>
                                {formatPrice({
                                    price: classified.price,
                                    currency: classified.currency,
                                })}
                            </p>
                        </div>
                    </div>
                    <div className='p-4 flex flex-col space-y-3 h-full'>
                        <div>
                            <Link
                                href={routes.singleClassified(classified.slug)}
                                className='text-sm md:text-base lg:text-lg font-semibold 
                            line-clamp-1 transition-colors hover:text-primary'
                            >
                                {classified.title}
                            </Link>
                            {classified?.description && (
                                <div className='text-xs md:text-sm xl:text-base text-gray-500 line-clamp-2'>
                                    <HTMLParser html={classified.description} />
                                    &nbsp;
                                </div>
                            )}

                            <ul
                                className='text-xs md:text-sm text-gray-600 xl:flex grid grid-cols-1 grid-rows-4 
                        md:grid-cols-2 md:grid-rows-4 items-center justify-between w-full mt-1 md:mt-2 lg:mt-3'
                            >
                                {getKeyClassifiedInfo(classified)
                                    .filter((v) => v.value)
                                    .map(({ id, icon, value }) => (
                                        <li
                                            key={id}
                                            className='font-semibold flex xl:flex-col items-center gap-x-1.5 
                                    cursor-pointer hover:text-primary transition-colors'
                                        >
                                            {icon} {value}
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <div
                            className='flex flex-col lg:flex-row 
                    space-y-2 lg:space-y-0 lg:gap-x-2 w-full'
                        >
                            <Button
                                asChild
                                variant={'outline'}
                                size={'sm'}
                                className='flex-1 transition-colors hover:border-white hover:bg-primary hover:text-white
                            py-2 lg:py-2.5 h-full text-xs lg:text-sm xl:text-base'
                            >
                                <Link
                                    href={routes.reserve(
                                        classified.slug,
                                        MultiStepFormEnum.WELCOME
                                    )}
                                >
                                    Reserve
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size={'sm'}
                                className='flex-1 py-2 lg:py-2.5 h-full text-xs lg:text-sm xl:text-base'
                            >
                                <Link href={routes.singleClassified(classified.slug)}>
                                    View Details
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
