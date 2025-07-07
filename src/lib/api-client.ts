import ky, { type Options } from 'ky';

export const api = {
    get: <TResponse>(endpoint: string, options?: Options) =>
        ky.get(endpoint, options).json<TResponse>(),
    post: <TResponse>(endpoint: string, options?: Options) =>
        ky.post(endpoint, options).json<TResponse>(),
};
