const allExtensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.vue'];

export = {
  plugins: [
    'import',
  ],
  settings: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  rules: {
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/no-named-default': 1,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'always',
      },
    ],
    'import/order': [2, {
      'newlines-between': 'always',
      pathGroups: [{
        pattern: '@/**',
        group: 'external',
        position: 'after',
      }],
    }],
  },
};
