import { type TypePost, type TypePosts } from '@/src/types/typePosts';
import { sanityFetch } from '@/src/shared/lib/sanity';
import {
  postSlugQuery,
  postsByCategoryUrlQuery,
  postsBySecondLevelCategoryUrlQuery,
  postsCountsQuery,
  postsLimitedQuery,
  postsSitemapDataQuery,
} from './queryPosts';

export const getPostsLimited = async ({
  startIndex,
  endIndex,
}: {
  startIndex: number;
  endIndex: number;
}) => {
  return sanityFetch<TypePosts>({
    query: postsLimitedQuery,
    queryParams: {
      start: startIndex,
      end: endIndex,
    },
    tags: ['post'],
  });
};

export const getPostsCounts = async () => {
  return sanityFetch<number>({
    query: postsCountsQuery,
    tags: ['post'],
  });
};

export const getPostsByCategoryUrl = async ({
  categoryUrl,
  startIndex,
  endIndex,
}: {
  categoryUrl: string;
  startIndex: number;
  endIndex: number;
}) => {
  return sanityFetch<TypePosts>({
    query: postsByCategoryUrlQuery,
    queryParams: {
      categoryUrl,
      start: startIndex,
      end: endIndex,
    },
    tags: ['post'],
  });
};

export const getPostsBySecondLevelCategoryUrl = async ({
  secondLevelCategoryUrl,
  startIndex,
  endIndex,
}: {
  secondLevelCategoryUrl: string;
  startIndex: number;
  endIndex: number;
}) => {
  return sanityFetch<TypePosts>({
    query: postsBySecondLevelCategoryUrlQuery,
    queryParams: {
      secondLevelCategoryUrl,
      start: startIndex,
      end: endIndex,
    },
    tags: ['post'],
  });
};

export const getPostsSitemapData = async () => {
  return sanityFetch<Pick<TypePost, 'slug'>[]>({
    query: postsSitemapDataQuery,
    tags: ['post'],
  });
};

export const getPostSlug = async () => {
  return sanityFetch<string[]>({
    query: postSlugQuery,
    tags: ['post'],
  });
};
