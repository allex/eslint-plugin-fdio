var isProd = process.env.NODE_ENV !== 'development'

module.exports = {
  extends: [
    './eslintrc.js'
  ].map(require.resolve),
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser')
  },
  rules: {
    'strict': 2,
    'no-console': [isProd ? 2 : 0, { 'allow': ['error', 'debug'] }],
    'no-debugger': isProd ? 2 : 0 // allow debugger during development
  }
}
