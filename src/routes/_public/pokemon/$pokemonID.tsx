import { useEffect } from 'react';

import type { ErrorComponentProps } from '@tanstack/react-router';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { z } from 'zod';

import { DataError } from '@/errors/data.error';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { pokemonQueries } from '@/services/queries/pokemon.query';

export const Route = createFileRoute('/_public/pokemon/$pokemonID')({
    params: {
        parse: (rawParams) => ({
            pokemonID: z.string().or(z.number()).parse(rawParams.pokemonID),
        }),
        stringify: ({ pokemonID }) => ({
            pokemonID: `${pokemonID}`,
        }),
    },
    loader: ({ params: { pokemonID }, context: { queryClient } }) => {
        queryClient.ensureQueryData(pokemonQueries.byIDQueryOptions({ pokemonID: pokemonID }));
    },
    component: RouteComponent,
    errorComponent: RouteErrorComponent,
    pendingComponent: RoutePendingComponent,
});

function RouteComponent() {
    const { pokemonID } = Route.useParams();

    const { data: pokemon, isSuspending } = useSuspenseQueryDeferred(pokemonQueries.byIDQueryOptions({ pokemonID }));

    return (
        <>
            <div>Hello "/pokemon/$pokemonID"!</div>
            <hr />

            {isSuspending && (
                <>
                    <p>Fetching Results...</p>
                    <hr />
                </>
            )}

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
                <div>Error "/_public/pokemon/$pokemonID"!</div>
                <p>Pokemon not found with ID/Name of: {pokemonID}...</p>
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

    return (
        <>
            <div>Pending "/_public/pokemon/$pokemonID"!</div>
            <p>Loading pokemon with ID/Name of: {pokemonID}</p>
        </>
    );
}
