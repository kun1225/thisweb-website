import { queryHome } from './queryHome';
import { sanityFetch } from '../../../shared/lib/sanity';
import type { TypeHome } from '@/src/types/typeHome';

export function getHome() {
  return sanityFetch<TypeHome>({
    query: queryHome,
    tags: ['pHome'],
  });
}
