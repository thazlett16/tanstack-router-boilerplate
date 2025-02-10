import type { QueryClientConfig } from '@tanstack/react-query';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

export const createQueryClient = (config?: QueryClientConfig) => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                // Need slight stale time so after preloading we don't immediately fetch it again
                staleTime: 10 * 1000,
                ...config?.defaultOptions?.queries,
            },
            ...config?.defaultOptions,
        },
        queryCache: new QueryCache({
            // onSuccess: (data, query) => {},
            // onError: (error, query) => {},
            // onSettled: (data, error, query) => {},
        }),
        mutationCache: new MutationCache({
            // onMutate: (variables, mutation) => {
            //     console.info('MutationCache - onMutate - variables', variables);
            //     console.info('MutationCache - onMutate - mutation', mutation);
            // },
            // onSuccess: (data, variables, context, mutation) => {
            //     console.info('MutationCache - onSuccess - data', data);
            //     console.info('MutationCache - onSuccess - variables', variables);
            //     console.info('MutationCache - onSuccess - context', context);
            //     console.info('MutationCache - onSuccess - mutation', mutation);
            // },
            // onError: (error, variables, context, mutation) => {
            //     console.info('MutationCache - onError - error', error);
            //     console.info('MutationCache - onError - variables', variables);
            //     console.info('MutationCache - onError - context', context);
            //     console.info('MutationCache - onError - mutation', mutation);
            // },
            // onSettled: (data, error, variables, context, mutation) => {
            //     console.info('MutationCache - onSettled - data', data);
            //     console.info('MutationCache - onSettled - error', error);
            //     console.info('MutationCache - onSettled - variables', variables);
            //     console.info('MutationCache - onSettled - context', context);
            //     console.info('MutationCache - onSettled - mutation', mutation);
            // },
        }),
        ...config,
    });
};
