import { PortableText } from 'next-sanity';
// Type
import type { TypeHome } from '@/src/types/typeHome';
import Media from '@/src/shared/ui/Media';
import { HomeHeading, HomeSubheading } from './HomeHeading';

export function HomeAbout({ data }: { data: TypeHome['siteOwner'] }) {
  const { heading, headingId, subheading, paragraph, achievements, media } = data;

  return (
    <section className="c py-32">
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
  );
}
