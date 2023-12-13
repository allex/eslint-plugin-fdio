import path from 'path';
import fs from 'fs';

import { ModuleImporter } from './moduleImporter';

export function resolveESLintPlugin(pluginName: string): string | undefined {
  // Check if plugin name is already a valid path
  const absolutePath = path.resolve(pluginName);
  if (fs.existsSync(absolutePath)) {
    return absolutePath;
  }

  const importer = new ModuleImporter();

  // Try resolving with different naming conventions
  const names = [
    // Official package name
    `@${pluginName.replace(/^@/, '')}/eslint-plugin`,
    // Legacy package name (pre-scoped)
    `eslint-plugin-${pluginName}`,
  ];

  // Attempt to resolve each option using Node's require.resolve
  // eslint-disable-next-line no-restricted-syntax
  for (const f of names) {
    try {
      if (importer.resolve(`${f}/package.json`)) {
        return f;
      }
    } catch (error) { /* ignore */ }
  }

  return undefined;
}
