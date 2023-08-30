import { compareDesc } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import HeroBanner from './(root)/HeroBanner'
import ProblemSection from './(root)/ProblemSection'
import SiteOwnerSection from './(root)/SiteOwnerSection'
import RecommendedArticles from './(root)/RecommendedArticles'

export default function Home() {
  
  const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <HeroBanner></HeroBanner>
      <ProblemSection></ProblemSection>
      <SiteOwnerSection></SiteOwnerSection>
      <RecommendedArticles articles={articles}></RecommendedArticles>
    </>
  )
}

