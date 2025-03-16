import {
  TypeModuleProductAbout,
  TypeModuleProductAboutAchievements,
} from '@/src/types/typeModules';
import { hasArrayValue, hasObjectValue } from '@/src/shared/lib/utils';
import Media from '@/src/shared/ui/Media';
import NumberCounter from '@/src/shared/ui/NumberCounter';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';

export default function ModuleProductAbout({ data }: { data: TypeModuleProductAbout }) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, media, achievements } = data;

  return (
    <section className="c py-32">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <div className="mx-auto my-8 flex max-w-4xl flex-col items-center justify-between gap-8 md:my-24 md:flex-row md:gap-16">
        <Media
          data={media}
          className="aspect-square max-w-xs drop-shadow-[0_0_14px_rgba(0,0,0,.1)]"
        />
        <ModuleProductParagraph paragraph={paragraph} className="m-0 md:text-left" />
      </div>
      {/* <ModuleProductAboutAchievements achievements={achievements} /> */}
    </section>
  );
}

function ModuleProductAboutAchievements({
  achievements,
}: {
  achievements: TypeModuleProductAboutAchievements[];
}) {
  if (!hasArrayValue(achievements)) return null;

  return (
    <div className="m-product__about__achievements">
      {achievements.map((achievement) => (
        <div key={achievement._key} className="m-product__about__achievement">
          <div className="m-product__about__achievement__value">
            <NumberCounter value={achievement?.value} />
            <span>+</span>
          </div>
          <p className="m-product__about__achievement__paragraph">{achievement?.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
