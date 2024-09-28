module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'airbnb', 'airbnb/hooks', 'airbnb-typescript'
  ],
  'ignorePatterns': ['node_modules/', 'dist/', '*.cjs', '*.mjs', '*.config.ts'],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': './tsconfig.app.json',
  },
  'plugins': [
    '@typescript-eslint',
    'react',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'export', 'class', 'function'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'export', 'class', 'function'], next: '*' },

      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/mock/*', '**/*.test.*'] },
    ],
    '@typescript-eslint/no-use-before-define': 'off'
  },
};
