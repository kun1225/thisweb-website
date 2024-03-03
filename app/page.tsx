import HeroBanner from './(root)/HeroBanner';
import ProblemSection from './(root)/ProblemSection';
import SiteOwnerSection from './(root)/SiteOwnerSection';
import RecommendedArticles from './(root)/RecommendedArticles';

// Sanity Utils
import { client } from '@/lib/sanity/client';
import { LIMITED_POSTS_QUERY } from '@/lib/sanity/queries';
import { PostsType } from '@/lib/sanity/type';

export default async function Home() {

  const articles = await client.fetch<PostsType>(LIMITED_POSTS_QUERY, {
    start: 0,
    end: 3
  })

  console.log(articles)

  return (
    <>
      <HeroBanner />
      <ProblemSection />
      <SiteOwnerSection />
      <RecommendedArticles articles={[]} />
    </>
  );
}
