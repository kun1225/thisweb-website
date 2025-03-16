import type { TypeHome } from '@/src/types/typeHome';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
import Media from '@/src/shared/ui/Media';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import { HomeMagnetForm } from './HomeMagnetForm';

export function HomeMagnet({ data }: { data: TypeHome['leadMagnet'] }) {
  const { heading, headingId, subheading, paragraph, media, formId, btnLabel, successMessage } =
    data;

  return (
    <section className="c bg-blue-5 px-edge-dynamic py-32 text-center">
      <HomeSubheading subheading={subheading} />
      <HomeHeading heading={heading} headingId={headingId} />

      <div className="md:gap-edge flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="max-w-xl">
          {paragraph ? (
            <div className="prose-p:mb-1 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal text-left text-pretty">
              <CustomPortableText value={paragraph} />
            </div>
          ) : null}
          <HomeMagnetForm formId={formId} successMessage={successMessage} btnLabel={btnLabel} />
        </div>

        <Media data={media} className="max-w-md" />
      </div>
    </section>
  );
}
