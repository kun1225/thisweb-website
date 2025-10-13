'use client';

import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { InView } from 'react-intersection-observer';
import { cn, hasArrayValue } from '@/src/shared/lib/utils';
import { HomeHeading, HomeSubheading } from './HomeHeading';
import type { TypeHome } from '@/src/types/typeHome';

export function HomeLatestPosts({ data }: { data: TypeHome['latestPosts'] }) {
  const { heading, headingId, subheading, postsCount, posts } = data;

  return (
    <InView threshold={0.2} triggerOnce>
      {({ inView, ref }) => (
        <section
          ref={ref}
          className={cn(
            'c px-edge-dynamic flex flex-col py-32 transition-opacity duration-400 ease-linear md:flex-row md:gap-20',
            inView ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-nowrap">
            <div className="md:top-top-space-4 relative md:sticky">
              <HomeSubheading subheading={subheading} />
              <HomeHeading heading={heading} headingId={headingId} />
            </div>
          </div>
          <div className="text-blue-1 flex grow flex-col">
            {hasArrayValue(posts) &&
              posts.slice(0, postsCount).map((post, i) => (
                <article
                  key={i}
                  className="group border-gray relative flex items-center justify-between gap-4 border-y py-6"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-2 hidden size-2 shrink-0 scale-0 rounded-full opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 md:block" />
                    <h3 className="transition duration-300 md:-translate-x-3 md:group-hover:translate-x-0">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-nowrap text-gray-500 md:flex-row">
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
      )}
    </InView>
  );
}
