import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';

import { pokemonListQueryOptions } from '@/services/queries/pokemon.query';
import { Button } from '@/components/ui/button';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { CustomLink } from '@/components/custom/link';

const LIMIT_DEFAULT = 50;
const OFFSET_DEFAULT = 0;

export const Route = createFileRoute('/pokemon/')({
    validateSearch: (rawSearch) => {
        return z
            .object({
                limit: z.number().optional().catch(LIMIT_DEFAULT),
                offset: z.number().optional().catch(OFFSET_DEFAULT),
            })
            .parse(rawSearch);
    },
    loaderDeps: ({ search: { limit, offset } }) => ({ limit, offset }),
    loader: async ({
        preload,
        context: { queryClient },
        deps: { limit = LIMIT_DEFAULT, offset = OFFSET_DEFAULT },
    }) => {
        if (preload) {
            queryClient.ensureQueryData(
                pokemonListQueryOptions({ limit, offset }),
            );
        }
    },
    component: RouteComponent,
    pendingComponent: RoutePendingComponent,
});

function RouteComponent() {
    const { limit = LIMIT_DEFAULT, offset = OFFSET_DEFAULT } =
        Route.useSearch();
    const navigate = useNavigate({ from: Route.fullPath });

    const { data: pokemonResults, isSuspending } = useSuspenseQueryDeferred({
        ...pokemonListQueryOptions({ limit, offset }),
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
            <CustomLink
                disabled={pokemonResults.previous === null}
                from={Route.fullPath}
                search={(prev) => ({
                    ...prev,
                    offset: offset > 1 ? offset - 1 : undefined,
                })}
            >
                Previous
            </CustomLink>
            <CustomLink
                disabled={pokemonResults.next === null}
                from={Route.fullPath}
                search={(prev) => ({
                    ...prev,
                    offset: offset + 1,
                })}
            >
                Next
            </CustomLink>
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
            {isSuspending && <p>Fetching Results...</p>}
            <hr />
            {pokemonResults.results.map((poke) => (
                <div key={poke.url}>
                    <Link
                        to="/pokemon/$pokemonID"
                        params={{
                            pokemonID: poke.name,
                        }}
                    >
                        {poke.name}
                    </Link>
                </div>
            ))}
        </>
    );
}

function RoutePendingComponent() {
    return <>Loading pokemon List...</>;
}
