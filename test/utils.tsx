import { vi } from 'vitest';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';

import type { PropsWithChildren, ReactElement } from 'react';

import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { createQueryClient } from '@/config/tanstack-query';
import { createRouter } from '@/config/tanstack-router';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { ThemeProvider } from '@/providers/theme-provider';
import { LocaleProvider } from '@/providers/locale-provider';

export const renderComponent = (component: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
    vi.stubGlobal('matchMedia', (query: string) => ({
        matches: query === `(prefers-color-scheme: dark)`,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    }));

    const testQueryClient = createQueryClient();

    const TestEntryPointProvider = ({ children }: PropsWithChildren) => {
        return (
            <QueryClientProvider client={testQueryClient}>
                <ThemeProvider>
                    <LocaleProvider>{children}</LocaleProvider>
                </ThemeProvider>
            </QueryClientProvider>
        );
    };

    return {
        testQueryClient,
        ...render(component, { wrapper: TestEntryPointProvider, ...options }),
    };
};

export const renderWithRouter = (options?: Omit<RenderOptions, 'wrapper'>) => {
    const testRouter = createRouter();

    const TestRouterProvider = () => {
        const queryClient = useQueryClient();
        const { currentLocale } = useCurrentLocale();

        return (
            <>
                <RouterProvider
                    router={testRouter}
                    context={{ currentLocale, queryClient }}
                />
            </>
        );
    };

    return {
        testRouter,
        ...renderComponent(<TestRouterProvider />, {
            ...options,
        }),
    };
};
