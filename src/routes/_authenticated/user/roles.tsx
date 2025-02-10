import { createFileRoute } from '@tanstack/react-router';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { userQueries } from '@/services/queries/user.query';

export const Route = createFileRoute('/_authenticated/user/roles')({
    component: RouteComponent,
});

function RouteComponent() {
    const {
        data: { firstName, lastName },
    } = useSuspenseQueryDeferred(userQueries.meQueryOptions(false));

    return (
        <>
            <div>Hello "/_authenticated/user/roles"!</div>
            <hr />
            <h1>
                First Name: <i>{firstName}</i>
            </h1>
            <hr />
            <h1>
                Last Name: <i>{lastName}</i>
            </h1>
        </>
    );
}
