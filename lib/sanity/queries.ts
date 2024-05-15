import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] | order(publishedAt desc)`;
export const LIMITED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done']{..., "category": category->title,} | order(publishedAt desc) [$start...$end]`;
export const POSTS_NUMBER_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;
export const POST_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && slug.current == $slug && status == 'done'][0]{..., "category": category->title, "secondLevelCategory": secondLevelCategory->title,"author": author->name, body[]{
  ...,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    },
  },
  _type == "Video" => {
      "videoUrl": @.asset->url
  }
}}`;

export const RELATED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->title == $categoryTitle && secondLevelCategory->title == $secondLevelCategory]{title, _id, slug} | order(publishedAt asc)`;
export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current) && defined(slug) && defined(title) && status == 'done'][].slug.current`;
export const AUTHOR_QUERY = groq`*[_type == "author"][0].name`;
export const NEXT_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt > $publishedAt]{title, slug} | order(publishedAt asc)[0]`;
export const PREV_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt < $publishedAt]{title, slug} | order(publishedAt desc)[0]`;

// * Category Queries
export const POSTS_BY_CATEGORY_TITLE_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && category->title == $categoryTitle] {
    ...,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title
  }
  | order(publishedAt desc)
  [$start...$end]
`;
export const POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->title == $categoryTitle])`;
export const CATEGORIES_QUERY = groq`*[_type == 'category']`;

// * Second Level Category Queries
export const POSTS_BY_SECOND_LEVEL_CATEGORY_TITLE_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && secondLevelCategory->title == $secondLevelCategory] {
    ...,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title
  }
  | order(publishedAt desc)
  [$start...$end]
`;
export const POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_TITLE_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && secondLevelCategory->title == $secondLevelCategory])`;
export const CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY = groq`*[_type == "category"]{...,"secondLevelCategory": secondLevelCategory[]->{
  title,
  priority
}}`;

// * Service Queries
export const SERVICE_QUERY = groq`*[_type == "service"]`;
