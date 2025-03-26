import dynamic from 'next/dynamic';
import { TypeHome } from '@/src/types/typeHome';
import { HomeHero } from './HomeHero';

const HomeMagnet = dynamic(() => import('./HomeMagnet').then((m) => m.HomeMagnet));
const HomeAbout = dynamic(() => import('./HomeAbout').then((m) => m.HomeAbout));
const HomeCategories = dynamic(() => import('./HomeCategories').then((m) => m.HomeCategories));
const HomeLatestPosts = dynamic(() => import('./HomeLatestPosts').then((m) => m.HomeLatestPosts));
const HomePopularPosts = dynamic(() =>
  import('./HomePopularPosts').then((m) => m.HomePopularPosts)
);
const HomeRecommendation = dynamic(() =>
  import('./HomeRecommendation').then((m) => m.HomeRecommendation)
);

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
