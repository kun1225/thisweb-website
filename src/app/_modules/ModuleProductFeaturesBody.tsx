'use client';
import { useState } from 'react';
import useWindowWidth from '../_hooks/useWindowWidth';
import { hasArrayValue } from '@/src/libs/utils';
import { cn } from '@/src/libs/utils';
// Components
import Media from '../_components/Media';
import Icon from '../_components/Icon';
import Carousel from '../_components/Carousel';
// Types
import { TypeModuleProductFeature } from '@/src/types/typeModules';

export default function ModuleProductFeaturesBody({
  features,
}: {
  features: TypeModuleProductFeature[];
}) {
  const { isDesktop } = useWindowWidth();

  if (!hasArrayValue(features)) return null;

  return (
    <div className="m-product__features__body">
      {isDesktop ? (
        <ModuleProductFeaturesBodyDesktop features={features} />
      ) : (
        <ModuleProductFeaturesListMobile features={features} />
      )}
    </div>
  );
}

function ModuleProductFeaturesBodyDesktop({
  features,
}: {
  features: TypeModuleProductFeature[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="m-product__features__contents">
        {features?.map((feature, index) => (
          <div
            className={cn('m-product__features__item', {
              'is-active': currentIndex === index,
            })}
            key={feature._key}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {feature?.icon ? (
              <Icon
                className="m-product__features__item__icon"
                icon={feature.icon}
              />
            ) : null}
            {feature?.heading ? (
              <h3 className="m-product__features__item__heading">
                {feature.heading}
              </h3>
            ) : null}
            {feature?.paragraph ? (
              <p className="m-product__features__item__paragraph">
                {feature.paragraph}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="m-product__features__medias">
        {features?.map((feature, index) => (
          <div
            className={cn('m-product__features__media', {
              'is-active': currentIndex === index,
            })}
            key={feature._key}
          >
            <Media data={feature.media} />
          </div>
        ))}
      </div>
    </>
  );
}

function ModuleProductFeaturesListMobile({
  features,
}: {
  features: TypeModuleProductFeature[];
}) {
  return (
    <Carousel autoplayInterval={6000} isShowDots>
      {features.map((feature, index) => (
        <div className="m-product__features__item" key={feature._key}>
          {feature.icon ? (
            <Icon
              className="m-product__features__item__icon"
              icon={feature.icon}
            />
          ) : null}
          {feature.heading ? (
            <h3 className="m-product__features__item__heading">
              <span>{index + 1}.&nbsp;</span>
              <span>{feature.heading}</span>
            </h3>
          ) : null}
          {feature.paragraph ? (
            <p className="m-product__features__item__paragraph">
              {feature.paragraph}
            </p>
          ) : null}
          <div className={cn('m-product__features__item__media')}>
            <Media data={feature.media} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
