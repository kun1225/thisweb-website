import { sanityFetch } from '../client';
import {
  pProductAllUrlQuery,
  pProductSharingQuery,
  pProductDataQuery,
} from '../queries/moduleProductQuery';
import { type TypeGlobalSharing } from '../../../types/typeGlobalSharing';
import { type TypePageProduct } from '@/src/types/typePageProduct';

export const getPProductAllUrl = async () => {
  return sanityFetch<string[]>({
    query: pProductAllUrlQuery,
    tags: ['pProduct'],
  });
};

export const getPProductSharing = async ({ slug }: { slug: string }) => {
  return sanityFetch<TypeGlobalSharing>({
    query: pProductSharingQuery,
    queryParams: { slug },
    tags: [`pProduct:${slug}`],
  });
};

export const getPProductData = async ({ slug }: { slug: string }) => {
  return sanityFetch<TypePageProduct>({
    query: pProductDataQuery,
    queryParams: { slug },
    tags: [`pProduct:${slug}`],
  });
};
