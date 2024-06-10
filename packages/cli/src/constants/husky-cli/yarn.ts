import { YarnManager } from '../../services/package-manager/packager-managers/index.js';
import type { HuskyCli } from '../../type/interfaces/husky-cli.interface.js';

const { exec } = new YarnManager().cli;

export default {
  commitlint: `${exec} commitlint --edit "$1"`,
  lint_staged: `${exec} lint-staged`,
} satisfies HuskyCli;
