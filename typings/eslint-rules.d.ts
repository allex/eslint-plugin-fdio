declare module 'eslint/lib/rules/semi' {
  import type { TSESLint, TSESTree } from '@typescript-eslint/utils';

  const rule: TSESLint.RuleModule<
    'extraSemi' | 'missingSemi',
    [
      'always' | 'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
        omitLastInOneLineBlock?: boolean;
      }?,
    ],
    {
      VariableDeclaration(node: TSESTree.VariableDeclaration): void;
      ExpressionStatement(node: TSESTree.ExpressionStatement): void;
      ReturnStatement(node: TSESTree.ReturnStatement): void;
      ThrowStatement(node: TSESTree.ThrowStatement): void;
      DoWhileStatement(node: TSESTree.DoWhileStatement): void;
      DebuggerStatement(node: TSESTree.DebuggerStatement): void;
      BreakStatement(node: TSESTree.BreakStatement): void;
      ContinueStatement(node: TSESTree.ContinueStatement): void;
      ImportDeclaration(node: TSESTree.ImportDeclaration): void;
      ExportAllDeclaration(node: TSESTree.ExportAllDeclaration): void;
      ExportNamedDeclaration(node: TSESTree.ExportNamedDeclaration): void;
      ExportDefaultDeclaration(node: TSESTree.ExportDefaultDeclaration): void;
    }
  >;
  export = rule;
}

declare module '@typescript-eslint/eslint-plugin/dist/rules/semi' {
  import type { TSESLint, TSESTree } from '@typescript-eslint/utils';

  const rule: TSESLint.RuleModule<
    'extraSemi' | 'missingSemi',
    [
      'always' | 'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
        omitLastInOneLineBlock?: boolean;
      }?,
    ],
    {
      // eslint/semi
      VariableDeclaration(node: TSESTree.VariableDeclaration): void;
      ExpressionStatement(node: TSESTree.ExpressionStatement): void;
      ReturnStatement(node: TSESTree.ReturnStatement): void;
      ThrowStatement(node: TSESTree.ThrowStatement): void;
      DoWhileStatement(node: TSESTree.DoWhileStatement): void;
      DebuggerStatement(node: TSESTree.DebuggerStatement): void;
      BreakStatement(node: TSESTree.BreakStatement): void;
      ContinueStatement(node: TSESTree.ContinueStatement): void;
      ImportDeclaration(node: TSESTree.ImportDeclaration): void;
      ExportAllDeclaration(node: TSESTree.ExportAllDeclaration): void;
      ExportNamedDeclaration(node: TSESTree.ExportNamedDeclaration): void;
      ExportDefaultDeclaration(node: TSESTree.ExportDefaultDeclaration): void;
      PropertyDefinition(node: TSESTree.PropertyDefinition): void;

      // @typescript-eslint/semi
      TSAbstractPropertyDefinition(node: TSESTree.TSAbstractPropertyDefinition): void,
      TSDeclareFunction(node: TSESTree.TSDeclareFunction): void,
      TSExportAssignment(node: TSESTree.TSExportAssignment): void,
      TSImportEqualsDeclaration(node: TSESTree.TSImportEqualsDeclaration): void,
      TSTypeAliasDeclaration(node: TSESTree.TSTypeAliasDeclaration): void,
      TSEmptyBodyFunctionExpression(node: TSESTree.TSEmptyBodyFunctionExpression): void,
    }
  >;
  export = rule;
}
