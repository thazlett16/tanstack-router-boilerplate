import type { HttpHandler } from 'msw';

import { pokemonByIDHandler, pokemonListHandler } from '@mock/pokemon/pokemon.handler';

export const handlers: HttpHandler[] = [pokemonListHandler, pokemonByIDHandler];
