import { c } from '@/services/c';
import { pokemonContract } from './pokemon.contract';

export const rootContract = c.router(
    {
        pokemon: pokemonContract,
    },
    {
        strictStatusCodes: true,
    },
);
