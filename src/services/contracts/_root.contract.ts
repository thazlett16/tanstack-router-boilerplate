import { contract } from '@/services/contracts/contract';
import { pokemonContract } from './pokemon.contract';

export const rootContract = contract.router(
    {
        pokemon: pokemonContract,
    },
    {
        // This should not be enabled.
        // We will check by type narrowing in our fetch functions
        // strictStatusCodes: true,
    },
);
