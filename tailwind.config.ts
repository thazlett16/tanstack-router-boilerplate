import type { Config } from 'tailwindcss';
import aspectRatioPlugin from 'tailwindcss-plugin-aspect-ratio';
import containerQueriesPlugin from 'tailwindcss-plugin-container-queries';
import formsPlugin from 'tailwindcss-plugin-forms';
import typographyPlugin from 'tailwindcss-plugin-typography';

export default {
    presets: [],
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {},
    },
    plugins: [
        aspectRatioPlugin,
        containerQueriesPlugin,
        formsPlugin,
        typographyPlugin,
    ],
} satisfies Config;
