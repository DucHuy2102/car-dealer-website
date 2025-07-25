import { prisma } from '@/lib/prisma';
import { Model, ModelVariant } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const params = new URL(req.url).searchParams;

    try {
        const makes = await prisma.make.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: { name: 'asc' },
        });

        let models: Model[] = [];
        if (params.get('make')) {
            models = await prisma.model.findMany({
                where: {
                    make: { id: Number(params.get('make')) },
                },
            });
        }

        let modelVariants: ModelVariant[] = [];
        if (params.get('make') && params.get('model')) {
            modelVariants = await prisma.modelVariant.findMany({
                where: {
                    model: { id: Number(params.get('model')) },
                },
            });
        }

        const labelValueMakes = makes.map(({ id, name }) => ({
            label: name,
            value: id.toString(),
        }));
        const labelValueModels = models.map(({ id, name }) => ({
            label: name,
            value: id.toString(),
        }));
        const labelValueModelVariants = modelVariants.map(({ id, name }) => ({
            label: name,
            value: id.toString(),
        }));

        return NextResponse.json(
            {
                makes: labelValueMakes,
                models: labelValueModels,
                modelVariants: labelValueModelVariants,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(error.message, {
                status: 400,
            });
        }
        return NextResponse.json('Internal Server Error', {
            status: 500,
        });
    }
};
