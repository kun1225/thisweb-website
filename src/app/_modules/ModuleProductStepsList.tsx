'use client';
import { useState } from 'react';
import { cn } from '@/src/libs/utils';
import useWindowWidth from '../_hooks/useWindowWidth';
import { hasArrayValue } from '@/src/libs/utils';
import { PortableText } from '@portabletext/react';

import { TypeModuleProductStep } from '@/src/types/typeModules';
import Icon from '../_components/Icon';
import Media from '../_components/Media';
import Carousel from '../_components/Carousel';

export default function ModuleProductStepsList({
  steps,
}: {
  steps: TypeModuleProductStep[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDesktop } = useWindowWidth();

  if (!hasArrayValue(steps)) return null;

  return (
    <div className="m-product__steps__list">
      {isDesktop ? (
        <ModuleProductStepsListDesktop
          steps={steps}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      ) : (
        <ModuleProductStepsListMobile steps={steps} />
      )}
    </div>
  );
}

function ModuleProductStepsListDesktop({
  steps,
  currentIndex,
  setCurrentIndex,
}: {
  steps: TypeModuleProductStep[];
  currentIndex: number;
  setCurrentIndex: (_number: number) => void;
}) {
  return (
    <>
      <div className="m-product__steps__list__contents">
        {steps.map((step, index) => (
          <div
            key={step._key}
            className={cn('m-product__steps__list__header', {
              'is-active': currentIndex === index,
            })}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {step.icon ? <Icon icon={step.icon} /> : null}
            <div className="m-product__steps__list__content">
              {step.heading ? (
                <h3 className="m-product__steps__list__content__heading">
                  <span>{index + 1}.&nbsp;</span>
                  <span>{step.heading}</span>
                </h3>
              ) : null}
              {step.paragraph ? <PortableText value={step.paragraph} /> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="m-product__steps__list__medias">
        {steps.map((step, index) => (
          <div
            key={step._key}
            className={cn('m-product__steps__list__media', {
              'is-active': currentIndex === index,
            })}
          >
            <Media data={step.media} />
          </div>
        ))}
      </div>
    </>
  );
}

function ModuleProductStepsListMobile({
  steps,
}: {
  steps: TypeModuleProductStep[];
}) {
  return (
    <Carousel autoplayInterval={6000} isShowDots>
      {steps.map((step, index) => (
        <div className="m-product__steps__list__item" key={step._key}>
          <div className={cn('m-product__steps__list__media')}>
            <Media data={step.media} />
          </div>
          <div className={cn('m-product__steps__list__header')}>
            {step.icon ? <Icon icon={step.icon} /> : null}
            <div className="m-product__steps__list__content">
              {step.heading ? (
                <h3 className="m-product__steps__list__content__heading">
                  <span>{index + 1}.&nbsp;</span>
                  <span>{step.heading}</span>
                </h3>
              ) : null}
              {step.paragraph ? <PortableText value={step.paragraph} /> : null}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
