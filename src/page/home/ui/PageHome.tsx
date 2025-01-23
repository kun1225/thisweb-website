import { HomeHero } from './HomeHero';
import { HomeMagnet } from './HomeMagnet';

import { TypeHome } from '@/src/types/typeHome';

export function PageHome({ data }: { data: TypeHome }) {
  const { hero, leadMagnet, categoriesNav, latestPosts, siteOwner, recommendation } = data;

  return (
    <>
      <HomeHero data={hero} />
      <HomeMagnet data={leadMagnet} />
    </>
  );
}
