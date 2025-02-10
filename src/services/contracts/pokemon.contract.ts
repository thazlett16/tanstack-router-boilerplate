import { z } from 'zod';

import { contract } from '@/services/contracts/contract';
import {
    NamedAPIResourceListSchema,
    NamedAPIResourceQuerySchema,
    PokemonPathSchema,
    PokemonSchema,
} from '@/services/schemas/pokemon.schema';

export const pokemonContract = contract.router(
    {
        getPokemonList: {
            method: 'GET',
            path: '/pokemon',
            query: NamedAPIResourceQuerySchema,
            responses: {
                200: NamedAPIResourceListSchema,
            },
        },
        getPokemonByID: {
            method: 'GET',
            path: '/pokemon/:pokemonID',
            pathParams: PokemonPathSchema,
            responses: {
                200: PokemonSchema,
                404: contract.otherResponse({
                    contentType: 'text/plain',
                    body: z.string(),
                }),
            },
        },
    },
    {
        pathPrefix: '/v2',
    },
);
