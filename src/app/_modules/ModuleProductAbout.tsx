// Libs
import { hasArrayValue, hasObjectValue } from '@/src/libs/utils';
// Components
import Media from '../_components/Media';
import ModuleProductHeading from './ModuleProductHeading';
import ModuleProductParagraph from './ModuleProductParagraph';
import NumberCounter from '../_components/effect/NumberCounter';
// Types
import {
  TypeModuleProductAbout,
  TypeModuleProductAboutAchievements,
} from '@/src/types/typeModules';

export default function ModuleProductAbout({
  data,
}: {
  data: TypeModuleProductAbout;
}) {
  if (!hasObjectValue(data)) return null;

  const { heading, headingId, paragraph, media, achievements } = data;

  return (
    <section className="m-product__about">
      <ModuleProductHeading heading={heading} headingId={headingId} />
      <div className="m-product__about__content">
        <Media data={media} className="m-product__about__media" />
        <ModuleProductParagraph paragraph={paragraph} />
      </div>
      <ModuleProductAboutAchievements achievements={achievements} />
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
          <p className="m-product__about__achievement__paragraph">
            {achievement?.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}
