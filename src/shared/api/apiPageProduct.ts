import { sanityFetch } from '../lib/sanity';
import {
  pProductAllUrlQuery,
  pProductSharingQuery,
  pProductDataQuery,
} from '../query/queryModuleProduct';
import { type TypeGlobalSharing } from '../../types/typeGlobalSharing';
import { type TypePageProduct } from '@/src/types/typePageProduct';

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
