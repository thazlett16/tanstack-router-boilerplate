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
