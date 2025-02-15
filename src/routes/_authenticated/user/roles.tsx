import { createFileRoute } from '@tanstack/react-router';

import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';
import { userQueries } from '@/services/queries/user.query';

export const Route = createFileRoute('/_authenticated/user/roles')({
    component: RouteComponent,
});

function RouteComponent() {
    const {
        data: { roles },
    } = useSuspenseQueryDeferred(userQueries.meQueryOptions(false));

    return (
        <>
            <div>Hello "/_authenticated/user/roles"!</div>
            <hr />
            <pre>{JSON.stringify(roles, null, 2)}</pre>
        </>
    );
}
