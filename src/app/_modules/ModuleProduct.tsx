import ModuleProductHero from './ModuleProductHero';
import ModuleProductProblems from './ModuleProductProblems';
import { TypeModulesProduct } from '@/src/types/typeModules';

export default function ModuleProduct({
  modules,
}: {
  modules: TypeModulesProduct;
}) {
  return modules.map((module) => {
    switch (module._type) {
      case 'moduleProductHero':
        return <ModuleProductHero key={module._key} data={module} />;
      case 'moduleProductProblems':
        return <ModuleProductProblems key={module._key} data={module} />;
      default:
        return null;
    }
  });
}
