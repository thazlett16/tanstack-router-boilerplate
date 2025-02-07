import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { fallback } from '@tanstack/react-router-zod-adapter';

import { z } from 'zod';

import { pokemonQueries } from '@/services/queries/pokemon.query';
import { Button } from '@/components/base/button';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { TanStackLink } from '@/components/custom/link';

const LIMIT_DEFAULT = 50;
const OFFSET_DEFAULT = 0;

export const Route = createFileRoute('/pokemon/')({
    validateSearch: z.object({
        limit: fallback(z.number(), LIMIT_DEFAULT).default(LIMIT_DEFAULT),
        offset: fallback(z.number(), OFFSET_DEFAULT).default(OFFSET_DEFAULT),
    }),
    loaderDeps: ({ search: { limit, offset } }) => ({ limit, offset }),
    context: () => {},
    loader: ({ context: { queryClient }, deps: { limit, offset } }) => {
        queryClient.ensureQueryData(pokemonQueries.listQueryOptions({ limit, offset }));
    },
    component: RouteComponent,
    pendingComponent: RoutePendingComponent,
});

function RouteComponent() {
    const { limit, offset } = Route.useSearch();
    const navigate = useNavigate({ from: Route.fullPath });

    const { data: pokemonResults, isSuspending } = useSuspenseQueryDeferred({
        ...pokemonQueries.listQueryOptions({ limit, offset }),
        select: (data) => {
            const pokemon = data.results.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });

            return {
                ...data,
                results: pokemon,
            };
        },
    });

    return (
        <>
            <h3>Hello "/pokemon/"!</h3>
            <hr />
            <TanStackLink
                disabled={pokemonResults.previous === null}
                from={Route.fullPath}
                search={(prev) => ({
                    ...prev,
                    offset: offset > 1 ? offset - 1 : undefined,
                })}
                variant="link"
            >
                Previous
            </TanStackLink>
            <TanStackLink
                disabled={pokemonResults.next === null}
                from={Route.fullPath}
                search={(prev) => ({
                    ...prev,
                    offset: offset + 1,
                })}
                variant="link"
            >
                Next
            </TanStackLink>
            <Button
                disabled={pokemonResults.previous === null}
                onClick={() => {
                    navigate({
                        search: (prev) => ({
                            ...prev,
                            offset: offset > 1 ? offset - 1 : undefined,
                        }),
                    });
                }}
            >
                Previous
            </Button>
            <Button
                disabled={pokemonResults.next === null}
                onClick={() => {
                    navigate({
                        search: (prev) => ({
                            ...prev,
                            offset: offset + 1,
                        }),
                    });
                }}
            >
                Next
            </Button>
            <hr />

            {isSuspending && (
                <>
                    <p>Fetching Results...</p>
                    <hr />
                </>
            )}

            {pokemonResults.results.map((poke) => (
                <div key={poke.url}>
                    <TanStackLink
                        to="/pokemon/$pokemonID"
                        params={{
                            pokemonID: poke.name,
                        }}
                        variant="link"
                        size="sm"
                    >
                        {poke.name}
                    </TanStackLink>
                </div>
            ))}
        </>
    );
}

function RoutePendingComponent() {
    return <>Loading pokemon List...</>;
}
