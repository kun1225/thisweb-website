import { hasObjectValue } from '@/src/libs/helpers';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import ModuleProductFeaturesBody from './ModuleProductFeaturesBody';
// Types
import { TypeModuleProductFeatures } from '@/src/types/typeModules';

export default function ModuleProductFeatures({
  data,
}: {
  data: TypeModuleProductFeatures;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, paragraph, features } = data;

  return (
    <section className="m-product__features">
      <ModuleProductHeading heading={heading} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductFeaturesBody features={features} />
    </section>
  );
}
