import { HomeHero } from './HomeHero';

import { TypeHome } from '@/src/types/typeHome';

export function PageHome({ data }: { data: TypeHome }) {
  console.log('🚀 ~ file: PageHome.tsx:4 ~ data:', data);

  const { hero, leadMagnet, categoriesNav, latestPosts, siteOwner, recommendation } = data;

  return (
    <>
      <HomeHero data={hero} />
    </>
  );
}
