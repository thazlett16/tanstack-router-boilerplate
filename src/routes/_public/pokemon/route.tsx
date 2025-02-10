import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/pokemon')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div>Hello "/_public/pokemon"!</div>
            <hr />
            <Outlet />
        </>
    );
}
