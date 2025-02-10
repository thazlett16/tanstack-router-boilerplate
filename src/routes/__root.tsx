import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { createTranslator } from 'use-intl';

import { getI18NQueryOptions } from '@/config/i18n';
import type { RouterContext } from '@/config/tanstack-router';
import { TanStackLink } from '@/components/custom/link';
import { TanStackQueryDevTools } from '@/components/devtools/tanstack-query';
import { TanStackRouterDevTools } from '@/components/devtools/tanstack-router';
import { LocaleToggle } from '@/components/util/locale-toggle';
import { ThemeToggle } from '@/components/util/theme-toggle';
import { I18NProvider } from '@/providers/intl-provider';
import { getCurrentUserStatus, userQueries } from '@/services/queries/user.query';

export const Route = createRootRouteWithContext<RouterContext>()({
    beforeLoad: async ({ context: { queryClient, currentLocale } }) => {
        const messagesPromise = queryClient.ensureQueryData(getI18NQueryOptions(currentLocale));
        const currentUserStatusPromise = getCurrentUserStatus(
            queryClient.ensureQueryData(userQueries.meQueryOptions(false)),
        );

        const [messages, currentUserStatus] = await Promise.all([messagesPromise, currentUserStatusPromise]);

        const translator = createTranslator({
            locale: currentLocale,
            messages,
        });

        return {
            translator,
            currentUserStatus,
        };
    },
    component: RootComponent,
});

function RootComponent() {
    return (
        <I18NProvider>
            <TanStackLink
                to="/"
                variant="link"
            >
                Index
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/about"
                variant="link"
            >
                About
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/pokemon"
                variant="link"
            >
                Pokemon
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/home"
                variant="link"
            >
                Home
            </TanStackLink>
            <hr />
            <TanStackLink
                to="/sign-in"
                variant="link"
            >
                Sign In
            </TanStackLink>
            <hr />
            <LocaleToggle />
            <hr />
            <ThemeToggle />
            <hr />
            <Outlet />
            <TanStackRouterDevTools showDevtools={true} />
            <TanStackQueryDevTools showDevtools={true} />
        </I18NProvider>
    );
}
