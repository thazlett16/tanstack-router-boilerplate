import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { AppEntryProviders } from '@/providers/app-entry-providers';

const router = createRouter();

export default function EntryApp() {
    return (
        <AppEntryProviders>
            <InnerApp />
        </AppEntryProviders>
    );
}

function InnerApp() {
    const queryClient = useQueryClient();
    const { currentLocale } = useCurrentLocale();

    return (
        <>
            <RouterProvider
                router={router}
                context={{ currentLocale, queryClient }}
            />
        </>
    );
}
