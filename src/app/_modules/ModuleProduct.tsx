import ModuleProductHero from './ModuleProductHero';
import { TypeModulesProduct } from '@/src/libs/sanity/type/TypeModules';

export default function ModuleProduct({
  modules,
}: {
  modules: TypeModulesProduct;
}) {
  return modules.map((module) => {
    switch (module._type) {
      case 'moduleProductHero':
        return <ModuleProductHero key={module._key} data={module} />;
      default:
        return null;
    }
  });
}
