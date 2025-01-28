import { HomeHeading, HomeSubheading } from './HomeHeading';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
import Media from '@/src/shared/ui/Media';
import { Button } from '@/src/shared/ui/Button';
import Link from 'next/link';
// Type
import type { TypeHome } from '@/src/types/typeHome';

export function HomeRecommendation({ data }: { data: TypeHome['recommendation'] }) {
  const { heading, headingId, subheading, paragraph, media, cta } = data;

  return (
    <section className="flex flex-col items-center bg-sky-50 px-edge-dynamic py-32 text-center">
      <HomeSubheading subheading={subheading} />
      <HomeHeading heading={heading} headingId={headingId} />

      <Media data={media} className="mb-8 max-w-xl" />

      <div className="mb-8 text-pretty prose-p:mb-1 prose-ol:mb-2 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal prose-ul:mb-2">
        <CustomPortableText value={paragraph} />
      </div>

      <Button asChild>
        <Link href={cta?.url}>{cta?.label}</Link>
      </Button>
    </section>
  );
}
