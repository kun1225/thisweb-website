import { allArticles } from 'contentlayer/generated';
import { composeWithInitialValue } from '@/lib/lib';
import { sortArticleByDate, filterActiveArticles } from '@/lib/articleLib';
import HeroBanner from './(root)/HeroBanner';
import ProblemSection from './(root)/ProblemSection';
import SiteOwnerSection from './(root)/SiteOwnerSection';
import RecommendedArticles from './(root)/RecommendedArticles';

export default function Home() {
  const articles = composeWithInitialValue(
    allArticles,
    filterActiveArticles,
    sortArticleByDate,
  );

  return (
    <>
      <HeroBanner />
      <ProblemSection />
      <SiteOwnerSection />
      <RecommendedArticles articles={articles} />
    </>
  );
}
