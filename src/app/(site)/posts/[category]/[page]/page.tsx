import type { Metadata } from 'next';
import {
  POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
  POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY,
} from '@/src/libs/sanity/queries';
import type { TypeCategories, TypeCategory } from '@/src/types/typeCategories';
import type { TypePosts } from '@/src/types/typePosts';
import { getCategories } from '@/src/shared/api';
import { sanityFetch } from '@/src/shared/lib/sanity';
import {
  POSTS_PER_PAGE,
  PagePosts,
  PostsEmptyPage,
  getPostsByCategoryUrl,
  getPostsBySecondLevelCategoryUrl,
} from '@/src/page/posts';

export const metadata: Metadata = {
  title: '文章列表 | 請網這邊走 ThisWeb',
};

export const generateStaticParams = async () => {
  const categories = await getCategories();

  const pagesByCategories = await Promise.all(
    categories.map(async (category: TypeCategory) => {
      try {
        const postCount = await sanityFetch<number>({
          query: POSTS_COUNTS_BY_CATEGORY_URL_QUERY,
          queryParams: { categoryUrl: category.url },
          tags: ['post'],
        });

        const pageNumber = Math.ceil(postCount / POSTS_PER_PAGE);

        return { category, pageNumber };
      } catch (error) {
        console.error(`Failed to fetch post count for category ${category.url}:`, error);
        return { category, pageNumber: 50 };
      }
    })
  );

  const result: { category: string; page: string }[] = [];
  pagesByCategories.forEach(({ category, pageNumber }) => {
    for (let i = 0; i < pageNumber; i++) {
      result.push({ category: category.url, page: i.toFixed() });
    }
  });

  return result;
};

export default async function PostsPage(props: {
  params: Promise<{
    category: string;
    page: string;
  }>;
}) {
  const params = await props.params;
  const numPage = parseInt(params.page);

  const startIndex = numPage * POSTS_PER_PAGE;
  const endIndex = (numPage + 1) * POSTS_PER_PAGE;

  const categories = await getCategories();

  const isFirstLevelCategory = categories.map((category) => category.url).includes(params.category);

  let posts: TypePosts = [];
  if (isFirstLevelCategory) {
    posts = await getPostsByCategoryUrl({
      categoryUrl: params.category,
      startIndex,
      endIndex,
    });
  } else {
    posts = await getPostsBySecondLevelCategoryUrl({
      secondLevelCategoryUrl: params.category,
      startIndex,
      endIndex,
    });
  }

  if (!posts || posts.length === 0) {
    return <PostsEmptyPage />;
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
    <PagePosts
      posts={posts}
      articlesPerPage={POSTS_PER_PAGE}
      currentPage={numPage + 1}
      totalPages={totalPages}
    />
  );
}
