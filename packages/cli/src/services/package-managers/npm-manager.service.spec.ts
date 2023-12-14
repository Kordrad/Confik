import { DependencyTypeEnum } from '../../type/enums/dependency-type.enum.js';
import { PackagesEnum } from '../../type/enums/packages.enum.js';
import * as childProcess from '../node/child-process.service.js';
import { NpmManagerService } from './npm-manager.service.js';

jest.mock('../node/child-process.service.js', () => ({
  childProcess: {
    execAsync: jest.fn(),
  },
}));

describe('NpmManagerService', () => {
  let service: NpmManagerService;

  beforeEach(() => {
    service = new NpmManagerService();
    jest.clearAllMocks();
  });

  describe('install', () => {
    it('should call execAsync for each installation type', async () => {
      const spy = jest.spyOn(childProcess.childProcess, 'execAsync');

      await service.install({
        dependency: ['SomePackage'] as unknown as PackagesEnum[],
        devDependency: ['AnotherPackage'] as unknown as PackagesEnum[],
        global: ['ThirdPackage'] as unknown as PackagesEnum[],
      } as never);

      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenCalledWith(
        `npm i ${
          service.installationType[DependencyTypeEnum.dependency]
        } SomePackage`
      );
      expect(spy).toHaveBeenCalledWith(
        `npm i ${
          service.installationType[DependencyTypeEnum.devDependency]
        } AnotherPackage`
      );
      expect(spy).toHaveBeenCalledWith(
        `npm i ${
          service.installationType[DependencyTypeEnum.global]
        } ThirdPackage`
      );
    });

    it('should not call execAsync if no packages are provided', async () => {
      const spy = jest.spyOn(childProcess.childProcess, 'execAsync');

      await service.install({
        dependency: [],
        devDependency: [],
        global: [],
      });

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
