import { headerQuery } from '../queries';
import { sanityFetch } from '../lib/client';

export const headerFetch = async () => {
  return await sanityFetch({
    query: headerQuery,
    tags: ['gHeader'],
  });
};
