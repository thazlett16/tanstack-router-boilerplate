import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorComponent, createRouter as createTanStackRouter } from '@tanstack/react-router';

import { routeTree } from '@/route-tree.gen';
import type { Locale } from '@/config/i18n';
import { createQueryClient } from '@/config/tanstack-query';

export interface RouterContext {
    queryClient: QueryClient;
    currentLocale: Locale;
}

export function createRouter() {
    const queryClient = createQueryClient();

    const router = createTanStackRouter({
        routeTree,
        context: {
            queryClient,
            currentLocale: null!,
        },
        routeMasks: [],
        search: {
            strict: true,
        },
        defaultPreload: 'intent',
        defaultPreloadStaleTime: 0,
        defaultPendingMinMs: 500,
        defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
        defaultPendingComponent: () => <>Default Pending Component</>,
        defaultNotFoundComponent: ({ data }) => <>Default Not Found Component</>,
        Wrap: ({ children }) => {
            return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
        },
    });

    return router;
}
