# `@fdio/eslint-plugin`

An ESLint plugin which provides common and enhance lint rules for Vue or TypeScript codebases.

[![NPM Version](https://img.shields.io/npm/v/@fdio/eslint-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@fdio/eslint-plugin)
[![NPM Downloads](https://img.shields.io/npm/dm/@fdio/eslint-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@fdio/eslint-plugin)

## Usage

```.eslintrc.js
module.exports = {
  root: true,
  extends: [
    'plugin:@fdio/typescript',
    'plugin:@fdio/vue'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0
  }
}
```