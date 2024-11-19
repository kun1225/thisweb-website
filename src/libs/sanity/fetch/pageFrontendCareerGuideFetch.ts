import { sanityFetch } from '../client';
import {
  pageFrontendCareerGuideQuery,
  pageFrontendCareerGuideSharingQuery,
} from '../queries/pageFrontendCareerGuide';
import { type TypePageFrontendCareerGuide } from '../../../types/typePageFrontendCareerGuide';
import { type TypeGlobalSharing } from '../../../types/typeGlobalSharing';

export const getPageFrontendCareerGuideData = async () => {
  return sanityFetch<TypePageFrontendCareerGuide>({
    query: pageFrontendCareerGuideQuery,
    tags: ['pageFrontendCareerGuide'],
  });
};

export const getPageFrontendCareerGuideDataSharing = async () => {
  return sanityFetch<TypeGlobalSharing>({
    query: pageFrontendCareerGuideSharingQuery,
    tags: ['pageFrontendCareerGuideSettings'],
  });
};
