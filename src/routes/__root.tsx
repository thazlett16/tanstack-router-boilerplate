import {
    Link,
    Outlet,
    createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { RouterContext } from '@/config/tanstack-router';

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <Link
                to="/"
                activeOptions={{ exact: true }}
            >
                Home
            </Link>
            <hr />
            <Link to="/pokemon">Pokemon</Link>
            <hr />
            <Outlet />
            <TanStackRouterDevtools
                position="bottom-left"
                initialIsOpen={false}
            />
            <ReactQueryDevtools
                buttonPosition="bottom-right"
                position="bottom"
                initialIsOpen={false}
            />
        </>
    );
}
