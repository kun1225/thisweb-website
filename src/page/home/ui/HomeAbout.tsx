'use client';

import { PortableText } from 'next-sanity';
import { InView } from 'react-intersection-observer';
import { cn } from '@/src/shared/lib/utils';
import Media from '@/src/shared/ui/Media';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeAbout({ data }: { data: TypeHome['siteOwner'] }) {
  const { heading, headingId, subheading, paragraph, achievements, media } = data;

  return (
    <InView threshold={0.2} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={cn(
            'c py-32 transition-opacity duration-400 ease-linear',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-center">
            <HomeSubheading subheading={subheading} />
            <HomeHeading heading={heading} headingId={headingId} />
          </div>

          <div className="md:gap-edge flex flex-col items-center justify-center gap-10 md:flex-row">
            <div className="aspect-square w-full max-w-sm">
              <Media data={media} withPlaceholder={false} className="object-fit h-full w-full" />
            </div>
            <div className="prose lg:prose-lg max-w-xl">
              <PortableText value={paragraph} />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
