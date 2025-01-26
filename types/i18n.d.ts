import type { Locale, Messages } from '@/config/i18n';

declare module 'i18next' {
    interface AppConfig {
        Locale: Locale;
        Messages: Messages;
    }
}
