import Media from '@/src/shared/ui/Media';
import { PortableText } from 'next-sanity';
import { HomeMagnetForm } from './HomeMagnetForm';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeMagnet({ data }: { data: TypeHome['leadMagnet'] }) {
  const { heading, headingId, subheading, paragraph, media, formId, btnLabel, successMessage } =
    data;

  return (
    <section className="p-home__magnet bg-sky-50 px-edge-dynamic py-32 text-center">
      {subheading ? (
        <p className="text-blue-1 mb-2 text-xl font-bold leading-normal tracking-wide">
          {subheading}
        </p>
      ) : null}

      {heading ? (
        <h2
          id={headingId || undefined}
          className="mb-12 text-4xl font-bold leading-snug shadow-black drop-shadow-lg md:text-5xl md:leading-tight"
        >
          {heading}
        </h2>
      ) : null}

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-edge">
        <div>
          {paragraph ? (
            <div className="max-w-xl text-pretty text-left prose-p:mb-1 prose-ol:mt-4 prose-ol:list-inside prose-ol:list-decimal">
              <PortableText value={paragraph} />
            </div>
          ) : null}
          <HomeMagnetForm formId={formId} successMessage={successMessage} btnLabel={btnLabel} />
        </div>

        <Media data={media} className="max-w-md" />
      </div>
    </section>
  );
}
