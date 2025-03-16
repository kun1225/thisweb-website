import { PortableText } from 'next-sanity';
// Types
import type { TypeModuleProductFAQs } from '@/src/types/typeModules';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { Accordion, AccordionContent, AccordionTitle } from '@/src/shared/ui/Accordion';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import ModuleProductSubheading from './ModuleProductSubheading';

const customPortableText = {
  marks: {
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
};

export default function ModuleProductFAQs({ data }: { data: TypeModuleProductFAQs }) {
  const { heading, headingId, subheading, paragraph, faqList } = data;

  return (
    <section className="c py-32">
      <ModuleProductSubheading subheading={subheading} />
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      {hasArrayValue(faqList) && (
        <div className="mx-auto flex max-w-2xl flex-col py-16">
          {faqList.map((faq) => (
            <Accordion
              key={faq._key}
              className="border-b-2 border-neutral-200 transition-all duration-[0.4s] data-[active=true]:pb-6"
              stretch
              iconPosition="right"
              initExpanded={false}
            >
              <AccordionTitle className="text-blue py-4 text-lg md:text-xl">
                {faq.heading}
              </AccordionTitle>
              <AccordionContent className="space-y-2 transition-all duration-500">
                <PortableText value={faq.answer} components={customPortableText} />
              </AccordionContent>
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
}
