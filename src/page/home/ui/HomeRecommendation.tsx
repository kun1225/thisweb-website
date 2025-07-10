'use client';

import Link from 'next/link';
import { InView } from 'react-intersection-observer';
import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
import { CustomPortableText } from '@/src/shared/ui/CustomPortableText';
import Media from '@/src/shared/ui/Media';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeRecommendation({ data }: { data: TypeHome['recommendation'] }) {
  const { heading, headingId, subheading, paragraph, media, cta } = data;

  return (
    <InView threshold={0.2} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={cn(
            'c mb-32 py-8 text-center transition-opacity duration-400 ease-linear',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="border-gray bg-blue-5 flex flex-col items-center rounded-3xl border px-8 py-32 shadow-xl">
            <HomeSubheading subheading={subheading} />
            <HomeHeading heading={heading} headingId={headingId} />

            <Media data={media} className="mb-8 max-w-xl" />

            <div className="prose-p:mb-1 prose-ol:mb-2 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal prose-ul:mb-2 mb-8 text-pretty">
              <CustomPortableText value={paragraph} />
            </div>

            <Button asChild>
              <Link href={cta?.url}>{cta?.label}</Link>
            </Button>
          </div>
        </section>
      )}
    </InView>
  );
}
