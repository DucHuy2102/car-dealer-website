import z from 'zod';

export const PageSchema = z
    .string()
    .transform((value) => Math.max(Number(value), 1))
    .optional();
