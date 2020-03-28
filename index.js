const isProd = process.env.NODE_ENV !== 'development'

const isPluginInstalled = p => {
  try {
    return !!require.resolve(p)
  } catch (e) {}
  return false
}

module.exports = {
  extends: [
    './eslintrc.js',
    isPluginInstalled('eslint-plugin-vue') ? './eslintrc.vue.js' : ''
  ].filter(Boolean).map(require.resolve),
  rules: {
    'strict': 2,
    'no-console': [isProd ? 2 : 0, { 'allow': ['error', 'debug'] }],
    'no-debugger': isProd ? 2 : 0 // allow debugger during development
  }
}
