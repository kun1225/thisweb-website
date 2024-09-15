import { Metadata } from 'next';

// Components
import EmptyPage from '../../_components/EmptyPage';
import PaginatedNav from '../../_components/PaginatedNav';
import PostsList from '../../_components/PostsList';

// Sanity
import {
  LIMITED_POSTS_QUERY,
  POSTS_COUNTS_QUERY,
  POSTS_FOR_GET_NUMBER_QUERY,
  POSTS_SLUG_QUERY,
} from '@/src/libs/sanity/queries';
import { sanityFetch } from '@/src/libs/sanity/client';

// Types
import { PostsType } from '@/src/libs/sanity/type';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

const POSTS_PER_PAGE = 9;

export const generateStaticParams = async () => {
  try {
    const postsNumber = await sanityFetch<number>({
      query: POSTS_COUNTS_QUERY,
      tags: ['post'],
    });

    const numPages = Math.ceil(postsNumber / POSTS_PER_PAGE);

    return Array.from({ length: numPages }, (_, i) => ({
      page: i.toString(),
    }));
  } catch (error) {
    console.error('Failed to fetch post count:', error);

    const numPages = 100;
    return Array.from({ length: numPages }, (_, i) => ({
      page: i.toString(),
    }));
  }
};

interface PostsPageProps {
  params: {
    page: string;
  };
}

const PostsPage: React.FC<PostsPageProps> = async ({ params }) => {
  // filter article by page
  // start with 1, and there are ten articles per page
  // page = 1, article = 0 ~ 9 ; page = 2, article = 10 ~ 19 ...
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const posts = await sanityFetch<PostsType>({
    query: LIMITED_POSTS_QUERY,
    queryParams: {
      start: startIndex,
      end: endIndex,
    },
    tags: ['post'],
  });

  if (!posts || posts.length === 0) {
    return <EmptyPage />;
  }

  const postsNumber = await sanityFetch<number>({
    query: POSTS_COUNTS_QUERY,
    tags: ['post'],
  });
  const totalPages = Math.ceil(postsNumber / POSTS_PER_PAGE);

  return (
    <>
      <PostsList posts={posts} />
      <PaginatedNav
        articlesPerPage={POSTS_PER_PAGE}
        currentPage={numPage + 1}
        totalPages={totalPages}
      />
    </>
  );
};

export default PostsPage;
