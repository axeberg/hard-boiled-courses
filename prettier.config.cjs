/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  arrowParens: 'always',
  printWidth: 120,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  useTabs: false,
  tabWidth: 2,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  // Last version that doesn't squash type and value imports
  importOrderTypeScriptVersion: '4.4.0',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@coursebuilder/(.*)$',
    '^coursebuilder/(.*)$',
    '',
    '^~/(.*)$',
    '^[./]',
  ],
  proseWrap: 'always', // printWidth line breaks in md/mdx
}

module.exports = config