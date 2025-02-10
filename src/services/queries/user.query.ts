import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import { createNewUser, getCurrentUser } from '@/services/fetch/user.fetch';
import type { TUser, TUserIsAuthenticated } from '@/services/schemas/user.schema';
import { redirect, useNavigate, useRouter } from '@tanstack/react-router';

export const userQueries = {
    entity: () => ['user'] as const,
    me: () => [...userQueries.entity(), 'me'] as const,
    meQueryOptions: (throwError: boolean) => {
        return queryOptions({
            staleTime: 1000 * 60 * 5,
            queryKey: [...userQueries.me(), throwError],
            queryFn: async ({ signal }) => {
                return getCurrentUser(throwError, {
                    signal,
                });
            },
        });
    },
};

export const getCurrentUserStatus = async (userPromise: Promise<TUser>): Promise<TUserIsAuthenticated> => {
    return userPromise
        .then((currentUser) => {
            return {
                isAuthenticated: true,
                currentUser,
            };
        })
        .catch((error) => {
            console.error('User Error while fetching: ', error);

            return {
                isAuthenticated: false,
            };
        });
};

export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: async ({ throwError }: { throwError: boolean }) => {
            return createNewUser(throwError);
        },
        onSettled: async () => {
            const userQueriesToInvalidate = queryClient.invalidateQueries({
                queryKey: userQueries.entity(),
            });

            await Promise.all([userQueriesToInvalidate]);
            await router.invalidate();
        },
    });
};

export const useCreateUserMutationWithErrors = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: async ({
            throwError,
        }: {
            throwError: boolean;
            shouldNavigate: boolean;
            shouldNavigateInMutate: boolean;
            throwRedirect: boolean;
            throwRedirectInMutate: boolean;
        }) => {
            return createNewUser(throwError);
        },
        onMutate: async (variables) => {
            console.info('useCreateUserMutationWithErrors - onMutate - variables', variables);
        },
        onSuccess: async (data, variables, context) => {
            console.info('useCreateUserMutationWithErrors - onSuccess - data', data);
            console.info('useCreateUserMutationWithErrors - onSuccess - variables', variables);
            console.info('useCreateUserMutationWithErrors - onSuccess - context', context);
        },
        onError: async (error, variables, context) => {
            console.info('useCreateUserMutationWithErrors - onError - error', error);
            console.info('useCreateUserMutationWithErrors - onError - variables', variables);
            console.info('useCreateUserMutationWithErrors - onError - context', context);
        },
        onSettled: async (data, error, variables, context) => {
            console.info('useCreateUserMutationWithErrors - onSettled - data', data);
            console.info('useCreateUserMutationWithErrors - onSettled - error', error);
            console.info('useCreateUserMutationWithErrors - onSettled - variables', variables);
            console.info('useCreateUserMutationWithErrors - onSettled - context', context);

            // This always is swallowed by TanStack Query
            if (variables.throwRedirect) {
                throw redirect({
                    to: '/',
                });
            }

            // So instead should be using the navigate API
            if (variables.shouldNavigate) {
                navigate({
                    to: '/',
                });
            }
        },
    });
};
