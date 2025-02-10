import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_unauthenticated/sign-in')({
    beforeLoad: ({ context: { currentUserStatus } }) => {
        // Notice how current user is type narrowed from the route.tsx file
        console.log(currentUserStatus);
    },
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div>Hello "/_unauthenticated/sign-in"!</div>
        </>
    );
}
