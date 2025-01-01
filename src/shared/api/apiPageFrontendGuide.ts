import { sanityFetch } from '../lib/sanity';
import {
  pageFrontendCareerGuideQuery,
  pageFrontendCareerGuideSharingQuery,
} from '../../libs/sanity/queries/pageFrontendCareerGuide';
import { type TypePageFrontendCareerGuide } from '../../types/typePageFrontendCareerGuide';
import { type TypeGlobalSharing } from '../../types/typeGlobalSharing';

export const getPageFrontendGuideData = async () => {
  return sanityFetch<TypePageFrontendCareerGuide>({
    query: pageFrontendCareerGuideQuery,
    tags: ['pageFrontendCareerGuide'],
  });
};

export const getPageFrontendGuideDataSharing = async () => {
  return sanityFetch<TypeGlobalSharing>({
    query: pageFrontendCareerGuideSharingQuery,
    tags: ['pageFrontendCareerGuideSettings'],
  });
};
