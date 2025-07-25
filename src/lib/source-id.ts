import { cookies } from 'next/headers';
import 'server-only';
import { v4 as uuid } from 'uuid';

const SOURCE_ID_KEY = 'sourceId';
export const setSourceId = async () => {
    const cookieStore = await cookies();
    let sourceId = cookieStore.get(SOURCE_ID_KEY)?.value;
    if (!sourceId) {
        sourceId = uuid();
        cookieStore.set(SOURCE_ID_KEY, sourceId, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
        });
    }
    return sourceId;
};

export const getSourceId = async () => {
    const cookieStore = await cookies();
    return cookieStore.get(SOURCE_ID_KEY)?.value;
};
