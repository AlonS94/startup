import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

module.exports = {
  parser: "@typescript-eslglobalIgnores(['dist']),int/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      typescript: {}, // подхватывает tsconfig paths
    },
  },

  env: { browser: true, es2022: true, node: true },

  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  files: ['**/*.{ts,tsx}'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    // --- Prettier ---
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // одинарные кавычки
        trailingComma: 'all',
      },
    ],

    // --- React ---
    'react/react-in-jsx-scope': 'off', // НЕ нужен в React 18+

    // --- TS ---
    '@typescript-eslint/no-unused-vars': ['warn'],

    // --- Импорт-сортировка ---
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      },
    ],
  },
};
