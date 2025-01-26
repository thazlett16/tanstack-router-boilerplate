import type { Locale, Messages } from '@/config/i18n';

declare module 'use-intl' {
    interface AppConfig {
        Locale: Locale;
        Messages: Messages;
    }
}
