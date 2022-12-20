const isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: true,
      destructuring: true,
      classes: true,
    },
    requireConfigFile: false
  },
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'import'
  ],
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
    'arrow-parens': [2, 'as-needed'],

    'sort-imports': 0,
    'strict': [2, 'never'],

    'class-methods-use-this': 0,
    'comma-style': [2, 'last' ],
    'comma-dangle': [2, {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],

    'global-require': 0, // this rule should for nodejs only

    'max-len': 0,
    'max-classes-per-file': 0,

    'no-empty': [1, { 'allowEmptyCatch': true }],
    'no-mixed-operators': [2, {
      'groups': [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],
    'no-cond-assign': 0,
    'no-floating-decimal': 0,
    'no-sequences': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-bitwise': 0,
    'no-nested-ternary': 0,
    'no-multi-assign': 0,
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0 }],
    'no-underscore-dangle': [2, {
      'allowAfterThis': true,
      'allowAfterSuper': true,
      'enforceInMethodNames': false
    }],
    'no-empty-function': 0,
    'no-useless-constructor': 0,
    'no-unused-expressions': [2, {
      'allowShortCircuit': true,
      'allowTernary': true,
      'allowTaggedTemplates': true
    }],

    'func-names': ['error', 'never'],
    'lines-between-class-members': [2, 'always', { 'exceptAfterSingleLine': true }],
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],

    'semi': [2, 'never', { 'beforeStatementContinuationChars': 'always' }],
    'space-before-function-paren': [1, {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],

    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [2, {
      'ObjectExpression': { 'minProperties': 6, 'multiline': true, 'consistent': true },
      'ObjectPattern': { 'minProperties': 8, 'multiline': true, 'consistent': true },
      'ImportDeclaration': { 'minProperties': 8, 'multiline': true, 'consistent': true },
      'ExportDeclaration': { 'minProperties': 8, 'multiline': true, 'consistent': true }
    }],

    'prefer-const': ['error', {'destructuring': 'all'}],
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,

    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": ["const", "let", "var", "class", "block-like"], "next": "export" },
      { "blankLine": "always", "prev": "export", "next": "*" },
      { "blankLine": "always", "prev": "block-like", "next": "block" }
    ],

    'quotes': [2, 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],

    'no-unused-vars': 2,
    'camelcase': 2,
    'no-use-before-define': 2,

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
    }],
    'no-console': [isProd ? 2 : 0, { 'allow': ['error', 'debug'] }],
    'no-debugger': isProd ? 2 : 0 // allow debugger during development
  }
};
