import { postsLimitedQuery, postsCountsQuery } from '../../libs/sanity/queries/postsQuery';
import { sanityFetch } from '../lib/sanity';
import { type TypePosts } from '../../types/typePosts';

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
