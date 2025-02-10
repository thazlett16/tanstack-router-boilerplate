import { useMutation } from '@tanstack/react-query';
import { redirect, useNavigate } from '@tanstack/react-router';

import { createNewUser } from '@/services/fetch/user.fetch';

export const useCreateUserMutationWithNavigation = () => {
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
            console.info('useCreateUserMutationWithNavigation - onMutate - variables', variables);
        },
        onSuccess: async (data, variables, context) => {
            console.info('useCreateUserMutationWithNavigation - onSuccess - data', data);
            console.info('useCreateUserMutationWithNavigation - onSuccess - variables', variables);
            console.info('useCreateUserMutationWithNavigation - onSuccess - context', context);
        },
        onError: async (error, variables, context) => {
            console.info('useCreateUserMutationWithNavigation - onError - error', error);
            console.info('useCreateUserMutationWithNavigation - onError - variables', variables);
            console.info('useCreateUserMutationWithNavigation - onError - context', context);
        },
        onSettled: async (data, error, variables, context) => {
            console.info('useCreateUserMutationWithNavigation - onSettled - data', data);
            console.info('useCreateUserMutationWithNavigation - onSettled - error', error);
            console.info('useCreateUserMutationWithNavigation - onSettled - variables', variables);
            console.info('useCreateUserMutationWithNavigation - onSettled - context', context);

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
