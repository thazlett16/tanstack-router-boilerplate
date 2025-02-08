import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_public')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div>Hello "/_public"!</div>
            <hr />
            <Outlet />
        </>
    );
}
