import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';
import { useCurrentLocale } from '@/hooks/use-current-locale';

const router = createRouter();

export const EntryApp = () => {
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
};
