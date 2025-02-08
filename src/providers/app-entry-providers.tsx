import type { PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { createQueryClient } from '@/config/tanstack-query';
import { LocaleProvider } from '@/providers/locale-provider';
import { ThemeProvider } from '@/providers/theme-provider';

const queryClient = createQueryClient();

export const AppEntryProviders = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <LocaleProvider>{children}</LocaleProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
