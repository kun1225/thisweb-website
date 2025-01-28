import { HomeHero } from './HomeHero';
import { HomeMagnet } from './HomeMagnet';
import { HomeCategories } from './HomeCategories';
import { HomeLatestPosts } from './HomeLatestPosts';
import { HomeAbout } from './HomeAbout';
import { HomeRecommendation } from './HomeRecommendation';

import { TypeHome } from '@/src/types/typeHome';

export function PageHome({ data }: { data: TypeHome }) {
  const { hero, leadMagnet, categoriesNav, latestPosts, siteOwner, recommendation } = data;

  return (
    <>
      <HomeHero data={hero} />
      <HomeMagnet data={leadMagnet} />
      <HomeCategories data={categoriesNav} />
      <HomeLatestPosts data={latestPosts} />
      <HomeAbout data={siteOwner} />
      <HomeRecommendation data={recommendation} />
    </>
  );
}
