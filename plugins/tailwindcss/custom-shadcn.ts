import type { Config } from 'tailwindcss';
import { withOptions } from 'tailwindcss/plugin';
import animatePlugin from 'tailwindcss-plugin-animate';
import type { SetOptional, SetRequired } from 'type-fest';

type Preset = SetOptional<Config, 'content'>;

type Radius = '0' | '0.3' | '0.5' | '0.75' | '1';

type ShadCNPresetOptions = {
    radius?: Radius | string;
};

type ShadCNDefaultOptions = SetRequired<ShadCNPresetOptions, 'radius'>;

const defaultOptions: ShadCNDefaultOptions = {
    radius: '1',
};

function customShadCNPreset(baseOptions?: ShadCNPresetOptions): Preset {
    const options = {
        ...defaultOptions,
        ...baseOptions,
    };

    return {
        darkMode: ['class', '[data-theme="dark"]'],
        plugins: [animatePlugin, shadCNPlugin(options)],
    };
}

const shadCNPlugin = withOptions(
    ({ radius }: ShadCNDefaultOptions) => {
        return function ({ addBase }) {
            addBase({
                ':root': {
                    '--radius': `${radius}rem`,
                },
            });
            addBase({
                '*': {
                    '@apply border-border': {},
                },
                body: {
                    '@apply antialiased bg-background text-foreground': {},
                },
            });
        };
    },
    ({}: ShadCNDefaultOptions) => {
        return {
            theme: {
                extend: {
                    borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)',
                    },
                    colors: {
                        thaz: {
                            primary: {
                                50: 'hsl(var(--primary-50) / <alpha-value>)',
                                100: 'hsl(var(--primary-100) / <alpha-value>)',
                                200: 'hsl(var(--primary-200) / <alpha-value>)',
                                300: 'hsl(var(--primary-300) / <alpha-value>)',
                                400: 'hsl(var(--primary-400) / <alpha-value>)',
                                500: 'hsl(var(--primary-500) / <alpha-value>)',
                                600: 'hsl(var(--primary-600) / <alpha-value>)',
                                700: 'hsl(var(--primary-700) / <alpha-value>)',
                                800: 'hsl(var(--primary-800) / <alpha-value>)',
                                900: 'hsl(var(--primary-900) / <alpha-value>)',
                                950: 'hsl(var(--primary-950) / <alpha-value>)',
                            },
                            secondary: {
                                50: 'hsl(var(--secondary-50) / <alpha-value>)',
                                100: 'hsl(var(--secondary-100) / <alpha-value>)',
                                200: 'hsl(var(--secondary-200) / <alpha-value>)',
                                300: 'hsl(var(--secondary-300) / <alpha-value>)',
                                400: 'hsl(var(--secondary-400) / <alpha-value>)',
                                500: 'hsl(var(--secondary-500) / <alpha-value>)',
                                600: 'hsl(var(--secondary-600) / <alpha-value>)',
                                700: 'hsl(var(--secondary-700) / <alpha-value>)',
                                800: 'hsl(var(--secondary-800) / <alpha-value>)',
                                900: 'hsl(var(--secondary-900) / <alpha-value>)',
                                950: 'hsl(var(--secondary-950) / <alpha-value>)',
                            },
                            neutral: {
                                50: 'hsl(var(--neutral-50) / <alpha-value>)',
                                100: 'hsl(var(--neutral-100) / <alpha-value>)',
                                200: 'hsl(var(--neutral-200) / <alpha-value>)',
                                300: 'hsl(var(--neutral-300) / <alpha-value>)',
                                400: 'hsl(var(--neutral-400) / <alpha-value>)',
                                500: 'hsl(var(--neutral-500) / <alpha-value>)',
                                600: 'hsl(var(--neutral-600) / <alpha-value>)',
                                700: 'hsl(var(--neutral-700) / <alpha-value>)',
                                800: 'hsl(var(--neutral-800) / <alpha-value>)',
                                900: 'hsl(var(--neutral-900) / <alpha-value>)',
                                950: 'hsl(var(--neutral-950) / <alpha-value>)',
                            },
                            warning: {
                                50: 'hsl(var(--warning-50) / <alpha-value>)',
                                100: 'hsl(var(--warning-100) / <alpha-value>)',
                                200: 'hsl(var(--warning-200) / <alpha-value>)',
                                300: 'hsl(var(--warning-300) / <alpha-value>)',
                                400: 'hsl(var(--warning-400) / <alpha-value>)',
                                500: 'hsl(var(--warning-500) / <alpha-value>)',
                                600: 'hsl(var(--warning-600) / <alpha-value>)',
                                700: 'hsl(var(--warning-700) / <alpha-value>)',
                                800: 'hsl(var(--warning-800) / <alpha-value>)',
                                900: 'hsl(var(--warning-900) / <alpha-value>)',
                                950: 'hsl(var(--warning-950) / <alpha-value>)',
                            },
                            error: {
                                50: 'hsl(var(--error-50) / <alpha-value>)',
                                100: 'hsl(var(--error-100) / <alpha-value>)',
                                200: 'hsl(var(--error-200) / <alpha-value>)',
                                300: 'hsl(var(--error-300) / <alpha-value>)',
                                400: 'hsl(var(--error-400) / <alpha-value>)',
                                500: 'hsl(var(--error-500) / <alpha-value>)',
                                600: 'hsl(var(--error-600) / <alpha-value>)',
                                700: 'hsl(var(--error-700) / <alpha-value>)',
                                800: 'hsl(var(--error-800) / <alpha-value>)',
                                900: 'hsl(var(--error-900) / <alpha-value>)',
                                950: 'hsl(var(--error-950) / <alpha-value>)',
                            },
                        },

                        background: 'hsl(var(--background) / <alpha-value>)',
                        foreground: 'hsl(var(--foreground) / <alpha-value>)',
                        card: {
                            DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                            foreground:
                                'hsl(var(--card-foreground) / <alpha-value>)',
                        },
                        popover: {
                            DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
                            foreground:
                                'hsl(var(--popover-foreground) / <alpha-value>)',
                        },
                        primary: {
                            DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                            foreground:
                                'hsl(var(--primary-foreground) / <alpha-value>)',
                        },
                        secondary: {
                            DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                            foreground:
                                'hsl(var(--secondary-foreground) / <alpha-value>)',
                        },
                        muted: {
                            DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                            foreground:
                                'hsl(var(--muted-foreground) / <alpha-value>)',
                        },
                        accent: {
                            DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                            foreground:
                                'hsl(var(--accent-foreground) / <alpha-value>)',
                        },
                        destructive: {
                            DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                            foreground:
                                'hsl(var(--destructive-foreground) / <alpha-value>)',
                        },
                        border: 'hsl(var(--border) / <alpha-value>)',
                        input: 'hsl(var(--input) / <alpha-value>)',
                        ring: 'hsl(var(--ring) / <alpha-value>)',
                        chart: {
                            1: 'hsl(var(--chart-1) / <alpha-value>)',
                            2: 'hsl(var(--chart-2) / <alpha-value>)',
                            3: 'hsl(var(--chart-3) / <alpha-value>)',
                            4: 'hsl(var(--chart-4) / <alpha-value>)',
                            5: 'hsl(var(--chart-5) / <alpha-value>)',
                        },
                        sidebar: {
                            DEFAULT:
                                'hsl(var(--sidebar-background) / <alpha-value>)',
                            foreground:
                                'hsl(var(--sidebar-foreground) / <alpha-value>)',
                            primary:
                                'hsl(var(--sidebar-primary) / <alpha-value>)',
                            'primary-foreground':
                                'hsl(var(--sidebar-primary-foreground) / <alpha-value>)',
                            accent: 'hsl(var(--sidebar-accent) / <alpha-value>)',
                            'accent-foreground':
                                'hsl(var(--sidebar-accent-foreground) / <alpha-value>)',
                            border: 'hsl(var(--sidebar-border) / <alpha-value>)',
                            ring: 'hsl(var(--sidebar-ring) / <alpha-value>)',
                        },
                    },
                },
            },
        };
    },
);

export default customShadCNPreset;
