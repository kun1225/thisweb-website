import { TypeHome } from '@/src/types/typeHome';
import { HomeAbout } from './HomeAbout';
import { HomeCategories } from './HomeCategories';
import { HomeHero } from './HomeHero';
import { HomeLatestPosts } from './HomeLatestPosts';
import { HomeMagnet } from './HomeMagnet';
import { HomeRecommendation } from './HomeRecommendation';

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
