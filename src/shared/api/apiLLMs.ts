import { sanityFetch } from '../lib/sanity';
import { settingsLLMsQuery } from './queryLLMs';

export async function getLLMsDescription() {
  return await sanityFetch<{ description: string }>({
    query: settingsLLMsQuery,
    tags: ['settingsLLMs'],
  });
}
