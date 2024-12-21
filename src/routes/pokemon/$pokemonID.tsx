import { useEffect } from 'react';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import {
    useQueryErrorResetBoundary,
    useSuspenseQuery,
} from '@tanstack/react-query';
import { z } from 'zod';

import { pokemonByIDQueryOptions } from '@/services/queries/pokemon.query';
import { DataError } from '@/services/errors/data.error';

export const Route = createFileRoute('/pokemon/$pokemonID')({
    params: {
        parse: (rawParams) => ({
            pokemonID: z.string().or(z.number()).parse(rawParams.pokemonID),
        }),
        stringify: ({ pokemonID }) => ({
            pokemonID: `${pokemonID}`,
        }),
    },
    loader: async ({
        preload,
        params: { pokemonID },
        context: { queryClient },
    }) => {
        if (preload) {
            queryClient.ensureQueryData(
                pokemonByIDQueryOptions({ pokemonID: pokemonID }),
            );
        }
    },
    component: RouteComponent,
    errorComponent: RouteErrorComponent,
    pendingComponent: RoutePendingComponent,
});

function RouteComponent() {
    const { pokemonID } = Route.useParams();

    const { data: pokemon } = useSuspenseQuery(
        pokemonByIDQueryOptions({ pokemonID }),
    );

    return (
        <>
            Hello "/pokemon/$pokemonID"!
            <hr />
            <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        </>
    );
}

function RouteErrorComponent({ error }: ErrorComponentProps) {
    const { pokemonID } = Route.useParams();

    const router = useRouter();
    const queryErrorResetBoundary = useQueryErrorResetBoundary();

    useEffect(() => {
        queryErrorResetBoundary.reset();
    }, [queryErrorResetBoundary]);

    if (error instanceof DataError) {
        return (
            <>
                Pokemon not found with ID/Name of: {pokemonID}...
                <hr />
                <button
                    onClick={() => {
                        router.invalidate();
                    }}
                >
                    retry
                </button>
            </>
        );
    }

    throw error;
}

function RoutePendingComponent() {
    const { pokemonID } = Route.useParams();

    return <>Loading pokemon with ID/Name of: {pokemonID}</>;
}
