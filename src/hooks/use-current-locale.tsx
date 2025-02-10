import { use } from 'react';

import { LocaleContext } from '@/config/i18n';

export const useCurrentLocale = () => {
    const contextValue = use(LocaleContext);
    if (contextValue === null) {
        throw new Error('useCurrentLocale must be used within a LocaleProvider');
    }

    return contextValue;
};
