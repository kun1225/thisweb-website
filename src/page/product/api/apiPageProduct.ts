import { type TypePageProduct } from '@/src/types/typePageProduct';
import { sanityFetch } from '../../../shared/lib/sanity';
import { type TypeGlobalSharing } from '../../../types/typeGlobalSharing';
import { pProductAllUrlQuery, pProductDataQuery, pProductSharingQuery } from './queryModuleProduct';

export const getProductAllUrl = async () => {
  return sanityFetch<string[]>({
    query: pProductAllUrlQuery,
    tags: ['pProduct'],
  });
};

export const getProductSharing = async ({ slug }: { slug: string }) => {
  return sanityFetch<TypeGlobalSharing>({
    query: pProductSharingQuery,
    queryParams: { slug },
    tags: [`pProduct:${slug}`],
  });
};

export const getProductData = async ({ slug }: { slug: string }) => {
  return sanityFetch<TypePageProduct>({
    query: pProductDataQuery,
    queryParams: { slug },
    tags: [`pProduct:${slug}`],
  });
};
