import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';
import { CurrentLocaleProvider, useCurrentLocale } from '@/hooks/use-current-locale';

const router = createRouter();

export default function EntryApp() {
    return (
        <CurrentLocaleProvider>
            <InnerApp />
        </CurrentLocaleProvider>
    );
}

function InnerApp() {
    const { currentLocale } = useCurrentLocale();

    return (
        <>
            <RouterProvider
                router={router}
                context={{ currentLocale }}
            />
        </>
    );
}
