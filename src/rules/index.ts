import { resolveESLintPlugin } from '../util/resolveESLintPlugin';
import { RuleMap } from '../util/interface';

function getDefaultExportFromCjs <T>(x: T | { __esModule: boolean; default: T }): T {
  // eslint-disable-next-line no-underscore-dangle
  return x && (x as any).__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? (x as any).default : x;
}

const rules: Record<string, any> = {};

// optional registrer semi rule
if (resolveESLintPlugin('@typescript-eslint')) {
  rules.semi = getDefaultExportFromCjs<RuleMap['semi']>(require('./semi'));
  rules['member-delimiter-style'] = getDefaultExportFromCjs(require('./member-delimiter-style'));
}

export default rules;
