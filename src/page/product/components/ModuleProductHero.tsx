// Libs
import Link from 'next/link';
// Types
import { TypeModuleProductHero } from '@/src/types/typeModules';
import { formatBrNewLine, hasObjectValue } from '@/src/shared/lib/utils';
// Components
import { Button } from '@/src/shared/ui/Button';
import Media from '@/src/shared/ui/Media';

export default function ModuleProductHero({ data }: { data: TypeModuleProductHero }) {
  const { heading, paragraph, media, callToAction } = data || {};

  return (
    <section className="c flex w-full flex-col items-center justify-start pt-16 sm:py-24 md:py-32">
      {heading ? (
        <h1 className="text-blue text-center text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
          {heading}
        </h1>
      ) : null}
      {paragraph ? (
        <p
          className="mx-auto mt-8 max-w-xl text-center text-lg leading-7 text-balance sm:text-xl sm:leading-9"
          dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
        />
      ) : null}
      {hasObjectValue(callToAction) ? (
        <Button asChild size="hero">
          <Link className="mt-8" href={callToAction?.url}>
            {callToAction?.label}
          </Link>
        </Button>
      ) : null}
      {media ? <Media data={media} className="mt-16 max-w-4xl" /> : null}
    </section>
  );
}
