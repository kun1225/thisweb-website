import { hasObjectValue } from '@/src/libs/helpers';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductStepsList from './ModuleProductStepsList';
import { TypeModuleProductSteps } from '@/src/types/typeModules';

export default function ModuleProductSteps({
  data,
}: {
  data: TypeModuleProductSteps;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, steps } = data || {};

  return (
    <section className="m-product__steps">
      <ModuleProductHeading heading={heading} />
      <ModuleProductStepsList steps={steps} />
    </section>
  );
}
