import type { PropsWithChildren } from 'react';
import { Link, Outlet, createRootRouteWithContext, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { RouterContext } from '@/config/tanstack-router';
import { getI18NQueryOptions, Locale, useI18NSuspenseQuery } from '@/config/i18n';
import { createTranslator, IntlProvider, useTranslations } from 'use-intl';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { Button } from '@/components/ui/button';

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
    component: () => {
        console.info('TEST - component');
        return (
            <DocumentIntlProvider>
                <RootComponent />
            </DocumentIntlProvider>
        );
    },
});

const DocumentIntlProvider = ({ children }: PropsWithChildren) => {
    const { currentLocale } = useCurrentLocale();
    const { data: messages } = useI18NSuspenseQuery(currentLocale);

    console.info('TEST - DocumentIntlProvider');
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
    const router = useRouter();

    const { setUserLocale } = useCurrentLocale();
    const t = useTranslations('languages');

    const changeLocale = (locale: Locale) => {
        setUserLocale(locale);
        router.invalidate();
    };

    console.info('TEST - RootComponent');

    return (
        <>
            <Link
                to="/"
                activeOptions={{ exact: true }}
            >
                Home
            </Link>
            <hr />
            <Link to="/pokemon">Pokemon</Link>
            <hr />
            <Button
                onClick={() => {
                    changeLocale('en');
                }}
            >
                {t('english')}
            </Button>
            <hr />
            <Button
                onClick={() => {
                    changeLocale('fr');
                }}
            >
                {t('french')}
            </Button>
            <hr />
            <Button
                onClick={() => {
                    changeLocale('es');
                }}
            >
                {t('spanish')}
            </Button>
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
        </>
    );
}
