'use client';

import { useState } from 'react';
import { TypeModuleProductStep } from '@/src/types/typeModules';
import { PortableText } from '@portabletext/react';
import { cn } from '@/src/shared/lib/utils';
import { hasArrayValue } from '@/src/shared/lib/utils';
import Carousel from '@/src/shared/ui/Carousel';
import Icon from '@/src/shared/ui/Icon';
import Media from '@/src/shared/ui/Media';
import useWindowWidth from '../../../shared/hooks/useWindowWidth';

export default function ModuleProductStepsList({ steps }: { steps: TypeModuleProductStep[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDesktop } = useWindowWidth();

  if (!hasArrayValue(steps)) return null;

  return (
    <div className="-mx-edge-dynamic lg:flex lg:items-center lg:justify-center lg:gap-12 lg:pt-12 xl:pt-16">
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
      <div className="flex max-w-sm flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={step._key}
            className={cn(
              'relative translate-x-0 flex items-center gap-8 rounded-md py-2 px-8 transition-colors duration-500',
              {
                'after:bg-blue-2 is-active bg-neutral-100 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:rounded-md before:bg-neutral-100 after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:origin-top after:scale-y-0 after:scale-y-100 after:rounded-md after:transition-transform after:duration-500':
                  currentIndex === index,
                'after:bg-blue-2 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:rounded-md before:bg-neutral-100 after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:origin-top after:scale-y-0 after:rounded-md after:transition-transform after:duration-500':
                  currentIndex !== index,
              }
            )}
            onMouseEnter={() => setCurrentIndex(index)}
          >
            {step.icon ? <Icon icon={step.icon} /> : null}
            <div>
              {step.heading ? (
                <h3 className="text-xl font-bold">
                  <span>{index + 1}.&nbsp;</span>
                  <span>{step.heading}</span>
                </h3>
              ) : null}
              {step.paragraph ? <div className='prose prose-ul:leading-5'>
                <PortableText value={step.paragraph} />
              </div> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="grid w-full max-w-2xl flex-1">
        {steps.map((step, index) => (
          <div
            key={step._key}
            className={cn(
              'opacity-0 blur-md drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-500 ease-linear',
              {
                'opacity-100 blur-none': currentIndex === index,
              }
            )}
            style={{ gridArea: '1/1/2/2' }}
          >
            <Media data={step.media} />
          </div>
        ))}
      </div>
    </>
  );
}

function ModuleProductStepsListMobile({ steps }: { steps: TypeModuleProductStep[] }) {
  return (
    <Carousel autoplayInterval={6000} isShowDots>
      {steps.map((step, index) => (
        <div className="c flex flex-col items-center gap-8 pt-16" key={step._key}>
          <div className="w-[90%] drop-shadow-lg">
            <Media data={step.media} />
          </div>
          <div className="flex -translate-x-6 items-center gap-8">
            {step.icon ? <Icon icon={step.icon} /> : null}
            <div>
              {step.heading ? (
                <h3 className="text-xl font-bold">
                  <span>{index + 1}.&nbsp;</span>
                  <span>{step.heading}</span>
                </h3>
              ) : null}
              {step.paragraph ? (
                <div className="text-black-light mt-2 list-inside list-disc">
                  <PortableText value={step.paragraph} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
