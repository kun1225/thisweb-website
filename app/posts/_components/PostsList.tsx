'use client';

// Components
import Link from 'next/link';

// Libs
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { toPlainText } from '@portabletext/react';
import { motion } from 'framer-motion';

// Types
import { PostsType } from '@/lib/sanity/type';
interface PostsListPropsType {
  posts: PostsType;
}
const PostsList: React.FC<PostsListPropsType> = ({ posts }) => {
  return (
    <ul className="flex flex-col gap-12 mb-20">
      {posts.length > 0 &&
        posts.map(({ _id, title, body, publishedAt, slug, category }, index) => (
          <motion.li
            key={_id}
            className="relative z-10"
            initial={{ opacity: 0, translateY: '50%' }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1, ease: 'linear' }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: 'backInOut' },
            }}
            whileFocus={{
              scale: 1.02,
              transition: { duration: 0.2, ease: 'backInOut' },
            }}
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
          </motion.li>
        ))}
    </ul>
  );
};

export default PostsList;
