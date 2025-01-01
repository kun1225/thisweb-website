import { sanityFetch } from '../lib/sanity';
import { queryHeader } from '../query/queryHeader';

import { type TypeGlobalHeaderContent } from '../../types/typeGlobalHeader';

export const getHeaderData = async () => {
  return sanityFetch<TypeGlobalHeaderContent>({
    query: queryHeader,
    tags: ['gHeader'],
  });
};
