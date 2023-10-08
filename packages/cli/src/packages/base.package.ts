import { DependencyTypeEnum } from '../type/enums/dependency-type.enum.js';
import { PackagesEnumKeys } from '../type/enums/packages.enum.js';
import { PackageInterface } from '../type/interfaces/package.interface.js';

/**
 * This is base abstract class to create new packages that you can install in your project
 *
 * @summary BaseClass to extends packages
 * @example
 * class NewPackage extends BasePackage { ... }
 * */
export abstract class BasePackage implements PackageInterface {
  abstract readonly title: string;
  abstract readonly package: PackagesEnumKeys;
  abstract readonly dependencyType: DependencyTypeEnum;
}
