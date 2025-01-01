import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductSubheading from './ModuleProductSubheading';
import ModuleProductParagraph from './ModuleProductParagraph';
import { Accordion, AccordionTitle, AccordionContent } from '@/src/shared/ui/Accordion';
import { PortableText } from 'next-sanity';
// Types
import type { TypeModuleProductFAQs } from '@/src/types/typeModules';
import { hasArrayValue } from '@/src/shared/lib/utils';

const customPortableText = {
  marks: {
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
};

export default function ModuleProductFAQs({ data }: { data: TypeModuleProductFAQs }) {
  const { heading, headingId, subheading, paragraph, faqList } = data;

  return (
    <section className="m-product__faqs">
      <ModuleProductSubheading subheading={subheading} />
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      {hasArrayValue(faqList) && (
        <div className="m-product__faqs__list">
          {faqList.map((faq) => (
            <Accordion
              key={faq._key}
              className="m-product__faqs__list__item"
              stretch
              iconPosition="right"
              initExpanded={false}
            >
              <AccordionTitle className="m-product__faqs__list__heading">
                {faq.heading}
              </AccordionTitle>
              <AccordionContent className="m-product__faqs__list__answer">
                <PortableText value={faq.answer} components={customPortableText} />
              </AccordionContent>
            </Accordion>
          ))}
        </div>
      )}
    </section>
  );
}
