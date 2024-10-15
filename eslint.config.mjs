import globals from 'globals';
import js from '@eslint/js';
import cypressPlugin from 'eslint-plugin-cypress';
import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ...js.configs.recommended,
    rules: {},
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        jest: true,
        node: true,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      globals: {
        'cypress/globals': true,
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
  },
];
