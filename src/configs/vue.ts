export = {
  plugins: [
    'vue',
  ],
  parserOptions: {
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': 0,

    // allow single-word as component name https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': 0,

    'vue/html-self-closing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/no-parsing-error': [2, {
      'invalid-first-character-of-tag-name': false,
    }],
  },
};
