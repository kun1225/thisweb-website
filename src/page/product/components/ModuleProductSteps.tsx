import { TypeModuleProductSteps } from '@/src/types/typeModules';
import { hasObjectValue } from '@/src/shared/lib/utils';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductStepsList from './ModuleProductStepsList';

export default function ModuleProductSteps({ data }: { data: TypeModuleProductSteps }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, steps } = data || {};

  return (
    <section className="c py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductStepsList steps={steps} />
    </section>
  );
}
