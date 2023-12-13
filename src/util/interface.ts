export interface RuleMap {
  /* eslint-disable @typescript-eslint/consistent-type-imports -- more concise to use inline imports */
  semi: typeof import('eslint/lib/rules/semi');
  '@typescript-eslint/semi': typeof import('@typescript-eslint/eslint-plugin/dist/rules/semi')
  /* eslint-enable @typescript-eslint/consistent-type-imports */
}

export type RuleId = keyof RuleMap;
