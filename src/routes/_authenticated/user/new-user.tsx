import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';

import { Button } from '@/components/base/button';
import { useCreateUserMutation, useCreateUserMutationWithErrors } from '@/services/queries/user.query';

export const Route = createFileRoute('/_authenticated/user/new-user')({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();

    const { mutate } = useCreateUserMutation();
    const { mutate: mutateWithErrorsExample } = useCreateUserMutationWithErrors();

    return (
        <>
            <div>Hello "/_authenticated/user/new-user"!</div>
            <hr />
            <Button
                onClick={() => {
                    mutate({
                        throwError: true,
                    });
                }}
            >
                New User Test basic
            </Button>
            <hr />
            <Button
                onClick={() => {
                    mutateWithErrorsExample(
                        {
                            throwError: false,
                            shouldNavigate: true,
                            shouldNavigateInMutate: false,
                            throwRedirect: false,
                            throwRedirectInMutate: false,
                        },
                        {
                            onSuccess: (data, variables, context) => {
                                console.info('mutateWithErrorsExample - onSuccess - data', data);
                                console.info('mutateWithErrorsExample - onSuccess - variables', variables);
                                console.info('mutateWithErrorsExample - onSuccess - context', context);
                            },
                            onError: (error, variables, context) => {
                                console.info('mutateWithErrorsExample - onError - error', error);
                                console.info('mutateWithErrorsExample - onError - variables', variables);
                                console.info('mutateWithErrorsExample - onError - context', context);
                            },
                            onSettled: (data, error, variables, context) => {
                                console.info('mutateWithErrorsExample - onSettled - data', data);
                                console.info('mutateWithErrorsExample - onSettled - error', error);
                                console.info('mutateWithErrorsExample - onSettled - variables', variables);
                                console.info('mutateWithErrorsExample - onSettled - context', context);

                                // This always is swallowed by TanStack Query
                                if (variables.throwRedirectInMutate) {
                                    throw redirect({
                                        to: '/',
                                    });
                                }

                                // So instead should be using the navigate API
                                if (variables.shouldNavigateInMutate) {
                                    navigate({
                                        to: '/',
                                    });
                                }
                            },
                        },
                    );
                }}
            >
                New User Test with error options
            </Button>
        </>
    );
}
