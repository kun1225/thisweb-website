import { allArticles } from 'contentlayer/generated';
import {
  sortArticleByDate,
  filterActiveArticles,
  composeWithInitialValue,
} from '@/lib/lib';
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
      <HeroBanner></HeroBanner>
      <ProblemSection></ProblemSection>
      <SiteOwnerSection></SiteOwnerSection>
      <RecommendedArticles articles={articles}></RecommendedArticles>
    </>
  );
}
