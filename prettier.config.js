/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    // ...prettierConfig,

    endOfLine: 'lf',
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,

    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    quoteProps: 'as-needed',
    singleAttributePerLine: true,
    singleQuote: true,
    semi: true,
    trailingComma: 'all',

    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
