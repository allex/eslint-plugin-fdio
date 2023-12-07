const EOL = require('os').EOL
const isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  rules: {
    'arrow-parens': 0,

    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
    'camelcase': 2,
    'class-methods-use-this': 0,
    'comma-style': [2, 'last' ],
    'comma-dangle': [2, {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],

    'func-names': [2, 'never'],
    'global-require': 0, // this rule should for nodejs only

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        // inspaire from airbnb-base
        'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild',
        // es6 with decorators
        `FunctionExpression > .params[decorators.length > 0]`,
        `FunctionExpression > .params > :matches(Decorator, :not(:first-child))`,
        `ClassBody.body > PropertyDefinition[decorators.length > 0] > .key`
      ],
      ignoreComments: false
    }],

    // allow debugger during development
    'no-debugger': isProd ? 2 : 0,
    'no-console': [isProd ? 2 : 0, { 'allow': ['error', 'debug'] }],

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

    'no-unused-vars': 2,
    'no-use-before-define': 2,

    'max-len': 0,
    'max-classes-per-file': 0,

    'linebreak-style': [2, EOL === '\r\n' ? 'windows' : 'unix'],
    'lines-between-class-members': [2, 'always', { 'exceptAfterSingleLine': true }],

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

    'prefer-const': [2, {'destructuring': 'all'}],
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,

    'padding-line-between-statements': [
      2,
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var', 'class', 'block-like'], 'next': 'export' },
      { 'blankLine': 'always', 'prev': 'export', 'next': '*' },
      { 'blankLine': 'always', 'prev': 'block-like', 'next': 'block' },
      { 'blankLine': 'any', 'prev': 'export', 'next': 'export' }
    ],

    'quotes': [2, 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],

    'sort-imports': 0,
    'strict': [2, 'never']
  }
};
