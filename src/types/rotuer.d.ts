import { createRouter } from '@/config/tanstack-router';

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
