import { z } from 'zod';

const AVAILABLE_THEMES = ['system', 'dark', 'light'] as const;

export type Theme = (typeof AVAILABLE_THEMES)[number];

const availableThemesSchema = z.enum(AVAILABLE_THEMES);

const THEME_LOCAL_STORAGE_KEY = 'CURRENT_USER_THEME';

export const DEFAULT_THEME: Theme = 'system';

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
