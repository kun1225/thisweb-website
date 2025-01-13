import { groq } from 'next-sanity';

export const queryHeader = groq`*[_type == "gHeader"] {
  navContents[] {
    _key,
    _type,
    _type == "normalLink" => {
      linkText,
      linkUrl,
      isButton,
    },
    _type == "megamenu" => {
      buttonText,
      "content": megamenuContent-> {
        _type,
        _type == "postsMegamenu" => {
          categories[] {
            title,
            "url": categoryRef->.url,
            description,
            "secondLevelCategories": categoryRef->.secondLevelCategory[]-> {
              title,
              url
            }
          }
        }
      }
    }
  }
}[0]
`;
