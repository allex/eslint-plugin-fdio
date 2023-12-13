import { ESLintUtils } from '@typescript-eslint/utils';
import { version } from 'eslint/package.json';

import { RuleId, RuleMap } from './interface';
import { resolveESLintPlugin } from './resolveESLintPlugin';

const isESLintV8 = parseInt(version.split('.')[0], 10) >= 8;

export const getESLintCoreRule: <R extends RuleId>(ruleId: R) => RuleMap[R] = isESLintV8
  ? <R extends RuleId>(ruleId: R): RuleMap[R] => ESLintUtils.nullThrows(require('eslint/use-at-your-own-risk').builtinRules.get(ruleId) as RuleMap[R], `ESLint's core rule '${ruleId}' not found.`)
  : <R extends RuleId>(ruleId: R): RuleMap[R] => require(`eslint/lib/rules/${ruleId}`) as RuleMap[R];

export function maybeGetESLintCoreRule<R extends RuleId>(
  ruleId: R,
): RuleMap[R] | null {
  try {
    return getESLintCoreRule<R>(ruleId);
  } catch {
    return null;
  }
}

export const getESLintRule = <R extends RuleId>(ruleId: R): RuleMap[R] => {
  let isVendorModule = false;
  let packageName = '';
  if (ruleId.includes('/')) {
    isVendorModule = true;
    packageName = ruleId.slice(0, ruleId.indexOf('/'));
  } else {
    packageName = 'eslint';
  }
  if (isVendorModule) {
    const id = ruleId.slice(ruleId.indexOf('/') + 1);
    const pkg = resolveESLintPlugin(packageName);
    return ESLintUtils.nullThrows(
      require(`${pkg}/use-at-your-own-risk/rules`).default[id] as RuleMap[R],
      `ESLint's rule '${ruleId}' not found.`,
    );
  }
  return getESLintCoreRule(ruleId);
};
