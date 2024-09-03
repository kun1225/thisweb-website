import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
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
