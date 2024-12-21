import { queryOptions } from '@tanstack/react-query';

import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { apiClient } from '@/services/client';
import {
    type TPokemonPath,
    type TNamedAPIResourceQuery,
} from '@/services/schemas/pokemon.schema';
import { DataError } from '@/services/errors/data.error';

const ARTIFICIAL_DELAY = 2 * 1000;

export const pokemonListQueryOptions = (query: TNamedAPIResourceQuery) => {
    return queryOptions({
        queryKey: ['pokemon', 'list', query],
        queryFn: async ({ signal }) => {
            const delayPromise = new Promise((r) =>
                setTimeout(r, ARTIFICIAL_DELAY),
            );
            await delayPromise;

            const response = await apiClient.pokemon.getPokemonList({
                fetchOptions: {
                    signal,
                },
                query,
            });

            return response.body;
        },
    });
};

export const usePokemonListQuery = (query: TNamedAPIResourceQuery) => {
    return useSuspenseQueryDeferred(pokemonListQueryOptions(query));
};

export const pokemonByIDQueryOptions = (params: TPokemonPath) => {
    return queryOptions({
        queryKey: ['pokemon', 'byID', params],
        queryFn: async ({ signal }) => {
            const delayPromise = new Promise((r) =>
                setTimeout(r, ARTIFICIAL_DELAY),
            );
            await delayPromise;

            const response = await apiClient.pokemon.getPokemonByID({
                fetchOptions: {
                    signal,
                },
                params,
            });

            if (response.status === 404) {
                throw new DataError({
                    name: 'NOT_FOUND',
                    message: 'Pokemon Not Found',
                });
            }

            return response.body;
        },
    });
};

export const usePokemonByIDQuery = (params: TPokemonPath) => {
    return useSuspenseQueryDeferred(pokemonByIDQueryOptions(params));
};
