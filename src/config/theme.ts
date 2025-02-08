import { createContext } from 'react';

import { z } from 'zod';

export const DEFAULT_THEME = 'system' as const;

const AVAILABLE_THEMES = [DEFAULT_THEME, 'dark', 'light'] as const;

export type Theme = (typeof AVAILABLE_THEMES)[number];

const availableThemesSchema = z.enum(AVAILABLE_THEMES);

const THEME_LOCAL_STORAGE_KEY = 'CURRENT_USER_THEME';

export const getLocalStorageTheme = (): Theme | null => {
    const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);

    const parsedTheme = availableThemesSchema.safeParse(theme);
    if (parsedTheme.success) {
        return parsedTheme.data;
    }

    return null;
};

export const setLocalStorageTheme = (theme: Theme) => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
};

export const ThemeContext = createContext<{
    currentTheme: Theme;
    setUserTheme: (theme: Theme) => void;
    setUserThemeToDefault: () => void;
    isUserThemeDefault: () => boolean;
} | null>(null);
