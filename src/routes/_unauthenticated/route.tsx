import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { fallback } from '@tanstack/react-router-zod-adapter';
import { z } from 'zod';

const DEFAULT_REDIRECT_URL = '/home' as const;

export const Route = createFileRoute('/_unauthenticated')({
    validateSearch: z.object({
        callbackURL: fallback(z.string(), DEFAULT_REDIRECT_URL).default(DEFAULT_REDIRECT_URL),
    }),
    beforeLoad: async ({ preload, context: { currentUserStatus }, search: { callbackURL } }) => {
        if (currentUserStatus.isAuthenticated) {
            if (!preload) {
                console.info('Already authenticated', currentUserStatus);
            }

            throw redirect({
                to: callbackURL,
            });
        }

        return {
            currentUserStatus,
        };
    },
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div>Hello "/_unauthenticated"!</div>
            <hr />
            <Outlet />
        </>
    );
}
