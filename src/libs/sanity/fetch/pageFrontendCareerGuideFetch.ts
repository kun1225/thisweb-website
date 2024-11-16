import { sanityFetch } from '../client';
import { pageFrontendCareerGuideQuery } from '../queries/pageFrontendCareerGuide';
import { type TypeGlobalHeaderContent } from '../type/typeGlobalHeader';

export const headerFetch = async () => {
  return sanityFetch<TypeGlobalHeaderContent>({
    query: pageFrontendCareerGuideQuery,
    tags: ['pageFrontendCareerGuide'],
  });
};
