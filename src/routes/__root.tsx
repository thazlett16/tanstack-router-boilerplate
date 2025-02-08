import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createTranslator } from 'use-intl';

import { getI18NQueryOptions } from '@/config/i18n';
import type { RouterContext } from '@/config/tanstack-router';
import { LocaleToggle } from '@/components/util/locale-toggle';
import { ThemeToggle } from '@/components/util/theme-toggle';
import { I18NProvider } from '@/providers/intl-provider';

export const Route = createRootRouteWithContext<RouterContext>()({
    beforeLoad: async ({ context: { queryClient, currentLocale } }) => {
        const messages = await queryClient.ensureQueryData(getI18NQueryOptions(currentLocale));

        const translator = createTranslator({
            locale: currentLocale,
            messages,
        });

        return {
            translator,
        };
    },
    component: RootComponent,
});

function RootComponent() {
    return (
        <I18NProvider>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/about">About</Link>
            <hr />
            <Link to="/pokemon">Pokemon</Link>
            <hr />
            <LocaleToggle />
            <hr />
            <ThemeToggle />
            <hr />
            <Outlet />
            <TanStackRouterDevtools
                position="bottom-left"
                initialIsOpen={false}
            />
            <ReactQueryDevtools
                buttonPosition="bottom-right"
                position="bottom"
                initialIsOpen={false}
            />
        </I18NProvider>
    );
}
