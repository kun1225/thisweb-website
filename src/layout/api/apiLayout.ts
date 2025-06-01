import { type TypeLayout } from '@/src/types/typeLayout';
import { sanityFetch } from '@/src/shared/lib/sanity';
import { queryLayout } from './queryLayout';

export const getLayoutData = async () => {
  return sanityFetch<TypeLayout>({
    query: queryLayout,
    tags: ['gHeader', 'gAnnouncement'],
  });
};
