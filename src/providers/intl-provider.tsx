import type { PropsWithChildren } from 'react';

import { IntlProvider } from 'use-intl';

import { getI18NQueryOptions } from '@/config/i18n';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { useSuspenseQueryDeferred } from '@/hooks/use-suspense-query-deferred';

export const I18NProvider = ({ children }: PropsWithChildren) => {
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
