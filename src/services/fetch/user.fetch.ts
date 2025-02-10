import { AuthError } from '@/errors/auth.error';
import { delayFn } from '@/services/fetch/util';

import { currentUserMock } from '@mock/user/user.mock';

export const getCurrentUser = async (
    throwError: boolean,
    options?: {
        signal?: AbortSignal;
    },
) => {
    await delayFn();

    // This is just an example dummy error.
    // If this was a real service we would use a helper or narrow response based off status code.
    if (throwError) {
        throw new AuthError({
            name: 'UNAUTHENTICATED',
            message: 'System error occurred',
        });
    }

    return Promise.resolve(currentUserMock);
};

export const createNewUser = async (
    throwError: boolean,
    options?: {
        signal?: AbortSignal;
    },
) => {
    await delayFn();

    // This is just an example dummy error.
    // If this was a real service we would use a helper or narrow response based off status code.
    if (throwError) {
        throw new AuthError({
            name: 'UNAUTHENTICATED',
            message: 'System error occurred',
        });
    }

    return Promise.resolve(currentUserMock);
};
