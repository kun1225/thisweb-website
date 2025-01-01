import { postQuery } from '../query/queryPost';
import { sanityFetch } from '../lib/sanity';
import type { TypePost } from '@/src/types/typePosts';

export function getPost({ slug }: { slug: string }) {
  return sanityFetch<TypePost>({
    query: postQuery,
    queryParams: {
      slug,
    },
    tags: [`post:${slug}`],
  });
}
