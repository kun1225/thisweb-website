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
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center gap-edge p-edge-lg md:flex-row">
      <HomeHeroFloating />

      <div className="max-w-2xl">
        {subheading ? (
          <p
            className="text-black-light mb-3 text-sm leading-normal"
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(subheading) }}
          />
        ) : null}

        {heading ? (
          <h1
            className="text-6xl font-bold leading-tight"
            id={headingId || undefined}
            dangerouslySetInnerHTML={{ __html: formatBrNewLine(heading) }}
          />
        ) : null}

        {paragraph ? (
          <p
            className="mt-6 text-lg"
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
