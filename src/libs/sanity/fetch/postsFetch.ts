import { postsLimitedQuery, postsCountsQuery } from '../queries/postsQuery';
import { sanityFetch } from '../client';
import { type TypePosts } from '../../../types/typePosts';

export const postsLimitedFetch = async ({
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
export const postsCountsFetch = async () => {
  return sanityFetch<number>({
    query: postsCountsQuery,
    tags: ['post'],
  });
};
