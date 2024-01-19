import { DependencyTypeEnum } from '../../../../type/enums/dependency-type.enum.js';
import type { Package } from '../../../../type/types/packages.type.js';
import { BasePackage } from '../../base.package.js';

export class PrettierPluginOrganizeAttributesPackage extends BasePackage {
  readonly title = 'prettier-plugin-organize-attributes 🧼';
  readonly package: Package = 'prettier-plugin-organize-attributes';
  readonly version = '1';
  readonly dependencyType = DependencyTypeEnum.devDependency;
  readonly description =
    'Organize your HTML attributes automatically with Prettier.';
  readonly pluginName = this.package;
}
