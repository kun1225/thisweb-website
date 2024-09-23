import HomeHero from './_components/HomeHero';
import HomeProblems from './_components/HomeProblems';
import SiteOwnerSection from './_components/SiteOwnerSection';
import RecommendedPosts from './_components/RecommendedPosts';
// Sanity Utils
import { sanityFetch } from '@/src/libs/sanity/client';
import { LIMITED_POSTS_QUERY } from '@/src/libs/sanity/queries';
import { PostsType } from '@/src/libs/sanity/type';

export default async function Home() {
  const posts = await sanityFetch<PostsType>({
    query: LIMITED_POSTS_QUERY,
    queryParams: {
      start: 0,
      end: 3,
    },
    tags: ['post'],
  });

  return (
    <>
      <HomeHero />
      <HomeProblems />
      <SiteOwnerSection />
      <RecommendedPosts limitedPosts={posts} />
    </>
  );
}
