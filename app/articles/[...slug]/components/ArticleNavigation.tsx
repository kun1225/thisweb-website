import Link from 'next/link';
import type { Articles } from 'contentlayer/generated';

function ArticleNavigation({
  prevArticle,
  nextArticle,
}: {
  prevArticle: Articles | undefined;
  nextArticle: Articles | undefined;
}) {
  return (
    <div className="flex flex-col gap-4 mt-24 md:flex-row md:justify-between xl:gap-8">
      {prevArticle ? (
        <Link className="basis-1/2" href={prevArticle.url}>
          <h2 className="mb-1 text-xl tracking-wide text-secondary transition-colors">
            上一篇
          </h2>
          <span className="hidden md:inline">←</span> {prevArticle.title}
        </Link>
      ) : (
        <div className="basis-1/2" />
      )}
      {nextArticle ? <Link className="basis-1/2 block md:text-right" href={nextArticle.url}>
          <h2 className="mb-1 text-left text-xl uppercase tracking-wide text-secondary transition-colors md:text-right">
            下一篇
          </h2>
          {nextArticle.title} <span className="hidden md:inline">→</span>
        </Link> : null}
    </div>
  );
}

export default ArticleNavigation;
