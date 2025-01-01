import { sanityFetch } from '@/src/shared/lib/sanity';
import { POSTS_SLUG_QUERY } from '@/src/libs/sanity/queries';

export const generatePostStaticParams = async () => {
  const allPostsSlug = await sanityFetch<string[]>({
    query: POSTS_SLUG_QUERY,
    tags: ['post'],
  });
  return allPostsSlug.map((slug) => ({ slug }));
};
