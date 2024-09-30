import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion } from '@/src/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const imgBuilder = imageUrlBuilder(client);

export const urlForImg = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imgBuilder.image(source).auto('format').fit('max');
};

export async function sanityFetch<QueryResponse>({
  query,
  queryParams = {},
  tags,
}: {
  query: string;
  queryParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, queryParams, {
    cache: 'no-store',
    next: { tags },
  });
}
