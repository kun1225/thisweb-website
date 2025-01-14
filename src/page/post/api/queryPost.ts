import { groq } from 'next-sanity';

export const postQuery = groq`*[_type == "post" && defined(slug) && defined(title) && slug.current == $slug && status == 'done'][0]{
  ${postBasicInfo()},
  ${postBody()},
  "recommendations": ${recommendation()},
}`;

function postBasicInfo() {
  return groq`
    title,
    publishedAt,
    slug {
      current
    },
    "author": author->name,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title,
    sharing {
      shareGraphic,
    }
  `;
}

function postBody() {
  return groq`body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      },
    },
    _type == "Video" => {
      "videoUrl": @.asset->url
    },
  }`;
}

function recommendation() {
  return groq`*[_type == "recommendation" && (
    displayScopeSection.displayScope == "all"
    || (displayScopeSection.displayScope == "firstLevelCategory" && displayScopeSection.firstLevelCategory._ref == ^.category._ref)
    || (displayScopeSection.displayScope == "secondLevelCategory" && displayScopeSection.secondLevelCategory._ref == ^.secondLevelCategory._ref)
    )][]
    {
      _key,
      title,
      imageSection {
        image,
        imageCta
      },
      displayScopeSection {
        displayScope,
      },
      contentSection {
        content,
        contentCta
      }
  }`;
}
