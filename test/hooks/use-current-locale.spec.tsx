import { describe, expect, test } from 'vitest';
import { act, renderHook, type RenderOptions } from '@testing-library/react';

import { useCurrentLocale } from '@/hooks/use-current-locale';
import { LocaleProvider } from '@/providers/locale-provider';

describe('useCurrentLocale()', () => {
    test('should throw error if not rendered within the provider', () => {
        expect(() => {
            renderHook(() => useCurrentLocale());
        }).toThrow('useCurrentLocale must be used within a LocaleProvider');
    });

    const renderUseCurrentLocaleWithProvider = (options?: Omit<RenderOptions, 'wrapper'>) =>
        renderHook(() => useCurrentLocale(), {
            wrapper: LocaleProvider,
            ...options,
        });

    describe('with no starting local storage value', () => {
        const { result } = renderUseCurrentLocaleWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentLocale).toBe('en');
        });

        test('should have new locale after call to setUserLocale', () => {
            act(() => {
                result.current.setUserLocale('es');
            });
            expect(result.current.currentLocale).toBe('es');
        });

        test('should have default locale after a call to setUserLocaleToDefault', () => {
            act(() => {
                result.current.setUserLocaleToDefault();
            });
            expect(result.current.currentLocale).toBe('en');
        });
    });

    describe('with a valid starting local storage value', () => {
        localStorage.setItem('CURRENT_USER_LOCALE', 'es');

        const { result } = renderUseCurrentLocaleWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentLocale).toBe('es');
        });
    });

    describe('with an invalid starting local storage value', () => {
        localStorage.setItem('CURRENT_USER_LOCALE', 'random_non_existent_locale');

        const { result } = renderUseCurrentLocaleWithProvider();

        test('should have default value when first rendered', () => {
            expect(result.current.currentLocale).toBe('en');
        });
    });
});
