import { HomeHeading, HomeSubheading } from './HomeHeading';
import { PortableText } from 'next-sanity';
import Media from '@/src/shared/ui/Media';
// Type
import type { TypeHome } from '@/src/types/typeHome';

export function HomeAbout({ data }: { data: TypeHome['siteOwner'] }) {
  const { heading, headingId, subheading, paragraph, achievements, media } = data;

  return (
    <section className="px-edge-dynamic py-32">
      <div className="text-center">
        <HomeSubheading subheading={subheading} />
        <HomeHeading heading={heading} headingId={headingId} />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-edge">
        <div className="aspect-square max-w-sm">
          <Media data={media} withPlaceholder={false} className="object-fit h-full w-full" />
        </div>
        <div className="prose max-w-xl lg:prose-lg">
          <PortableText value={paragraph} />
        </div>
      </div>
    </section>
  );
}
