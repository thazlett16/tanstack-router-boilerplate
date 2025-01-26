import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';
import { LocaleProvider, useCurrentLocale } from '@/hooks/use-current-locale';
import { ThemeProvider } from '@/hooks/use-current-theme';

const router = createRouter();

export default function EntryApp() {
    return (
        <ThemeProvider>
            <LocaleProvider>
                <InnerApp />
            </LocaleProvider>
        </ThemeProvider>
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
