// Components
import Link from 'next/link';
// Libs
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { toPlainText } from '@portabletext/react';
// Types
import { PostsType } from '@/src/libs/sanity/type';

const PostsList: React.FC<{ posts: PostsType }> = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-12 mb-20">
      {posts.length > 0 &&
        posts.map(({ _id, title, body, publishedAt, slug, category }) => (
          <li
            key={_id}
            className="relative z-10 hover:scale-105 transition-transform"
          >
            <Link className="block" href={`/post/${slug.current}`}>
              <h3 className="font-bold text-xl">{title}</h3>
              <div className="flex gap-2 mt-1 mb-2 text-xs text-gray-500 italic">
                {category && <span>{category}</span>}
                {category && publishedAt && <span>-</span>}
                {publishedAt && (
                  <time dateTime={publishedAt}>
                    {format(parseISO(publishedAt), 'yyyy / LL / dd')}
                  </time>
                )}
              </div>

              <p className="text-sm">{`${toPlainText(body).slice(
                0,
                100,
              )}...`}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default PostsList;
