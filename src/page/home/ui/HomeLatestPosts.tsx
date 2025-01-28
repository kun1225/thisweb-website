import { hasArrayValue } from '@/src/shared/lib/utils';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import Link from 'next/link';
import type { TypeHome } from '@/src/types/typeHome';
import { format, parseISO } from 'date-fns';

export function HomeLatestPosts({ data }: { data: TypeHome['latestPosts'] }) {
  const { heading, headingId, subheading, postsCount, posts } = data;

  return (
    <section className="flex flex-col px-edge-dynamic py-32 md:flex-row md:gap-20">
      <div className="text-nowrap">
        <div className="relative md:sticky md:top-[calc(var(--header-height)_+_16px)]">
          <HomeSubheading subheading={subheading} />
          <HomeHeading heading={heading} headingId={headingId} />
        </div>
      </div>
      <div className="flex grow flex-col text-blue-1">
        {hasArrayValue(posts) &&
          posts.slice(0, postsCount).map((post) => (
            <article
              key={post._key}
              className="group relative flex items-center justify-between gap-4 border-y border-gray-200 py-6"
            >
              <div className="flex items-center gap-2">
                <span className="hidden size-2 shrink-0 scale-0 rounded-full bg-blue-2 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 md:block" />
                <h3 className="transition duration-300 md:-translate-x-3 md:group-hover:translate-x-0">
                  {post.title}
                </h3>
              </div>
              <div className="flex gap-2 text-nowrap text-xs text-gray-500">
                <span>{`#${post.category.title}`}</span>
                <time dateTime={post.publishedAt}>
                  {format(parseISO(post.publishedAt), 'yyyy / LL / dd')}
                </time>
              </div>
              <Link
                href={`/post/${post.slug.current}`}
                className="absolute inset-0 z-10"
                title={`前往文章-${post.title}`}
                aria-label={`前往文章-${post.title}`}
              />
            </article>
          ))}
      </div>
    </section>
  );
}
