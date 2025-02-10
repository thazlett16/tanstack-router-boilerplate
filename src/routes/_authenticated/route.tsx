import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import { TanStackLink } from '@/components/custom/link';

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async ({ preload, context: { currentUserStatus } }) => {
        if (!currentUserStatus.isAuthenticated) {
            if (!preload) {
                console.info('User is not authenticated!', currentUserStatus);
            }

            throw redirect({
                to: '/sign-in',
                search: {
                    callbackURL: location.pathname,
                },
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
            <div>Hello "/_authenticated"!</div>
            <hr />
            <TanStackLink
                to="/home"
                variant="link"
            >
                Home
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/user"
                variant="link"
            >
                User
            </TanStackLink>
            <hr />
            <Outlet />
        </>
    );
}
