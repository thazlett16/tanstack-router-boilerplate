import type { QueryClient } from '@tanstack/react-query';
import { ErrorComponent, createRouter as createTanStackRouter } from '@tanstack/react-router';

import { routeTree } from '@/route-tree.gen';
import type { Locale } from '@/config/i18n';

export interface RouterContext {
    queryClient: QueryClient;
    currentLocale: Locale;
}

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        context: {
            queryClient: null!,
            currentLocale: null!,
        },
        routeMasks: [],
        search: {
            strict: true,
        },
        defaultPreload: 'intent',
        // This needs to be 0 as we are using @tanstack/query for data fetching
        defaultPreloadStaleTime: 0,
        // This is the minimum amount of time it takes to show pending content.
        defaultPendingMs: 500,
        // This is the minimum amount of time that the pending component will be shown.
        // This way there isn't a flash of content on load.
        defaultPendingMinMs: 500,
        defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
        defaultPendingComponent: () => <>Default Pending Component</>,
        defaultNotFoundComponent: ({ data }) => <>Default Not Found Component</>,
    });

    return router;
}
