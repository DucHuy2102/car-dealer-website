import { routes } from '@/config/routes';
import { Favourites } from '@/config/types';
import { redisStore } from '@/lib/redis-store';
import { setSourceId } from '@/lib/source-id';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

const validateIdSchema = z.object({ id: z.number().int() });

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { data, error } = validateIdSchema.safeParse(body);
    if (!data) {
        return NextResponse.json(
            {
                error: error?.message || 'Invalid request body',
            },
            {
                status: 400,
            }
        );
    }

    // get the sourceId from cookies
    const sourceId = await setSourceId();

    // retrieve the favourites from redis using the sourceId
    const storedFavourites = await redisStore.get<Favourites>(sourceId);
    const favourites: Favourites = storedFavourites || { ids: [] };

    // add or remove the id based on its current presenece in the favourites
    // add the id if it is not present, otherwise remove it
    if (favourites.ids.includes(data.id)) {
        favourites.ids = favourites.ids.filter((id) => id !== data.id);
    } else {
        favourites.ids.push(data.id);
    }

    // update the redis store with the updated favourites
    await redisStore.set(sourceId, favourites, { ex: 60 * 60 * 24 * 30 });

    revalidatePath(routes.favourites);
    return NextResponse.json({ ids: favourites.ids }, { status: 200 });
};
