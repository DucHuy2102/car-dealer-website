import { routes } from '@/config/routes';
import { AwaitedPageProps } from '@/config/types';
import { ClassifiedFilterSchema } from '@/schemas/classified.schema';
import {
    BodyType,
    ClassifiedStatus,
    Colour,
    CurrencyCode,
    FuelType,
    OdoUnit,
    Prisma,
    Transmission,
    ULEZCompliance,
} from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface IPrice {
    price: number | null;
    currency: CurrencyCode | null;
}

export const formatPrice = ({ price, currency }: IPrice) => {
    if (!price) return '0';
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currencyDisplay: 'symbol',
        ...(currency && { currency }),
        maximumFractionDigits: 0,
    });
    if (currency === 'USD') return formatter.format(price / 100).replace('US$', '$');
    return formatter.format(price / 100);
};

export const formatNumber = (num: number | null, option?: Intl.NumberFormatOptions) => {
    if (!num) return '0';
    return new Intl.NumberFormat('en-GB', option).format(num);
};

export const formatOdoUnit = (unit: OdoUnit) => {
    return unit === OdoUnit.MILES ? 'mi' : 'km';
};

export const formatTransmission = (transmission: Transmission) => {
    return transmission === Transmission.AUTOMATIC ? 'Automatic' : 'Manual';
};

export const formatFuelType = (fuelType: FuelType) => {
    switch (fuelType) {
        case FuelType.PETROL:
            return 'Petrol';
        case FuelType.DIESEL:
            return 'Diesel';
        case FuelType.ELECTRIC:
            return 'Electric';
        case FuelType.HYBRID:
            return 'Hybrid';
        default:
            return 'Unknown';
    }
};

export const formatColour = (colour: Colour) => {
    if (!colour) return 'Unknown';
    const formattedColour = colour.charAt(0).toUpperCase() + colour.slice(1).toLowerCase();
    return formattedColour;
};

export const formatUlezCompliance = (ulezCompliance: ULEZCompliance) => {
    return ulezCompliance === ULEZCompliance.EXEMPT ? 'Exempt' : 'Non-Exempt';
};

export const formatBody = (bodyType: BodyType) => {
    switch (bodyType) {
        case BodyType.SEDAN:
            return 'Sedan';
        case BodyType.SUV:
            return 'SUV';
        case BodyType.WAGON:
            return 'Wagon';
        case BodyType.HATCHBACK:
            return 'Hatchback';
        case BodyType.COUPLE:
            return 'Coupe';
        case BodyType.CONVERTIBLE:
            return 'Convertible';
        default:
            return 'Unknown';
    }
};

export const navLinks = [
    { id: 1, href: routes.home, label: 'Home' },
    { id: 2, href: routes.inventory, label: 'Inventory' },
];

export const buildClassifiedFilterQuery = (
    searchParams: AwaitedPageProps['searchParams'] | undefined
): Prisma.ClassifiedWhereInput => {
    const { data } = ClassifiedFilterSchema.safeParse(searchParams);
    if (!data)
        return {
            status: ClassifiedStatus.LIVE,
        };

    const keys = Object.keys(data);
    const taxonomyFilters = ['make', 'model', 'modelVariant'];
    const rangeFilters = {
        minYear: 'year',
        maxYear: 'year',
        minPrice: 'price',
        maxPrice: 'price',
        minReading: 'odoReading',
        maxReading: 'odoReading',
    };
    const numberFilters = ['seats', 'doors'];
    const enumFilters = [
        'odoUnit',
        'currency',
        'transmission',
        'fuelType',
        'bodyType',
        'colour',
        'ulezCompliance',
    ];

    const mapParamsToFields = keys.reduce((acc, key) => {
        const value = searchParams?.[key] as string | undefined;
        if (!value) return acc;

        if (taxonomyFilters.includes(key)) {
            acc[key] = { id: Number(value) };
        } else if (enumFilters.includes(key)) {
            acc[key] = value.toUpperCase();
        } else if (numberFilters.includes(key)) {
            acc[key] = Number(value);
        } else if (key in rangeFilters) {
            const field = rangeFilters[key as keyof typeof rangeFilters];
            acc[field] = acc[field] || {};
            if (key.startsWith('min')) {
                acc[field].gte = Number(value);
            } else if (key.startsWith('max')) {
                acc[field].lte = Number(value);
            }
        }

        return acc;
    }, {} as { [key: string]: any });

    return {
        status: ClassifiedStatus.LIVE,
        ...(searchParams?.q && {
            OR: [
                {
                    title: { contains: searchParams.q as string, mode: 'insensitive' },
                },
                {
                    description: { contains: searchParams.q as string, mode: 'insensitive' },
                },
            ],
        }),
        ...mapParamsToFields,
    };
};
