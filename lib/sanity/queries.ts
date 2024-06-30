import { groq } from 'next-sanity';

// * Author
export const AUTHOR_QUERY = groq`*[_type == "author"][0].name`;

// * Post Queries
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
export const NEXT_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt > $publishedAt]{title, slug} | order(publishedAt asc)[0]`;
export const PREV_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt < $publishedAt]{title, slug} | order(publishedAt desc)[0]`;

// * Post By Category Queries
export const POSTS_BY_CATEGORY_TITLE_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && category->title == $categoryTitle] {
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
export const POSTS_BY_CATEGORY_URL_QUERY = groq`
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
export const POSTS_BY_SECOND_LEVEL_CATEGORY_TITLE_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && secondLevelCategory->title == $secondLevelCategoryTitle] {
    ...,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title
  }
  | order(publishedAt desc)
  [$start...$end]
`;
export const POSTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && secondLevelCategory->url == $secondLevelCategoryUrl] {
    ...,
    "category": category->title,
    "secondLevelCategory": secondLevelCategory->title
  }
  | order(publishedAt desc)
  [$start...$end]
`;

// * Post Count Queries
export const POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->title == $categoryTitle])`;
export const POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_TITLE_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && secondLevelCategory->title == $secondLevelCategoryTitle])`;
export const POSTS_COUNTS_BY_CATEGORY_URL_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->url == $categoryUrl])`;
export const POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && secondLevelCategory->url == $secondLevelCategoryUrl])`;

// * Category Queries
export const CATEGORIES_QUERY = groq`*[_type == 'category' && defined(title) && defined(url)]`;
export const CATEGORIES_TITLE_BY_URL_QUERY = groq`*[_type == 'category' && defined(title) && defined(url) && url == $url]{title}[0]`;
export const CATEGORIES_WITH_SECOND_LEVEL_CATEGORIES_QUERY = groq`
  *[_type == "category" && defined(title) && defined(url)] {
    ...,
    "secondLevelCategory": secondLevelCategory[]->{
      title,
      url,
      priority,
      _id
    }
  }
`;

// * Second Level Category Queries
export const SECOND_LEVEL_CATEGORIES_QUERY = groq`*[_type == 'secondLevelCategory' && defined(title) && defined(url)]`;
export const SECOND_LEVEL_CATEGORIES_TITLE_BY_URL_QUERY = groq`*[_type == 'secondLevelCategory' && defined(title) && defined(url) && url == $url]{title}[0]`;

// * Service Queries
export const SERVICE_QUERY = groq`*[_type == "service"]`;
