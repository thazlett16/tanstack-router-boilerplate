import { lazy, Suspense } from 'react';

const TanStackQueryDevToolsLazy = lazy(() =>
    import('@tanstack/react-query-devtools').then((devTool) => ({
        default: devTool.ReactQueryDevtools,
    })),
);

export const TanStackQueryDevTools = ({ showDevtools }: { showDevtools: boolean }) => {
    return (
        <Suspense>
            {showDevtools && (
                <TanStackQueryDevToolsLazy
                    buttonPosition="bottom-right"
                    position="bottom"
                    initialIsOpen={false}
                />
            )}
        </Suspense>
    );
};
