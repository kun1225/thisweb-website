// Libs
import { format, parseISO } from 'date-fns';
import { toPlainText } from '@portabletext/react';
// Components
import Link from 'next/link';
// Types
import { TypePosts, TypePost } from '@/src/types/typePosts';

export function PostsList({ posts }: { posts: TypePosts }) {
  return (
    posts.length > 0 && (
      <ul className="p-posts__list">
        {posts.map((post) => (
          <PostsListItem key={post._id} item={post} />
        ))}
      </ul>
    )
  );
}

function PostsListItem({ item }: { item: TypePost }) {
  const { _id, title, body, publishedAt, slug, category } = item;

  return (
    <li key={_id} className="p-posts__item">
      <h3 className="p-posts__item__title">{title}</h3>
      <PostsListInfo category={category} publishedAt={publishedAt} />
      <p className="text-sm">{`${toPlainText(body).slice(0, 100)}...`}</p>

      <Link
        className="p-posts__item__link"
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
    <div className="p-posts__item__info">
      {category ? <span>{category}</span> : null}
      {category && publishedAt ? <span>-</span> : null}
      {publishedAt ? (
        <time dateTime={publishedAt}>{format(parseISO(publishedAt), 'yyyy / LL / dd')}</time>
      ) : null}
    </div>
  );
}
