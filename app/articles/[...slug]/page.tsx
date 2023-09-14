// style
import './../../../style/prism.css';
import './../../../style/article.css';

// lib
import { allArticles } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks';
import { sortArticleByDate, filterActiveArticles, composeWithInitialValue } from '@/lib/lib'

// Components
import ArticleTitle from './components/ArticleTitle';
import ArticleNavigation from './components/ArticleNavigation';
import NotFoundPage from '@/app/not-found';
import mdxComponents from '@/lib/mdxComponents';
import TableOfContents from './components/TableOfContents';

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article._raw.flattenedPath.split('/') }));

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const completedUrl = params.slug.reduce((all, val) => `${all}/${val}`, '').slice(1);
  const article = allArticles.find((article) => article._raw.flattenedPath === completedUrl);
  if (!article) return;

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

  const sortedArticles = composeWithInitialValue(
    allArticles,
    filterActiveArticles,
    sortArticleByDate,
  );

  const article = sortedArticles.find((article) => article._raw.flattenedPath === completedUrl)

  if (!article) return <NotFoundPage />

  const articleIndex = sortedArticles.findIndex((article) => article._raw.flattenedPath === completedUrl);
  const prevArticle = articleIndex + 1 < sortedArticles.length ? sortedArticles[articleIndex + 1] : undefined;
  const nextArticle = articleIndex - 1 >= 0 ? sortedArticles[articleIndex - 1] : undefined;

  const MDXContent = useMDXComponent(article.body.code);

  return (
    <>
      <article className="mx-auto article my-8">
        <ArticleTitle date={article.date} title={article.title} />
        <section className="flex flex-col-reverse xl:flex-row justify-center">
          <div className="max-w-2xl border-gray-200 xl:border-r-2 xl:pr-8">
            <MDXContent components={mdxComponents} />
          </div>
          <aside className="block mb-8 border-2 p-4 rounded-md xl:sticky xl:top-20 xl:mb-0 xl:border-0 xl:pl-8 xl:self-start xl:max-h-[80vh] xl:overflow-y-scroll">
            <TableOfContents source={article.body.raw} />
          </aside>
        </section>
      </article >

      <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
    </>
  )
}

export default articlePage