'use client';

import { useState } from 'react';
import { TypeModuleProductFeature } from '@/src/types/typeModules';
import { cn, hasArrayValue } from '@/src/shared/lib/utils';
import Carousel from '@/src/shared/ui/Carousel';
import Icon from '@/src/shared/ui/Icon';
import Media from '@/src/shared/ui/Media';
import useWindowWidth from '../../../shared/hooks/useWindowWidth';

export default function ModuleProductFeaturesBody({
  features,
}: {
  features: TypeModuleProductFeature[];
}) {
  const { isDesktop } = useWindowWidth();

  if (!hasArrayValue(features)) return null;

  return (
    <div className="-mx-edge-dynamic lg:mx-0">
      {isDesktop ? (
        <ModuleProductFeaturesBodyDesktop features={features} />
      ) : (
        <ModuleProductFeaturesListMobile features={features} />
      )}
    </div>
  );
}

function ModuleProductFeaturesBodyDesktop({ features }: { features: TypeModuleProductFeature[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-12">
        {features?.map((feature, index) => (
          <div
            className={cn(
              'after:bg-blue-2 relative max-w-sm rounded-md px-4 pt-4 pb-8 text-center transition-colors duration-500',
              {
                'is-active bg-neutral-100 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-center after:scale-x-100 after:rounded-md after:transition-transform after:duration-500':
                  currentIndex === index,
                'before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-md before:bg-neutral-100 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-center after:scale-x-0 after:rounded-md after:transition-transform after:duration-500':
                  currentIndex !== index,
              }
            )}
            key={feature._key}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {feature?.icon ? <Icon className="mx-auto mb-4" icon={feature.icon} /> : null}
            {feature?.heading ? <h3 className="text-xl font-bold">{feature.heading}</h3> : null}
            {feature?.paragraph ? (
              <p className="text-black-light mt-2">{feature.paragraph}</p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl drop-shadow-xl">
        {features?.map((feature, index) => (
          <div
            className={cn(
              'col-[1/2] row-[1/2] opacity-0 blur-lg duration-400 ease-linear',
              currentIndex === index && 'opacity-100 blur-none'
            )}
            key={feature._key}
          >
            <Media data={feature.media} />
          </div>
        ))}
      </div>
    </>
  );
}

function ModuleProductFeaturesListMobile({ features }: { features: TypeModuleProductFeature[] }) {
  return (
    <Carousel autoplayInterval={6000} isShowDots>
      {features.map((feature, index) => (
        <div className="c mt-8 flex flex-col items-center text-center" key={feature._key}>
          {feature.icon ? <Icon className="mx-auto mb-4" icon={feature.icon} /> : null}
          {feature.heading ? (
            <h3 className="text-xl font-bold">
              <span>{index + 1}.&nbsp;</span>
              <span>{feature.heading}</span>
            </h3>
          ) : null}
          {feature.paragraph ? <p className="text-black-light mt-2">{feature.paragraph}</p> : null}
          <div className="mt-4">
            <Media data={feature.media} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
