import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            // Need slight stale time so after preloading we don't immediately fetch it again
            staleTime: 10 * 1000,
        },
    },
});
