import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] | order(publishedAt desc)`;
export const LIMITED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done']{..., "category": category->title,} | order(publishedAt desc) [$start...$end]`;
export const POSTS_NUMBER_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;
export const POST_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && slug.current == $slug && status == 'done'][0]{..., "category": category->title, "author": author->name, body[]{
  ...,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "slug": @.reference->slug
    }
  }
}}`;
export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current) && defined(slug) && defined(title) && status == 'done'][].slug.current`;
export const AUTHOR_QUERY = groq`*[_type == "author"][0].name`;
export const NEXT_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt > $publishedAt] | order(publishedAt asc)[0]`;
export const PREV_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt < $publishedAt] | order(publishedAt desc)[0]`;
export const POSTS_BY_CATEGORY_TITLE_QUERY = groq`
  *[_type == "post" && defined(slug) && defined(title) && category->title == $categoryTitle] {
    ...,
    "category": category->title,
  }
  | order(publishedAt desc)
  [$start...$end]
`
export const POSTS_COUNTS_BY_CATEGORY_TITLE_QUERY = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->title == $categoryTitle])`;
export const CATEGORIES_QUERY = groq`*[_type == "category"]`;
