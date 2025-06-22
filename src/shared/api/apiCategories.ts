import { TypeCategories } from '@/src/types/typeCategories';
import { sanityFetch } from '../lib/sanity';
import { categoriesQuery } from './queryCategories';

export async function getCategories() {
  return await sanityFetch<TypeCategories>({
    query: categoriesQuery,
    tags: ['category'],
  });
}
