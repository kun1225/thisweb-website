const { resolve } = require('path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: ['next/core-web-vitals'],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'unicorn/filename-case': 'off',
    'import/order': 'off',
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-sort-props': 'off',
    'react/function-component-definition': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
    camelcase: ['warn', { ignoreImports: true }],
    'jsx-a11y/media-has-caption': 'off',
  },
};
