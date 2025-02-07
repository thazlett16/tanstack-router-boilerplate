import { type PropsWithChildren, useState } from 'react';

import {
    type Locale,
    LocaleContext,
    getLocalStorageLocale,
    getUserDefaultLocale,
    setLocalStorageLocale,
} from '@/config/i18n';

export const LocaleProvider = ({ children }: PropsWithChildren) => {
    const [currentLocale, _setCurrentLocale] = useState<Locale>(() => {
        const localStorageLocale = getLocalStorageLocale();
        if (localStorageLocale !== null) {
            return localStorageLocale;
        }

        return getUserDefaultLocale();
    });

    const setUserLocale = (locale: Locale) => {
        setLocalStorageLocale(locale);
        _setCurrentLocale(locale);
    };

    const setUserLocaleToDefault = () => {
        const defaultLocale = getUserDefaultLocale();

        setLocalStorageLocale(defaultLocale);
        _setCurrentLocale(defaultLocale);
    };

    const isUserLocaleDefault = (): boolean => {
        const defaultLocale = getUserDefaultLocale();

        return defaultLocale === currentLocale;
    };

    return (
        <LocaleContext.Provider
            value={{
                currentLocale,
                setUserLocale,
                setUserLocaleToDefault,
                isUserLocaleDefault,
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};
