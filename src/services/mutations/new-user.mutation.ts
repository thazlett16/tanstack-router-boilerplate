import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';

import { createNewUser } from '@/services/fetch/user.fetch';
import { userQueries } from '@/services/queries/user.query';

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
