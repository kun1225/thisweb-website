import { headerQuery } from '../queries/headerQuery';
import { sanityFetch } from '../client';
import { type TypeGlobalHeaderContent } from '../../../types/typeGlobalHeader';

export const headerFetch = async () => {
  return sanityFetch<TypeGlobalHeaderContent>({
    query: headerQuery,
    tags: ['gHeader'],
  });
};
