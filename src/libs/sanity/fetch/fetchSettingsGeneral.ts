import { sanityFetch } from '../client';
import { settingsGeneralQuery } from '../queries/settingsGeneralQuery';

export async function getSettingsGeneral() {
  const data = sanityFetch({
    query: settingsGeneralQuery,
    tags: ['settingsGeneral'],
  });

  return data;
}
