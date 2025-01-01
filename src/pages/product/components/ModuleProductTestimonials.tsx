import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductSubheading from './ModuleProductSubheading';
import ModuleProductParagraph from './ModuleProductParagraph';
import ModuleProductTestimonialList from './ModuleProductTestimonialList';
import type { TypeModuleProductTestimonials } from '@/src/types/typeModules';

export default function ModuleProductTestimonials({
  data,
}: {
  data: TypeModuleProductTestimonials;
}) {
  const { heading, headingId, subHeading, paragraph, testimonials } = data;

  return (
    <section className="m-product__testimonials">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductSubheading subheading={subHeading} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductTestimonialList data={testimonials} />
    </section>
  );
}
