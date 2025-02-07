import { TNamedAPIResourceQuery, TPokemonPath } from '@/services/schemas/pokemon.schema';
import { apiClient } from '@/services/client';
import { NetworkError } from '@/services/errors/network.error';
import { delayFn } from '@/services/fetch/util';
import { AuthError } from '@/services/errors/auth.error';
import { DataError } from '@/services/errors/data.error';

export const pokemonListFetch = async (
    query: TNamedAPIResourceQuery,
    options?: {
        signal?: AbortSignal;
    },
) => {
    const { status, body } = await apiClient.pokemon.getPokemonList({
        fetchOptions: {
            signal: options?.signal,
        },
        query,
    });

    await delayFn();

    if (status !== 200) {
        if (status === 401) {
            throw new AuthError({
                name: 'UNAUTHENTICATED',
                message: 'User not authenticated',
                errorCode: 'auth-401',
            });
        }

        if (status === 403) {
            throw new AuthError({
                name: 'UNAUTHORIZED',
                message: 'User not authorized',
                errorCode: 'auth-403',
            });
        }

        if (status >= 400 && status < 500) {
            throw new NetworkError({
                name: `CLIENT_${status}`,
                message: 'System error occurred',
                errorCode: 'system-4xx',
            });
        }

        if (status >= 500 && status < 600) {
            throw new NetworkError({
                name: `SYSTEM_${status}`,
                message: 'System error occurred',
                errorCode: 'system-5xx',
            });
        }

        throw new NetworkError({
            name: `SYSTEM_${status}`,
            message: 'System error occurred',
            errorCode: 'system-general-error',
        });
    }

    return body;
};

export const pokemonByIDFetch = async (
    params: TPokemonPath,
    options?: {
        signal?: AbortSignal;
    },
) => {
    const { status, body } = await apiClient.pokemon.getPokemonByID({
        fetchOptions: {
            signal: options?.signal,
        },
        params,
    });

    await delayFn();

    if (status !== 200) {
        if (status === 404) {
            throw new DataError({
                name: 'NOT_FOUND',
                message: `Pokemon Type ${params.pokemonID} not found.`,
                errorCode: 'not-found-404',
            });
        }

        if (status === 401) {
            throw new AuthError({
                name: 'UNAUTHENTICATED',
                message: 'User not authenticated',
                errorCode: 'auth-401',
            });
        }

        if (status === 403) {
            throw new AuthError({
                name: 'UNAUTHORIZED',
                message: 'User not authorized',
                errorCode: 'auth-403',
            });
        }

        if (status >= 400 && status < 500) {
            throw new NetworkError({
                name: `CLIENT_${status}`,
                message: 'System error occurred',
                errorCode: 'system-4xx',
            });
        }

        if (status >= 500 && status < 600) {
            throw new NetworkError({
                name: `SYSTEM_${status}`,
                message: 'System error occurred',
                errorCode: 'system-5xx',
            });
        }

        throw new NetworkError({
            name: `SYSTEM_${status}`,
            message: 'System error occurred',
            errorCode: 'system-general-error',
        });
    }

    return body;
};
