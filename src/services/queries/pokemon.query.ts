import { queryOptions } from '@tanstack/react-query';

import { pokemonByIDFetch, pokemonListFetch } from '@/services/fetch/pokemon.fetch';
import type { TPokemonPath, TNamedAPIResourceQuery } from '@/services/schemas/pokemon.schema';

export const pokemonQueries = {
    entity: () => ['pokemon'] as const,
    list: () => [...pokemonQueries.entity(), 'list'] as const,
    listQueryOptions: (query: TNamedAPIResourceQuery) => {
        return queryOptions({
            queryKey: [...pokemonQueries.list(), query] as const,
            queryFn: async ({ signal }) => {
                return pokemonListFetch(query, {
                    signal,
                });
            },
        });
    },
    byID: () => [...pokemonQueries.entity(), 'byID'] as const,
    byIDQueryOptions: (params: TPokemonPath) => {
        return queryOptions({
            queryKey: [...pokemonQueries.byID(), params] as const,
            queryFn: async ({ signal }) => {
                return pokemonByIDFetch(params, {
                    signal,
                });
            },
        });
    },
};
