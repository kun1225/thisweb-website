import { groq } from 'next-sanity';

export const queryLayout = groq`{
"header": ${queryHeader()},
"announcement": ${queryAnnouncement()},
"products": ${queryProducts()}
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
  {
    "global": *[_type == "gAnnouncement"].data[] {
      _type,
      _key,
      _type == "dueDate" => {
        time,
      },
      _type == "paragraph" => {
        paragraph,
      },
    },
    "products": *[_type == "pProduct"] {
      "slug": slug.current,
      "announcement": announcement.data[] {
        _type,
        _key,
        _type == "dueDate" => {
         time,
        },
        _type == "paragraph" => {
          paragraph,
        },
      }
    }[]
  }
`;
}

function queryProducts() {
  return groq`
  *[_type == "pProduct"] {
    slug {
      current,
    },
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
  }[]
`;
}
