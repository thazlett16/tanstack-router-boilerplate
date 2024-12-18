import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';

import { pokemonListQueryOptions } from '@/services/queries/pokemon.query';
import { type TNamedAPIResourceQuery } from '@/services/schemas/pokemon.schema';

const TMP_OFFSET: TNamedAPIResourceQuery = {
    limit: 200,
};

export const Route = createFileRoute('/pokemon/')({
    loader: async ({ context: { queryClient } }) => {
        await queryClient.ensureQueryData(pokemonListQueryOptions(TMP_OFFSET));
    },
    component: RouteComponent,
    pendingComponent: RoutePendingComponent,
});

function RouteComponent() {
    const {
        data: { results: pokemonRawResults },
    } = useSuspenseQuery(pokemonListQueryOptions(TMP_OFFSET));

    const pokemon = pokemonRawResults.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return (
        <div>
            <h3>Hello "/pokemon/"!</h3>
            {pokemon.map((poke) => (
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
        </div>
    );
}

function RoutePendingComponent() {
    return <>Loading pokemon List...</>;
}
