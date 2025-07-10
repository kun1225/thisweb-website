'use client';

import { InView } from 'react-intersection-observer';
import { cn } from '@/src/shared/lib/utils';
import { CustomPortableText } from '@/src/shared/ui/CustomPortableText';
import Media from '@/src/shared/ui/Media';
import { HomeForm } from './HomeForm';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeMagnet({ data }: { data: TypeHome['leadMagnet'] }) {
  const { heading, headingId, subheading, paragraph, media, formId, btnLabel, successMessage } =
    data;

  return (
    <InView threshold={0.2} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={cn(
            'c overflow-x-hidden py-8 text-center transition-opacity duration-400 ease-linear',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="bg-blue-5 border-gray rounded-lg border px-8 py-32 shadow-xl">
            <HomeSubheading subheading={subheading} />
            <HomeHeading heading={heading} headingId={headingId} />

            <div className="md:gap-edge flex flex-col items-center justify-center gap-10 md:flex-row">
              <div className="max-w-xl">
                {paragraph ? (
                  <div className="prose-p:mb-1 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal text-left text-pretty">
                    <CustomPortableText value={paragraph} />
                  </div>
                ) : null}
                <HomeForm formId={formId} successMessage={successMessage} btnLabel={btnLabel} />
              </div>

              <Media data={media} className="max-w-md" />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
