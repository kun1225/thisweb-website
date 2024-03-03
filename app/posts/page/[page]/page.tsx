// Next
import Link from 'next/link';
import { Metadata } from 'next';

// Lib
import { format, parseISO } from 'date-fns';

// Components
import EmptyPage from './components/EmptyPage';
import PaginatedNav from './components/PaginatedNav';

// Sanity
import { LIMITED_POSTS_QUERY, POSTS_NUMBER_QUERY } from '@/lib/sanity/queries';
import { client } from '@/lib/sanity/client';
import { toPlainText } from '@portabletext/react';

// Types
import { PostsType } from '@/lib/sanity/type';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

const POSTS_PER_PAGE = 9;

interface PostsPageProps {
  params: {
    page: string;
  };
}

const PostsPage: React.FC<PostsPageProps> = async ({
  params,
}: {
  params: { page: string };
}) => {
  // filter article by page
  // start with 1, and there are ten articles per page
  // page = 1, article = 0 ~ 9 ; page = 2, article = 10 ~ 19 ...
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const posts = await client.fetch<PostsType>(LIMITED_POSTS_QUERY, {
    start: startIndex,
    end: endIndex,
  });

  const postsNumber = await client.fetch<number>(POSTS_NUMBER_QUERY);
  const totalPages = Math.ceil(postsNumber / POSTS_PER_PAGE);

  return (
    <div className="my-16">
      <h2 className="text-3xl mb-10 pb-2 border-b-2 border-gray-200">
        文章列表
      </h2>
      <ul className="flex flex-col gap-12 mb-20">
        {posts.length > 0 ? (
          posts.map(({ title, body, publishedAt, slug }) => (
            <li
              key={title}
              className="focus-within:scale-[102%] hover:scale-[102%] transition"
            >
              <Link href={`/posts/${slug.current}`}>
                <h3 className="mb-1 font-bold text-xl">{title}</h3>
                <p className="mb-2 text-xs text-gray-500 italic font-normal">
                  {format(parseISO(publishedAt), 'LLLL d, yyyy')}
                </p>
                <p className="text-sm">{`${toPlainText(body).slice(0, 100)}...`}</p>
              </Link>
            </li>
          ))
        ) : (
          <EmptyPage />
        )}
      </ul>

      {posts.length > 0 && (
        <PaginatedNav
          articlesPerPage={POSTS_PER_PAGE}
          currentPage={numPage + 1}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default PostsPage;
