// Types
import { TypeModuleProductFeatures } from '@/src/types/typeModules';
import { hasObjectValue } from '@/src/shared/lib/utils';
import ModuleProductFeaturesBody from './ModuleProductFeaturesBody';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';

export default function ModuleProductFeatures({ data }: { data: TypeModuleProductFeatures }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, features } = data;

  return (
    <section className="c py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductFeaturesBody features={features} />
    </section>
  );
}
