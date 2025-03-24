// Libs
// Components
import Link from 'next/link';
// Types
import { TypePost, TypePosts } from '@/src/types/typePosts';
import { toPlainText } from '@portabletext/react';
import { format, parseISO } from 'date-fns';
import { cn } from '@/src/shared/lib/utils';

export function PostsList({ posts }: { posts: TypePosts }) {
  return (
    posts.length > 0 && (
      <ul className="mb-20 flex flex-col">
        {posts.map((post, index) => (
          <PostsListItem key={post._id} item={post} index={index} />
        ))}
      </ul>
    )
  );
}

function PostsListItem({ item, index }: { item: TypePost; index: number }) {
  const { _id, title, body, publishedAt, slug, category } = item;

  return (
    <li
      key={_id}
      className={cn(
        'relative animate-[fade-in_0.6s_ease-in-out_forwards,_slide-in-from-bottom-50_0.8s_ease-in-out] py-4 opacity-0 transition duration-400 hover:scale-102',
        'hover:before:bg-blue-5 before:absolute before:-inset-x-4 before:inset-y-0 before:-z-10 before:rounded-xl before:bg-transparent before:transition-colors before:duration-400'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h2 className="text-blue-1 text-xl font-semibold">{title}</h2>
      <PostsListInfo category={category} publishedAt={publishedAt} />
      <p className="text-sm">{`${toPlainText(body).slice(0, 100)}...`}</p>

      <Link
        className="absolute inset-0"
        href={`/post/${slug.current}`}
        aria-label={`前往${title}文章`}
      >
        <span className="sr-only">{`前往${title}文章`}</span>
      </Link>
    </li>
  );
}

function PostsListInfo({
  category,
  publishedAt,
}: {
  category?: TypePost['category'];
  publishedAt?: TypePost['publishedAt'];
}) {
  return (
    <div className="mt-1 mb-2 flex gap-2 text-xs text-gray-500 italic">
      {category ? <span>{category}</span> : null}
      {category && publishedAt ? <span>-</span> : null}
      {publishedAt ? (
        <time dateTime={publishedAt}>{format(parseISO(publishedAt), 'yyyy / LL / dd')}</time>
      ) : null}
    </div>
  );
}
