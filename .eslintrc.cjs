module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'plugin:storybook/recommended',
    'eslint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': 'off',
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    semi: ['error', 'never'],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@components', './src/components']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
