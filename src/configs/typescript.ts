import { resolve } from 'path';

export = {
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: '@typescript-eslint/parser',
    project: resolve(process.cwd(), './tsconfig.json'),
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  extends: [
    // base (eslint-recommended)
    require.resolve('./base'),

    // import for typescript
    'plugin:import/typescript',
    require.resolve('./import'),

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  globals: {
    document: false,
    navigator: false,
    window: false,
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, {
      vars: 'local',
      args: 'none',
      ignoreRestSiblings: true,
      caughtErrors: 'none',
      varsIgnorePattern: '^_',
    }],

    camelcase: [2, { properties: 'always', ignoreDestructuring: true, ignoreImports: true }],

    // do not use the no-undef lint rule on TypeScript projects, ref: <https://typescript-eslint.io/linting/troubleshooting/>
    'no-undef': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [2, 'nofunc'],

    '@typescript-eslint/ban-ts-ignore': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,

    '@typescript-eslint/interface-name-prefix': 0,

    '@typescript-eslint/no-explicit-any': 0,

    // disable eslint/semi and @typescript-eslint/semi, use @fdio/semi instead
    semi: 0,
    '@typescript-eslint/semi': 0,
    '@fdio/semi': [2, 'never', {
      beforeStatementContinuationChars: 'always',
    }],

    // use @fdio/member-delimiter-style instead (with class memeber delimiter style enhances)
    '@typescript-eslint/member-delimiter-style': 0,
    '@fdio/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
        ignoreValueAssign: false,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
        ignoreValueAssign: false,
      },
    }],

    // allow some unknow object property r/w operators
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,

    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-call': 0,

    '@typescript-eslint/unbound-method': 0,

    '@typescript-eslint/ban-types': [2, {
      types: {
        // object typing
        Object: {
          message: [
            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
            '- If you want a type meaning "any object", you probably want `object` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
          ].join('\n'),
          suggest: ['object', 'unknown', 'NonNullable<unknown>'],
        },
        '{}': {
          message: [
            '`{}` actually means "any non-nullish value".',
            '- If you want a type meaning "any object", you probably want `object` instead.',
            '- If you want a type meaning "any value", you probably want `unknown` instead.',
            '- If you want a type meaning "empty object", you probably want `Record<string, never>` instead.',
            '- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.',
          ].join('\n'),
          suggest: [
            'object',
            'unknown',
            'Record<string, never>',
            'NonNullable<unknown>',
          ],
        },
      },
      extendDefaults: false,
    }],
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
