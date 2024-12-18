import { RouterProvider } from '@tanstack/react-router';

import { createRouter } from '@/config/tanstack-router';

const router = createRouter();

interface EntryAppProps {}

export default function EntryApp({}: EntryAppProps) {
    return (
        <>
            <RouterProvider
                router={router}
                context={{}}
            />
        </>
    );
}
