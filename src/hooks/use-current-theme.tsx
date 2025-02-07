import { use } from 'react';
import { ThemeContext } from '@/config/theme';

export const useCurrentTheme = () => {
    const contextValue = use(ThemeContext);
    if (contextValue === null) {
        throw new Error('useCurrentTheme must be used within a ThemeProvider');
    }

    return contextValue;
};
