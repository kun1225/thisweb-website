import { headerQuery } from '../queries/headerQuery';
import { sanityFetch } from '../client';
import { type TypeGlobalHeaderContent } from '../type/typeGlobalHeader';

export const headerFetch = async () => {
  return sanityFetch<TypeGlobalHeaderContent>({
    query: headerQuery,
    tags: ['gHeader'],
  });
};
