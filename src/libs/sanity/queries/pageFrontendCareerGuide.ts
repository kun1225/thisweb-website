import { groq } from 'next-sanity';

export const pageFrontendCareerGuideQuery = groq`*[_type == "pageFrontendCareerGuide"] {
  
}[0]
`;
