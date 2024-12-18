import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div>
            Hello "/pokemon" Layout!
            <Outlet />
        </div>
    );
}
