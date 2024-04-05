// Next
import { Metadata } from 'next';

// Components
import EmptyPage from '../../_components/EmptyPage';
import PaginatedNav from '../../_components/PaginatedNav';
import PostsList from '../../_components/PostsList';

// Sanity
import {
  POSTS_BY_CATEGORY_TITLE_QUERY,
  POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY,
} from '@/lib/sanity/queries';
import { client } from '@/lib/sanity/client';

// Types
import { PostsType } from '@/lib/sanity/type';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

const POSTS_PER_PAGE = 9;

interface PostsPageProps {
  params: {
    category: string;
    page: string;
  };
}

const PostsPage: React.FC<PostsPageProps> = async ({ params }) => {
  const numPage = parseInt(params.page);
  const decodedCategory = (() => {
    if (params.category) return decodeURI(params.category as string);
    else return '';
  })();

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const posts = await client.fetch<PostsType>(
    POSTS_BY_CATEGORY_TITLE_QUERY,
    {
      categoryTitle: decodedCategory,
      start: startIndex,
      end: endIndex,
    },
    {
      next: {
        revalidate: 0,
      },
    },
  );

  console.log('🚀 ~ constPostsPage:React.FC<PostsPageProps>= ~ posts:', posts);

  if (!posts || posts.length === 0) {
    return <EmptyPage />;
  }

  const postsNumber = await client.fetch<number>(
    POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY,
    {
      categoryTitle: decodedCategory,
    },
  );
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
