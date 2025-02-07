import type { PropsWithChildren } from 'react';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { RouterContext } from '@/config/tanstack-router';
import { getI18NQueryOptions } from '@/config/i18n';
import { createTranslator, IntlProvider } from 'use-intl';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { LocaleToggle } from '@/components/util/locale-toggle';
import { ThemeToggle } from '@/components/util/theme-toggle';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';

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

const DocumentIntlProvider = ({ children }: PropsWithChildren) => {
    const { currentLocale } = useCurrentLocale();
    const { data: messages } = useSuspenseQueryDeferred(getI18NQueryOptions(currentLocale));

    return (
        <IntlProvider
            locale={currentLocale}
            messages={messages}
        >
            {children}
        </IntlProvider>
    );
};

function RootComponent() {
    return (
        <DocumentIntlProvider>
            <Link
                to="/"
                activeOptions={{ exact: true }}
            >
                Home
            </Link>
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
        </DocumentIntlProvider>
    );
}
