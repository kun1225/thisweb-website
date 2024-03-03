import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(publishedAt desc)`;
export const LIMITED_POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(publishedAt desc) [$start...$end]`;
export const POSTS_NUMBER_QUERY = groq`count(*[_type == "post" && defined(slug)])`
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{..., "category": category->title, "author": author->name}`;
export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`
export const AUTHOR_QUERY = groq`*[_type == "author"][0].name`;
export const NEXT_POSTS_QUERY = groq`*[_type == "post"  && defined(slug) &&  publishedAt > $publishedAt] | order(publishedAt asc)[0]`;
export const PREV_POSTS_QUERY = groq`*[_type == "post"  && defined(slug) &&  publishedAt < $publishedAt] | order(publishedAt desc)[0]`;