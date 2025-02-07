import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { LocaleProvider } from '@/providers/locale-provider';
import { ThemeProvider } from '@/providers/theme-provider';

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
