import type { Metadata } from 'next';
import {
  PagePosts,
  PostsEmptyPage,
  getPostsLimited,
  getPostsCounts,
  POSTS_PER_PAGE,
} from '@/src/page/posts';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

export const generateStaticParams = async () => {
  try {
    const postsNumber = await getPostsCounts();
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

export default async function Page(
  props: {
    params: Promise<{
      page: string;
    }>;
  }
) {
  const params = await props.params;
  /**
   * filter article by page
   * start with 0, and there are 10 articles per page
   * page = 1, article = 0 ~ 9 ; page = 2, article = 10 ~ 19 ...
   */
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;
  const posts = await getPostsLimited({
    startIndex,
    endIndex,
  });

  if (!posts || posts.length === 0) {
    return <PostsEmptyPage />;
  }

  const postsNumber = await getPostsCounts();
  const totalPages = Math.ceil(postsNumber / POSTS_PER_PAGE);

  return (
    <PagePosts
      posts={posts}
      articlesPerPage={POSTS_PER_PAGE}
      currentPage={numPage + 1}
      totalPages={totalPages}
    />
  );
}
