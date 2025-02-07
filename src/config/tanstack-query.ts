import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

export const createQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                // Need slight stale time so after preloading we don't immediately fetch it again
                staleTime: 10 * 1000,
            },
        },
        queryCache: new QueryCache({
            // onSuccess: (data, query) => {},
            // onError: (error, query) => {},
            // onSettled: (data, error, query) => {},
        }),
        mutationCache: new MutationCache({
            // onMutate: (variables, mutation) => {},
            // onSuccess: (data, variables, context, mutation) => {},
            // onError: (error, variables, context, mutation) => {},
            // onSettled: (data, error, variables, context, mutation) => {},
        }),
    });
};
