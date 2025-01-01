import { postQuery } from '../../../shared/query/queryPost';
import { sanityFetch } from '../../../shared/lib/sanity';
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
