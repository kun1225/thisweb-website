// Libs
import Link from 'next/link';
// Types
import { TypeModuleProductPricing, TypeModuleProductPricingPlan } from '@/src/types/typeModules';
import { PortableText } from '@portabletext/react';
import { hasArrayValue, hasObjectValue } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';

export default function ModuleProductPricing({ data }: { data: TypeModuleProductPricing }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, plans } = data;

  return (
    <section className="c py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductPricingPlans plans={plans} />
    </section>
  );
}

function ModuleProductPricingPlans({ plans }: { plans: TypeModuleProductPricingPlan[] }) {
  if (!hasArrayValue(plans)) return null;

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
      {plans.map((item) => (
        <ModuleProductPricingItem key={item._key} item={item} />
      ))}
    </div>
  );
}

const customPortableText = {
  marks: {
    highlight: (props: any) => <mark>{props.children}</mark>,
  },
};
function ModuleProductPricingItem({ item }: { item: TypeModuleProductPricingPlan }) {
  if (!hasObjectValue(item)) return null;

  const {
    heading,
    price: { originalPrice, discountedPrice },
    features,
    cta,
  } = item;

  return (
    <div className="hover:border-blue-2 bg-white-pure flex w-full max-w-sm grow flex-col rounded-md border-2 border-transparent px-4 py-8 drop-shadow-[0_0_14px_rgba(0,0,0,.1)] transition-all duration-500 hover:-translate-y-4 md:py-12 lg:py-16">
      <h3 className="text-black-light mb-4 self-center text-lg">{heading}</h3>
      <p className="flex items-baseline gap-2 self-center">
        <span className="text-blue text-4xl font-bold md:text-5xl">{`NT$${discountedPrice}`}</span>
        <span className="text-sm line-through md:text-black">{`NT$${originalPrice}`}</span>
      </p>
      <div className="prose my-8 border-y border-neutral-200 py-8">
        <PortableText value={features} components={customPortableText} />
      </div>
      {cta ? (
        <Button
          asChild={!cta.isDisabled}
          size="hero"
          className="hover:scale-100 md:w-full"
          disabled={cta.isDisabled}
        >
          {cta.isDisabled ? (
            <>{cta.label}</>
          ) : (
            <Link
              href={cta.url}
              className="m-product__pricing__item__cta"
              target={cta.isOpenNewTab ? '_blank' : '_self'}
            >
              {cta.label}
            </Link>
          )}
        </Button>
      ) : null}
    </div>
  );
}
