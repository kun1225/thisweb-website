import { sanityFetch } from '@/src/shared/lib/sanity';
import { queryHeader } from '@/src/layout/api/queryHeader';

import { type TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export const getHeaderData = async () => {
  return sanityFetch<TypeGlobalHeaderContent>({
    query: queryHeader,
    tags: ['gHeader'],
  });
};
