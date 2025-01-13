// Libs
import { hasObjectValue, formatBrNewLine } from '@/src/shared/lib/utils';
// Components
import { Button } from '@/src/shared/ui/Button';
import Link from 'next/link';
import Media from '@/src/shared/ui/Media';
// Types
import { TypeModuleProductHero } from '@/src/types/typeModules';

export default function ModuleProductHero({ data }: { data: TypeModuleProductHero }) {
  const { heading, paragraph, media, callToAction } = data || {};

  return (
    <section className="m-product__hero">
      {heading ? <h1 className="m-product__hero__heading">{heading}</h1> : null}
      {paragraph ? (
        <p
          className="m-product__hero__paragraph"
          dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
        />
      ) : null}
      {hasObjectValue(callToAction) ? (
        <Button asChild size="hero">
          <Link className="m-product__hero__cta" href={callToAction?.url}>
            {callToAction?.label}
          </Link>
        </Button>
      ) : null}
      {media ? <Media data={media} className="m-product__hero__media" /> : null}
    </section>
  );
}
