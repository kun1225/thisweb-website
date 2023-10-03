// style
import '../../../style/prism.css';
import '../../../style/article.css';

// lib
import { useMDXComponent as callMDXComponent } from 'next-contentlayer/hooks'; // avoid the error of react-hook-rule
import { allArticles } from 'contentlayer/generated';
import {
  sortArticleByDate,
  filterActiveArticles,
  composeWithInitialValue,
} from '@/lib/lib';

// Components
import NotFoundPage from '@/app/not-found';
import mdxComponents from '@/lib/mdxComponents';
import ArticleTitle from './components/ArticleTitle';
import ArticleNavigation from './components/ArticleNavigation';
import TableOfContents from './components/TableOfContents';

export const generateStaticParams = async () => {
  return allArticles.map((article) => ({
    slug: article._raw.flattenedPath.split('/'),
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const completedUrl = params.slug
    .reduce((all, val) => `${all}/${val}`, '')
    .slice(1);
  const article = allArticles.find(
    (nonFindArticle) => nonFindArticle._raw.flattenedPath === completedUrl,
  );
  if (!article) return;

  return {
    title: `${article.title} | ThisWeb`,
    description: article.desc,
  };
};

const ArticlePage = ({ params }: { params: { slug: string[] } }) => {
  const completedUrl = params.slug
    .reduce((all, val) => `${all}/${val}`, '')
    .slice(1);

  const sortedArticles = composeWithInitialValue(
    allArticles,
    filterActiveArticles,
    sortArticleByDate,
  );

  const article = sortedArticles.find(
    (nonFindArticle) => nonFindArticle._raw.flattenedPath === completedUrl,
  );

  if (!article) return <NotFoundPage />;

  const articleIndex = sortedArticles.findIndex(
    (nonFindIndexArticle) =>
      nonFindIndexArticle._raw.flattenedPath === completedUrl,
  );
  const prevArticle =
    articleIndex + 1 < sortedArticles.length
      ? sortedArticles[articleIndex + 1]
      : undefined;
  const nextArticle =
    articleIndex - 1 >= 0 ? sortedArticles[articleIndex - 1] : undefined;

  const MDXContent = callMDXComponent(article.body.code);

  return (
    <>
      <article className="mx-auto my-8">
        <ArticleTitle
          date={article.date}
          title={article.title}
          topic={article.topic}
        />
        <section className="flex flex-col-reverse xl:flex-row justify-center article">
          <div className="max-w-2xl border-gray-200  xl:pr-8">
            <MDXContent components={mdxComponents} />
          </div>
          <aside className="block mb-8 border-2 p-4 rounded-md xl:sticky xl:top-20 xl:mb-0 xl:border-0 xl:pl-8 xl:self-start xl:max-h-[80vh] xl:overflow-y-scroll">
            <TableOfContents source={article.body.raw} />
          </aside>
        </section>
      </article>

      <ArticleNavigation nextArticle={nextArticle} prevArticle={prevArticle} />
    </>
  );
};

export default ArticlePage;
