import { groq } from 'next-sanity';

export const queryLayout = groq`{
"header": ${queryHeader()},
"announcement": ${queryAnnouncement()}
}`;

function queryHeader() {
  return groq`
  *[_type == "gHeader"] {
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
}

function queryAnnouncement() {
  return groq`
  *[_type == "gAnnouncement"] {
    announcement[] {
      _type,
      _key,
      _type == "dueDate" => {
        time,
      },
      _type == "paragraph" => {
        paragraph,
      },
    }
  }[0]
`;
}
