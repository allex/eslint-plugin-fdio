import type {
  InferMessageIdsTypeFromRule,
  InferOptionsTypeFromRule,
} from '../util';
import { createRule } from '../util';
import { getESLintRule } from '../util/getESLintRule';

const baseRule = getESLintRule('@typescript-eslint/semi');

export type Options = InferOptionsTypeFromRule<typeof baseRule>;
export type MessageIds = InferMessageIdsTypeFromRule<typeof baseRule>;

/**
 * Extends from @typescript-eslint/semi (based on eslint/semi)
 * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/semi.ts
 */
export default createRule<Options, MessageIds>({
  name: 'semi',
  meta: {
    type: 'layout',
    docs: {
      description: 'Require or disallow semicolons instead of ASI',
      // too opinionated to be recommended
      extendsBaseRule: true,
    },
    fixable: 'code',
    hasSuggestions: baseRule.meta.hasSuggestions,
    schema: baseRule.meta.schema,
    messages: baseRule.meta.messages,
  },
  defaultOptions: [
    'always',
    {
      omitLastInOneLineBlock: false,
      beforeStatementContinuationChars: 'any',
    },
  ],
  create(context) {
    const rules = baseRule.create(context);
    return {
      ...rules,
      PropertyDefinition(): void { /* override to noop, to be handled by the member-delimiter-style rule, ref: eslint/lib/rules/semi.js */ },
    };
  },
});
