// https://prettier.io/docs/en/options
// https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig

import { type RequiredOptions } from 'prettier';

const clashingEditorConfigDefaults: Pick<RequiredOptions, 'endOfLine' | 'tabWidth' | 'printWidth' | 'useTabs'> = {
    endOfLine: 'lf',
    tabWidth: 4,
    useTabs: false,
    printWidth: 80,
};

const prettierConfig: Partial<RequiredOptions> = {
    ...clashingEditorConfigDefaults,

    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    quoteProps: 'as-needed',
    singleAttributePerLine: true,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',

    // overrides: [
    //     {
    //         files: ['*.css', '*.scss', '*.json', '*.yaml', '*.yml', '*.html', '*.md'],
    //         options: {
    //             tabWidth: 2
    //         }
    //     }
    // ]

    plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;
