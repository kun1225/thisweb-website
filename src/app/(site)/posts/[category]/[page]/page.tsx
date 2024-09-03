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
} from '@/src/libs/sanity/queries';
import { sanityFetch } from '@/src/libs/sanity/client';
// Types
import { PostsType, CategoriesType } from '@/src/libs/sanity/type';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

const POSTS_PER_PAGE = 9;

export const generateStaticParams = async () => {
  const categories = await sanityFetch<CategoriesType>({
    query: CATEGORIES_QUERY,
    tags: ['category'],
  });

  const pagesByCategories = await Promise.all(
    categories.map(async (category) => {
      try {
        const postCount = await sanityFetch<number>({
          query: POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
          queryParams: { categoryUrl: category.url },
          tags: ['post'],
        });

        const pageNumber = Math.ceil(postCount / POSTS_PER_PAGE);

        return { category, pageNumber };
      } catch (error) {
        console.error(
          `Failed to fetch post count for category ${category.url}:`,
          error,
        );
        return { category, pageNumber: 50 };
      }
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

const PostsPage: React.FC<{
  params: {
    category: string;
    page: string;
  };
}> = async ({ params }) => {
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const categories = await sanityFetch<CategoriesType>({
    query: CATEGORIES_QUERY,
    tags: ['category'],
  });

  const isFirstLevelCategory = categories
    .map((category) => category.url)
    .includes(params.category);

  let posts: PostsType = [];

  if (isFirstLevelCategory) {
    posts = await sanityFetch<PostsType>({
      query: POSTS_BY_CATEGORY_URL_QUERY,
      queryParams: {
        categoryUrl: params.category,
        start: startIndex,
        end: endIndex,
      },
      tags: ['post'],
    });
  } else {
    posts = await sanityFetch<PostsType>({
      query: POSTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
      queryParams: {
        secondLevelCategoryUrl: params.category,
        start: startIndex,
        end: endIndex,
      },
      tags: ['post'],
    });
  }

  if (!posts || posts.length === 0) {
    return <EmptyPage />;
  }

  let postsNumber: number = 0;

  if (isFirstLevelCategory) {
    postsNumber = await sanityFetch<number>({
      query: POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
      queryParams: {
        categoryUrl: params.category,
      },
      tags: ['post'],
    });
  } else {
    postsNumber = await sanityFetch<number>({
      query: POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
      queryParams: {
        secondLevelCategoryUrl: params.category,
      },
      tags: ['post'],
    });
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
