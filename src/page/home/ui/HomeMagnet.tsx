import Media from '@/src/shared/ui/Media';
import CustomPortableText from '@/src/shared/ui/CustomPortableText';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import { HomeMagnetForm } from './HomeMagnetForm';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeMagnet({ data }: { data: TypeHome['leadMagnet'] }) {
  const { heading, headingId, subheading, paragraph, media, formId, btnLabel, successMessage } =
    data;

  return (
    <section className="bg-sky-50 px-edge-dynamic py-32 text-center">
      <HomeSubheading subheading={subheading} />
      <HomeHeading heading={heading} headingId={headingId} />

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-edge">
        <div>
          {paragraph ? (
            <div className="max-w-xl text-pretty text-left prose-p:mb-1 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal">
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
