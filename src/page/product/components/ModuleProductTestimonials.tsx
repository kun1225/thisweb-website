import type { TypeModuleProductTestimonials } from '@/src/types/typeModules';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import ModuleProductSubheading from './ModuleProductSubheading';
import ModuleProductTestimonialList from './ModuleProductTestimonialList';

export default function ModuleProductTestimonials({
  data,
}: {
  data: TypeModuleProductTestimonials;
}) {
  const { heading, headingId, subHeading, paragraph, testimonials } = data;

  return (
    <section className="c bg-neutral-100 py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductSubheading subheading={subHeading} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductTestimonialList data={testimonials} />
    </section>
  );
}
