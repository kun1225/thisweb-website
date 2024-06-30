// Next
import { Metadata } from 'next';
// Components
import EmptyPage from '../../_components/EmptyPage';
import PaginatedNav from '../../_components/PaginatedNav';
import PostsList from '../../_components/PostsList';
// Sanity
import {
  CATEGORIES_QUERY,
  POSTS_BY_CATEGORY_URL_QUERY,
  POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
  POSTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
  POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
} from '@/lib/sanity/queries';
import { client } from '@/lib/sanity/client';
// Types
import { PostsType, CategoriesType } from '@/lib/sanity/type';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

export const generateStaticParams = async () => {
  const categories = await client.fetch<CategoriesType>(CATEGORIES_QUERY);

  const pagesByCategories = await Promise.all(
    categories.map(async (category) => {
      const postCount = await client.fetch<number>(
        POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
        { categoryUrl: category.url },
      );
      const pageNumber = Math.ceil(postCount / POSTS_PER_PAGE);
      return { category, pageNumber };
    }),
  );

  const result: { category: string; page: string }[] = [];
  pagesByCategories.forEach(({ category, pageNumber }) => {
    for (let i = 0; i < pageNumber; i++) {
      result.push({ category: category.url, page: i.toFixed() });
    }
  });

  return result;
};

const POSTS_PER_PAGE = 9;

const PostsPage: React.FC<{
  params: {
    category: string;
    page: string;
  };
}> = async ({ params }) => {
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const categories = await client.fetch<CategoriesType>(CATEGORIES_QUERY);
  const isFirstLevelCategory = categories
    .map((category) => category.url)
    .includes(params.category);

  let posts: PostsType = [];

  if (isFirstLevelCategory) {
    posts = await client.fetch<PostsType>(POSTS_BY_CATEGORY_URL_QUERY, {
      categoryUrl: params.category,
      start: startIndex,
      end: endIndex,
    });
  } else {
    posts = await client.fetch<PostsType>(
      POSTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
      {
        secondLevelCategoryUrl: params.category,
        start: startIndex,
        end: endIndex,
      },
    );
  }

  if (!posts || posts.length === 0) {
    return <EmptyPage />;
  }

  let postsNumber: number = 0;

  if (isFirstLevelCategory) {
    postsNumber = await client.fetch<number>(
      POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
      {
        categoryUrl: params.category,
      },
    );
  } else {
    postsNumber = await client.fetch<number>(
      POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
      {
        secondLevelCategoryUrl: params.category,
      },
    );
  }

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
