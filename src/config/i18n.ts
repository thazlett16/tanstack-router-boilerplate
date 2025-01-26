import type { LiteralUnion } from 'type-fest';
import { z } from 'zod';

import type baseMessages from '@/config/messages/en';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

const DEFAULT_LOCALE = 'en' as const;
const AVAILABLE_LOCALES = [DEFAULT_LOCALE, 'fr', 'es'] as const;

const availableLocalesSchema = z.enum(AVAILABLE_LOCALES);

export type Messages = typeof baseMessages;
export type Locale = (typeof AVAILABLE_LOCALES)[number];

const LOCALE_LOCAL_STORAGE_KEY = 'CURRENT_USER_LOCALE';

export const getLocalStorageLocale = (): Locale | null => {
    const locale = localStorage.getItem('locale');

    const parsedLocale = availableLocalesSchema.safeParse(locale);
    if (parsedLocale.success) {
        return parsedLocale.data;
    }

    return null;
};

export const setLocalStorageLocale = (locale: Locale) => {
    localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, locale);
};

const isAvailableLocale = (locale: LiteralUnion<Locale, string>): locale is Locale => {
    return AVAILABLE_LOCALES.includes(locale);
};

export const getUserDefaultLocale = (): Locale => {
    for (const language of navigator.languages) {
        if (isAvailableLocale(language)) {
            return language;
        }

        const baseLanguage = new Intl.Locale(language).language;
        if (isAvailableLocale(baseLanguage)) {
            return baseLanguage;
        }
    }

    return DEFAULT_LOCALE;
};

const lazyLoadLocale = async (locale: Locale) => {
    const messages = await import(`@/config/messages/${locale}.ts`);

    return messages.default as Messages;
};

export const getI18NQueryOptions = (locale: Locale) => {
    return queryOptions({
        // 12 Hours of stale time
        staleTime: 1000 * 60 * 60 * 12,
        queryKey: ['i18n', locale],
        queryFn: async () => {
            return await lazyLoadLocale(locale);
        },
    });
};

export const useI18NSuspenseQuery = (locale: Locale) => {
    return useSuspenseQuery(getI18NQueryOptions(locale));
};
