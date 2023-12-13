import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator(
  (name) => `https://fdio-eslint.tdux.org/rules/${name}`,
);
