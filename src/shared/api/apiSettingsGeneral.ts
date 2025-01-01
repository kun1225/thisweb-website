import { sanityFetch } from '../lib/sanity';
import { querySettingsGeneral } from '../query/querySettingsGeneral';

export async function getSettingsGeneral() {
  const data = sanityFetch({
    query: querySettingsGeneral,
    tags: ['settingsGeneral'],
  });

  return data;
}
