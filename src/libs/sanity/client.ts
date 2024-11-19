import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset, apiVersion } from '@/src/sanity/env';
import { buildFileUrl, getExtension, getFileAsset } from '@sanity/asset-utils';

const SANITY_OPTIONS = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
};

export const client = createClient(SANITY_OPTIONS);

export const imgBuilder = imageUrlBuilder(client);

export function urlForImg(source: any) {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }
  return imgBuilder.image(source).auto('format').fit('max');
}

export function getFile(file: any) {
  const fileDoc = getFileAsset(file, SANITY_OPTIONS);
  return {
    url: buildFileUrl(fileDoc, SANITY_OPTIONS),
    extension: getExtension(fileDoc),
  };
}

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
