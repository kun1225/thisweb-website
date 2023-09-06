// style
import './../../../style/prism.css';
import './../../../style/article.css';

// lib
import { compareDesc } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks';


// Components
import ArticleTitle from './components/ArticleTitle';
import ArticleNavigation from './components/ArticleNavigation';
import NotFoundPage from '@/app/not-found';
import mdxComponents from '@/lib/mdxComponents';

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article._raw.flattenedPath.split('/') }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const completedUrl = params.slug.reduce((all, val) => `${all}/${val}`, '').slice(1)
  const article = allArticles.find((article) => article._raw.flattenedPath === completedUrl)
  if (!article) return
  return {
    title: `${article.title} | ThisWeb`,
    description: article.desc,
  }
}

const articlePage = ({
  params
}: {
  params: { slug: string[] }
}) => {

  const completedUrl = params.slug.reduce((all, val) => `${all}/${val}`, '').slice(1)

  const sortedArticles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const article = sortedArticles.find((article) => article._raw.flattenedPath === completedUrl)

  if (!article) return <NotFoundPage />

  const articleIndex = sortedArticles.findIndex((article) => article._raw.flattenedPath === completedUrl);
  const prevArticle = articleIndex + 1 < sortedArticles.length ? sortedArticles[articleIndex + 1] : undefined;
  const nextArticle = articleIndex - 1 >= 0 ? sortedArticles[articleIndex - 1] : undefined;

  const MDXContent = useMDXComponent(article.body.code);

  return (
    <article className="mx-auto max-w-2xl py-8 article">
      <ArticleTitle date={article.date} title={article.title} />
      <MDXContent components={mdxComponents}/>
      <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
    </article >
  )
}

export default articlePage