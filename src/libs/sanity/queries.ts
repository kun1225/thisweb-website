import { groq } from 'next-sanity';

// * Post Count Queries
export const POSTS_COUNTS_BY_CATEGORY_URL_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && defined(category) && category->url == $categoryUrl])`;
export const POSTS_COUNTS_BY_SECOND_LEVEL_CATEGORY_URL_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && defined(secondLevelCategory) && secondLevelCategory->url == $secondLevelCategoryUrl])`;
