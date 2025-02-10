import { http, HttpResponse } from 'msw';

import { pokemonByIDMock, pokemonListMock } from '@mock/pokemon/pokemon.mock';

export const pokemonListHandler = http.get('/api/v2/pokemon', async ({}) => {
    return HttpResponse.json(pokemonListMock);
});

export const pokemonListHandlerWithBadData = http.get('/api/v2/pokemon', async ({}) => {
    return HttpResponse.json({ ...pokemonListMock, extraBadTestField: 'test' });
});

export const pokemonListHandlerThrow401 = http.get('/api/v2/pokemon', async ({}) => {
    return HttpResponse.json(
        {
            message: 'User not authenticated',
        },
        { status: 401 },
    );
});

export const pokemonListHandlerThrow403 = http.get('/api/v2/pokemon', async ({}) => {
    return HttpResponse.json(
        {
            message: 'User not authorized',
        },
        { status: 401 },
    );
});

export const pokemonByIDHandler = http.get('/api/v2/pokemon/:pokemonID', async ({}) => {
    return HttpResponse.json(pokemonByIDMock);
});
