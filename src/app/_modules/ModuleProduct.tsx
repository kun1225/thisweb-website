import ModuleProductHero from './ModuleProductHero';
import ModuleProductProblems from './ModuleProductProblems';
import ModuleProductSolutions from './ModuleProductSolutions';
import ModuleProductSteps from './ModuleProductSteps';
import ModuleProductsFeatures from './ModuleProductFeatures';
import ModuleProductAbout from './ModuleProductAbout';
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
      case 'moduleProductSolutions':
        return <ModuleProductSolutions key={module._key} data={module} />;
      case 'moduleProductSteps':
        return <ModuleProductSteps key={module._key} data={module} />;
      case 'moduleProductFeatures':
        return <ModuleProductsFeatures key={module._key} data={module} />;
      case 'moduleProductAbout':
        return <ModuleProductAbout key={module._key} data={module} />;
      default:
        return null;
    }
  });
}
