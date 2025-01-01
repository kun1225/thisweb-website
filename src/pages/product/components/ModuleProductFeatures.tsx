import { hasObjectValue } from '@/src/shared/lib/utils';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import ModuleProductFeaturesBody from '../app/_modules/ModuleProductFeaturesBody';
// Types
import { TypeModuleProductFeatures } from '@/src/types/typeModules';

export default function ModuleProductFeatures({ data }: { data: TypeModuleProductFeatures }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, features } = data;

  return (
    <section className="m-product__features">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductFeaturesBody features={features} />
    </section>
  );
}
