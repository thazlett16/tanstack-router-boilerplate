import { lazy, Suspense } from 'react';

const TanStackRouterDevToolsLazy = lazy(() =>
    import('@tanstack/react-router-devtools').then((devTool) => ({
        default: devTool.TanStackRouterDevtools,
    })),
);

export const TanStackRouterDevTools = ({ showDevtools }: { showDevtools: boolean }) => {
    return (
        <Suspense>
            {showDevtools && (
                <TanStackRouterDevToolsLazy
                    position="bottom-left"
                    initialIsOpen={false}
                />
            )}
        </Suspense>
    );
};
