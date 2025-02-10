import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { TanStackLink } from '@/components/custom/link';

export const Route = createFileRoute('/_authenticated/user')({
    beforeLoad: ({
        preload,
        context: {
            currentUserStatus: {
                currentUser: { roles },
            },
        },
    }) => {
        // This should probably be some utility function
        if (
            !roles.some((role) => {
                return role.name === 'user' && role.type === 'view';
            })
        ) {
            if (!preload) {
                console.info('user not authorized');
            }

            // Ideally we just go up one level on redirects or always send home.
            // Should give user info in error message alternatively as well in error component or popup
            throw redirect({
                to: '/home',
            });
        }

        // If path is just route or index then throw to default of name
        if (['/user', '/user/'].includes(location.pathname)) {
            throw redirect({
                to: '/user/name',
            });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div>Hello "/_authenticated/user"!</div>
            <hr />
            <TanStackLink
                to="/user/name"
                variant="link"
            >
                User Name
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/user/roles"
                variant="link"
            >
                User Roles
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/user/new-user"
                variant="link"
            >
                New User Testing
            </TanStackLink>
            <hr />
            <Outlet />
        </>
    );
}
