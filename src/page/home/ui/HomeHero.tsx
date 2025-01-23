// Components
import { Button } from '@/src/shared/ui/Button';
import Media from '@/src/shared/ui/Media';
import Link from 'next/link';
import { HomeHeroFloating } from './HomeHeroFloating';
// Utils
import { formatBrNewLine } from '@/src/shared/lib/utils';
// Types
import type { TypeHome } from '@/src/types/typeHome';

export function HomeHero({ data }: { data: TypeHome['hero'] }) {
  const { heading, headingId, paragraph, subheading, cta, media } = data;

  return (
    <section className="relative flex flex-col items-center justify-center gap-10 text-pretty px-edge-lg py-24 md:max-h-[92vh] md:flex-row md:gap-edge md:py-56">
      <HomeHeroFloating />

      <div className="max-w-2xl text-center md:text-left">
        {subheading ? (
          <p
            className="text-black-light mb-3 text-sm leading-normal"
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(subheading) }}
          />
        ) : null}

        {heading ? (
          <h1
            className="text-5xl font-bold leading-snug shadow-primary drop-shadow-lg md:text-6xl md:leading-tight"
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

        {cta?.label ? (
          <Button asChild className="mt-6">
            <Link href={cta?.url}>{cta?.label}</Link>
          </Button>
        ) : null}
      </div>

      <Media data={media} className="max-w-xs" />
    </section>
  );
}
