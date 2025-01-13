import { sanityFetch } from '@/src/shared/lib/sanity';
import { querySettingsGeneral } from './querySettingsGeneral';

export async function getSettingsGeneral() {
  const data = sanityFetch({
    query: querySettingsGeneral,
    tags: ['settingsGeneral'],
  });

  return data;
}
