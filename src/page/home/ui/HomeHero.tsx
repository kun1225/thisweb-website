'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';
import { cn, formatBrNewLine } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
import Media from '@/src/shared/ui/Media';
import { HomeForm } from './HomeForm';
// import { HomeHeroFloating } from './HomeHeroFloating';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeHero({ data }: { data: TypeHome['hero'] }) {
  const { heading, headingId, paragraph, subheading, cta, media, isShowFormOrCta, form } = data;
  const { formId, btnLabel, successMessage, errorMessage } = form || {};

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={cn(
            'c relative z-10 flex flex-col items-center justify-center gap-10 pb-24 text-pretty transition-opacity duration-400 ease-linear md:flex-row md:gap-[7vw] md:pt-56 md:pb-72',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          {/* <HomeHeroFloating /> */}

          <div className="text-center md:text-left">
            {subheading ? (
              <p
                className="text-black-light mb-3 text-sm leading-normal"
                dangerouslySetInnerHTML={{ __html: formatBrNewLine(subheading) }}
              />
            ) : null}

            {heading ? (
              <h1
                className="shadow-blue text-5xl leading-snug font-bold drop-shadow-lg md:text-6xl md:leading-tight lg:text-7xl"
                id={headingId || undefined}
                dangerouslySetInnerHTML={{ __html: formatBrNewLine(heading) }}
              />
            ) : null}

            {paragraph ? (
              <p
                className="mt-6 text-lg font-bold"
                dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
              />
            ) : null}

            {isShowFormOrCta === 'form' && formId ? (
              <HomeForm formId={formId} successMessage={successMessage} btnLabel={btnLabel} />
            ) : cta?.label ? (
              <Button asChild className="mt-6">
                <Link href={cta?.url}>{cta?.label}</Link>
              </Button>
            ) : null}
          </div>

          <Media
            data={media}
            className="max-w-xs drop-shadow-xl md:max-w-sm"
            imgClassName="border-gray border rounded-md"
          />
        </section>
      )}
    </InView>
  );
}
