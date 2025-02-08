import type { HttpHandler } from 'msw';

import { pokemonByIDHandler, pokemonListHandler } from './pokemon/pokemon.handler';

export const handlers: HttpHandler[] = [pokemonListHandler, pokemonByIDHandler];
