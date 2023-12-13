import { ESLintUtils } from '@typescript-eslint/utils';

export * from './createRule';

const {
  applyDefault,
  deepMerge,
  isObjectNotArray,
  getParserServices,
  nullThrows,
  NullThrowsReasons,
} = ESLintUtils;

type InferMessageIdsTypeFromRule<T> =
  ESLintUtils.InferMessageIdsTypeFromRule<T>;

type InferOptionsTypeFromRule<T> = ESLintUtils.InferOptionsTypeFromRule<T>;

export {
  applyDefault,
  deepMerge,
  isObjectNotArray,
  getParserServices,
  nullThrows,
  InferMessageIdsTypeFromRule,
  InferOptionsTypeFromRule,
  NullThrowsReasons,
};
