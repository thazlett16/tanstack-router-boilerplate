import { useRouter } from '@tanstack/react-router';
import { useTranslations } from 'use-intl';

import type { Locale } from '@/config/i18n';
import { useCurrentLocale } from '@/hooks/use-current-locale';
import { Button } from '@/components/base/button';

export const LocaleToggle = () => {
    const router = useRouter();

    const { setUserLocale } = useCurrentLocale();
    const t = useTranslations('languages');

    const changeLocale = (locale: Locale) => {
        setUserLocale(locale);
        router.invalidate();
    };

    return (
        <>
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
        </>
    );
};
