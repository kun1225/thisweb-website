import { TypeHome } from '@/src/types/typeHome';
import { HomeAbout } from './HomeAbout';
import { HomeCategories } from './HomeCategories';
import { HomeHero } from './HomeHero';
import { HomeLatestPosts } from './HomeLatestPosts';
import { HomeMagnet } from './HomeMagnet';
import { HomePopularPosts } from './HomePopularPosts';
import { HomeRecommendation } from './HomeRecommendation';

export function PageHome({ data }: { data: TypeHome }) {
  const { hero, leadMagnet, categoriesNav, popularPosts, latestPosts, siteOwner, recommendation } =
    data;

  return (
    <>
      <HomeHero data={hero} />
      <HomeMagnet data={leadMagnet} />
      <HomeAbout data={siteOwner} />
      <HomeCategories data={categoriesNav} />
      <HomePopularPosts data={popularPosts} />
      <HomeLatestPosts data={latestPosts} />
      <HomeRecommendation data={recommendation} />
    </>
  );
}
