import { type QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    ErrorComponent,
    createRouter as createTanStackRouter,
    isRedirect,
} from '@tanstack/react-router';
import { ZodError } from 'zod';

import { routeTree } from '@/route-tree.gen';
import { queryClient } from '@/config/tanstack-query';
import { AuthError } from '@/services/errors/auth.error';
import { DataError } from '@/services/errors/data.error';

export type RouterContext = {
    queryClient: QueryClient;
};

export function createRouter() {
    const router = createTanStackRouter({
        routeTree,
        routeMasks: [],
        search: {
            strict: true,
        },
        context: {
            queryClient,
        },
        defaultPreload: 'intent',
        defaultPreloadStaleTime: 0,
        defaultPendingMinMs: 500,
        defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
        defaultPendingComponent: ({}) => <div>Default Pending Component</div>,
        defaultNotFoundComponent: ({}) => <>Default Not Found Component</>,
        Wrap: ({ children }) => {
            return (
                <>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </>
            );
        },
    });

    queryClient.getQueryCache().config.onError = async (error, query) => {
        if (isRedirect(error)) {
            await router.navigate(
                router.resolveRedirect({
                    ...error,
                    _fromLocation: router.state.location,
                }),
            );
            return;
        }

        if (error instanceof ZodError) {
            // TODO onError: ZodError', error
            return;
        }

        if (error instanceof AuthError) {
            // TODO onError: AuthError', error
            return;
        }

        if (error instanceof DataError) {
            // TODO onError: DataError', error
            return;
        }

        // TODO onError: OTHER', error
    };

    queryClient.getMutationCache().config.onError = async (error) => {
        if (isRedirect(error)) {
            await router.navigate(
                router.resolveRedirect({
                    ...error,
                    _fromLocation: router.state.location,
                }),
            );
            return;
        }

        if (error instanceof ZodError) {
            // TODO onError: ZodError', error
            return;
        }

        if (error instanceof AuthError) {
            // TODO onError: AuthError', error
            return;
        }

        if (error instanceof DataError) {
            // TODO onError: DataError', error
            return;
        }

        // TODO onError: OTHER', error
    };

    return router;
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
