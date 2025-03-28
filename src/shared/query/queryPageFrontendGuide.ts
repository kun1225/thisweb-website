import { groq } from 'next-sanity';

export const pageFrontendGuideQuery = groq`*[_type == "pageFrontendCareerGuide"] {
  modules[] {
    _type,
    _type == "moduleProductHero" => {
      _key,
      heading,
      paragraph,
      media,
      callToAction {
        url,
        label,
      }
    },
    _type == "moduleProductProblems" => {
      _key,
      heading,
      paragraph,
      problems[] {
        _key,
        icon,
        heading,
        paragraph
      }
    }
  },
}[0]
`;

export const pageFrontendGuideSharingQuery = groq`*[_type == "pageFrontendCareerGuide"][0].sharing`;
