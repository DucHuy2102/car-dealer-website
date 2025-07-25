import {
    BodyType,
    Colour,
    CurrencyCode,
    FuelType,
    OdoUnit,
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
