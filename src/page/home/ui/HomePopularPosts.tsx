import Link from 'next/link';
import { TypeHome } from '@/src/types/typeHome';
import { LuArrowRight } from 'react-icons/lu';
import { cn } from '@/src/shared/lib/utils';
import Img from '@/src/shared/ui/Img';
import { HomeSubheading } from './HomeHeading';
import { HomeHeading } from './HomeHeading';

export function HomePopularPosts({ data }: { data: TypeHome['popularPosts'] }) {
  const { heading, headingId, subheading, posts } = data || {};

  if (!posts || posts.length === 0) return null;

  return (
    <section className="c py-32">
      <div className="mb-12 text-center">
        <HomeSubheading subheading={subheading} />
        <HomeHeading heading={heading} headingId={headingId} />
      </div>

      <div className="group/container mx-auto grid grid-cols-1 gap-8 md:has-[*:hover]:*:not-hover:opacity-40 md:has-[*:hover]:*:not-hover:blur-[2px] lg:grid-cols-2">
        {posts.map((post: TypeHome['popularPosts']['posts'][0], index: number) => (
          <PopularPost key={post.slug.current} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}

function PopularPost({
  post,
  index,
}: {
  post: TypeHome['popularPosts']['posts'][0];
  index: number;
}) {
  return (
    <article
      key={post.slug.current}
      className={cn(
        'group border-gray relative flex flex-col items-center gap-8 rounded-lg border p-8 shadow-sm transition duration-400',
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className="flex-1">
        {post.sharing?.shareGraphic && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg transition-transform duration-400 group-hover:scale-104">
            <Img image={post.sharing.shareGraphic} alt={post.title} />
          </div>
        )}
      </div>

      <div className="flex-1">
        {post.category && (
          <p className="bg-gray mb-2 inline-block rounded-full px-3 py-1 text-xs">
            {post.category.title}
          </p>
        )}

        <h3 className="group-hover:text-blue-2 mb-4 text-lg font-semibold text-pretty transition-colors duration-400">
          {post.title}
        </h3>

        <p className="inline-flex items-center text-sm">
          閱讀全文
          <LuArrowRight className="ml-1 transition duration-400 group-hover:translate-x-1" />
        </p>
      </div>

      <Link href={`/post/${post.slug.current}`} className="absolute inset-0 z-10" />
    </article>
  );
}
