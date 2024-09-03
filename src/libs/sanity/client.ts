import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'y2uwkfdt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
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
