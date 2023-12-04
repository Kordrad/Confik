import { DependencyTypeEnum } from '../../../../type/enums/dependency-type.enum.js';
import { BasePackage } from '../../base.package.js';

export class EslintPluginUnusedImportsPackage extends BasePackage {
  readonly title = 'eslint-plugin-unused-imports 🚮';
  readonly package = 'eslint-plugin-unused-imports';
  readonly dependencyType = DependencyTypeEnum.devDependency;
  readonly description = 'Find and remove unused es6 module imports.';
}
