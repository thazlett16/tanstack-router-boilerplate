import { z } from 'zod';

import { c } from '@/services/c';
import {
    NamedAPIResourceListSchema,
    NamedAPIResourceQuerySchema,
    PokemonPathSchema,
    PokemonSchema,
} from '@/services/schemas/pokemon.schema';

export const pokemonContract = c.router(
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
                404: c.otherResponse({
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
