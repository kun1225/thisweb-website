// Libs
import { hasArrayValue, hasObjectValue } from '@/src/libs/helpers';
// Components
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import { PortableText } from '@portabletext/react';
// Types
import {
  TypeModuleProductPricing,
  TypeModuleProductPricingPlan,
} from '@/src/types/typeModules';

export default function ModuleProductPricing({
  data,
}: {
  data: TypeModuleProductPricing;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, paragraph, plans } = data;

  return (
    <section className="m-product__pricing">
      <ModuleProductHeading heading={heading} />
      <ModuleProductParagraph paragraph={paragraph} />
      <ModuleProductPricingPlans plans={plans} />
    </section>
  );
}

function ModuleProductPricingPlans({
  plans,
}: {
  plans: TypeModuleProductPricingPlan[];
}) {
  if (!hasArrayValue(plans)) return null;

  return (
    <div className="m-product__pricing__plans">
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
function ModuleProductPricingItem({
  item,
}: {
  item: TypeModuleProductPricingPlan;
}) {
  if (!hasObjectValue(item)) return null;

  const {
    heading,
    price: { originalPrice, discountedPrice },
    features,
    cta,
  } = item;

  return (
    <div className="m-product__pricing__item">
      <h3 className="m-product__pricing__item__heading">{heading}</h3>
      <p className="m-product__pricing__item__price">
        <span className="m-product__pricing__item__price__discounted">
          {`NT$${discountedPrice}`}
        </span>
        <span className="m-product__pricing__item__price__original">
          {`NT$${originalPrice}`}
        </span>
      </p>
      <div className="m-product__pricing__item__features prose">
        <PortableText value={features} components={customPortableText} />
      </div>
      {cta ? (
        <a href={cta.url} className="m-product__pricing__item__cta">
          {cta.label}
        </a>
      ) : null}
    </div>
  );
}