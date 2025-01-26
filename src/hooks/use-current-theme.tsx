import {
    type PropsWithChildren,
    createContext,
    use,
    useState,
    useEffect,
} from 'react';
import {
    type Theme,
    DEFAULT_THEME,
    getLocalStorageTheme,
    setLocalStorageTheme,
} from '@/config/theme';

const ThemeContext = createContext<{
    currentTheme: Theme;
    setUserTheme: (theme: Theme) => void;
    setUserThemeToDefault: () => void;
    isUserThemeDefault: () => boolean;
} | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [currentTheme, _setCurrentTheme] = useState<Theme>(() => {
        const localStorageTheme = getLocalStorageTheme();
        if (localStorageTheme !== null) {
            return localStorageTheme;
        }

        return DEFAULT_THEME;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');

        if (currentTheme === 'system') {
            const systemTheme = window.matchMedia(
                '(prefers-color-scheme: dark)',
            ).matches
                ? 'dark'
                : 'light';

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(currentTheme);
    }, [currentTheme]);

    const setUserTheme = (theme: Theme) => {
        setLocalStorageTheme(theme);
        _setCurrentTheme(theme);
    };

    const setUserThemeToDefault = () => {
        setLocalStorageTheme(DEFAULT_THEME);
        _setCurrentTheme(DEFAULT_THEME);
    };

    const isUserThemeDefault = (): boolean => {
        return DEFAULT_THEME === currentTheme;
    };

    return (
        <ThemeContext.Provider
            value={{
                currentTheme,
                setUserTheme,
                setUserThemeToDefault,
                isUserThemeDefault,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useCurrentTheme = () => {
    const contextValue = use(ThemeContext);
    if (contextValue === null) {
        throw new Error('useCurrentTheme must be used within a ThemeProvider');
    }

    return contextValue;
};
