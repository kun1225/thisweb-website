import { hasObjectValue } from '@/src/libs/utils';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductStepsList from './ModuleProductStepsList';
import { TypeModuleProductSteps } from '@/src/types/typeModules';

export default function ModuleProductSteps({
  data,
}: {
  data: TypeModuleProductSteps;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, steps } = data || {};

  return (
    <section className="m-product__steps">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductStepsList steps={steps} />
    </section>
  );
}
