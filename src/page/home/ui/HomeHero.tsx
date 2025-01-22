import { Button } from '@/src/shared/ui/Button';
import Link from 'next/link';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeHero({ data }: { data: TypeHome['hero'] }) {
  const { heading, headingId, paragraph, subheading, cta } = data;
  console.log('🚀 ~ file: HomeHero.tsx:5 ~ heading:', heading);

  return (
    <section className="p-home__hero">
      <div className="p-home__hero__content">
        <p>{subheading}</p>
        <h1 id={headingId || undefined}>{heading}</h1>
        <p>{paragraph}</p>
        <Button asChild>
          <Link href={cta.url}>{cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}
