# eslint-config-feio

[![npm version](https://badge.fury.io/js/eslint-config-fdio.svg)](http://badge.fury.io/js/eslint-config-fdio)

This package provides Allex's .eslintrc (with Typescript & Vue) as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-fdio

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-vue`.

If you use yarn, run `npm info "eslint-config-fdio@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-fdio@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-fdio
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (export PKG=eslint-config-fdio; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest")
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-fdio eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-vue@^#.#.#
  ```

2. Add `"extends": "fdio"` to your .eslintrc.


## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
