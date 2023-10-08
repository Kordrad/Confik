import { fileSystem } from '../../services/node/file-system.service.js';
import { DependencyTypeEnum } from '../../type/enums/dependency-type.enum.js';
import { BasePackage } from '../base.package.js';
import { CONFIG, IGNORE } from './prettier.constant.js';

/**
 * @see https://www.npmjs.com/package/prettier
 * */
class PrettierPackage extends BasePackage {
  readonly dependencyType = DependencyTypeEnum.devDependency;
  readonly title = 'prettier';
  readonly package = 'prettier';
  readonly description = 'An opinionated code formatter.';

  configure(): void {
    fileSystem.writeFile('.prettierrc', CONFIG);
    fileSystem.writeFile('.prettierignore', IGNORE);
  }
}

export const prettier = new PrettierPackage();
