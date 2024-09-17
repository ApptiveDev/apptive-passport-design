module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'airbnb', 'airbnb/hooks', 'airbnb-typescript'
  ],
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
    'indent': [
      'error',
      4,
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
  },
};
