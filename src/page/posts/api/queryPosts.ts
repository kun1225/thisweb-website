import { groq } from 'next-sanity';

export const postsCountsQuery = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;

export const postsLimitedQuery = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] {
	...,
	"category": category->title,
} | order(publishedAt desc) [$start...$end]`;

export const postsByCategoryUrlQuery = groq`
  *[_type == "post" && defined(slug) && defined(title) && category->url == $categoryUrl] {
    ...,
    "category": category->title,
    "secondLevelCategory": {
      "title": secondLevelCategory->title,
      "_id": secondLevelCategory->_id
    }
  }
  | order(publishedAt desc)
  [$start...$end]
`;

export const postsBySecondLevelCategoryUrlQuery = groq`
  *[_type == "post" && defined(slug) && defined(title) && secondLevelCategory->url == $secondLevelCategoryUrl] {
    ...,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title
  }
  | order(publishedAt desc)
  [$start...$end]
`;
