import { describe, expect, test, vi } from 'vitest';
import { act, renderHook, type RenderOptions } from '@testing-library/react';

import { useCurrentTheme } from '@/hooks/use-current-theme';
import { ThemeProvider } from '@/providers/theme-provider';

describe('useCurrentTheme()', () => {
    test('should throw error if not rendered within the provider', () => {
        expect(() => {
            renderHook(() => useCurrentTheme());
        }).toThrow('useCurrentTheme must be used within a ThemeProvider');
    });

    vi.stubGlobal('matchMedia', (query: string) => ({
        matches: query === `(prefers-color-scheme: dark)`,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    }));

    const renderUseCurrentThemeWithProvider = (options?: Omit<RenderOptions, 'wrapper'>) =>
        renderHook(() => useCurrentTheme(), {
            wrapper: ThemeProvider,
            ...options,
        });

    describe('with no starting local storage value', () => {
        const { result } = renderUseCurrentThemeWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentTheme).toBe('system');
        });

        test('should have new theme after call to setUserTheme', () => {
            act(() => {
                result.current.setUserTheme('dark');
            });
            expect(result.current.currentTheme).toBe('dark');
        });

        test('should have default theme after a call to setUserThemeToDefault', () => {
            act(() => {
                result.current.setUserThemeToDefault();
            });
            expect(result.current.currentTheme).toBe('system');
        });
    });

    describe('with a valid starting local storage value', () => {
        localStorage.setItem('CURRENT_USER_THEME', 'light');

        const { result } = renderUseCurrentThemeWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentTheme).toBe('light');
        });
    });

    describe('with an invalid starting local storage value', () => {
        localStorage.setItem('CURRENT_USER_THEME', 'random_non_existent_theme');

        const { result } = renderUseCurrentThemeWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentTheme).toBe('system');
        });
    });
});
