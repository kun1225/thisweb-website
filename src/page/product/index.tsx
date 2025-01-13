import dynamic from 'next/dynamic';

import ModuleProductHero from './components/ModuleProductHero';
import ModuleProductProblems from './components/ModuleProductProblems';
import ModuleProductSolutions from './components/ModuleProductSolutions';
import ModuleProductSteps from './components/ModuleProductSteps';
import ModuleProductsFeatures from './components/ModuleProductFeatures';
import ModuleProductAbout from './components/ModuleProductAbout';
import ModuleProductPricing from './components/ModuleProductPricing';
import ModuleProductTestimonials from './components/ModuleProductTestimonials';
import ModuleProductFAQs from './components/ModuleProductFAQs';

import { TypeModulesProduct } from '@/src/types/typeModules';
import type { TypePageProductAnnouncement } from '@/src/types/typePageProduct';

const PageProductAnnouncement = dynamic(() => import('./components/PageProductAnnouncement'), {
  ssr: false,
});

export default function PageProduct({
  modules,
  announcement,
}: {
  modules: TypeModulesProduct;
  announcement: TypePageProductAnnouncement;
}) {
  return (
    <>
      <PageProductAnnouncement data={announcement} />
      {modules.map((module) => {
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
          case 'moduleProductPricing':
            return <ModuleProductPricing key={module._key} data={module} />;
          case 'moduleProductTestimonials':
            return <ModuleProductTestimonials key={module._key} data={module} />;
          case 'moduleProductFAQs':
            return <ModuleProductFAQs key={module._key} data={module} />;
          default:
            return null;
        }
      })}
    </>
  );
}
