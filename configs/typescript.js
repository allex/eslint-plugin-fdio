const path = require('path')

const allExtensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.vue']

module.exports = {
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    parser: '@typescript-eslint/parser',
    project: path.resolve(process.cwd(), './tsconfig.json')
  },
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  extends: [
    'eslint:recommended',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    require.resolve('./base')
  ],
  settings: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      'node': {
        'extensions': allExtensions,
      }
    }
  },
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'mocha': true,
    'jest': true
  },
  globals: {
    'document': false,
    'navigator': false,
    'window': false
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, {
      'vars': 'local',
      'args': 'none',
      'ignoreRestSiblings': true,
      'caughtErrors': 'none',
      'varsIgnorePattern': '^_'
    }],

    'camelcase': [2, { "properties": "always", "ignoreDestructuring": true, "ignoreImports": true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [2, 'nofunc'],

    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/member-delimiter-style': [2, {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true
      }
    }],
    '@typescript-eslint/interface-name-prefix': 0,

    'import/no-unresolved': 0,
    'import/no-named-default': 1,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'vue': 'always'
      }
    ],
    'import/order': [2, {
      'newlines-between': 'always',
      'pathGroups': [{
        'pattern': '@/**',
        'group': 'external',
        'position': 'after'
      }]
    }]
  }
}
