import { groq } from 'next-sanity';

export const postsCountsQuery = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;

export const postsLimitedQuery = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] {
	...,
	"category": category->title,
} | order(publishedAt desc) [$start...$end]`;

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] | order(publishedAt desc)`;
export const LIMITED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done']{..., "category": category->title,} | order(publishedAt desc) [$start...$end]`;
export const POSTS_FOR_GET_NUMBER_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done']{_type}`;
export const POST_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && slug.current == $slug && status == 'done'][0]{
  ...,
  "category": category->title,
  "secondLevelCategory": secondLevelCategory->title,
  "author": author->name,
  sharing {
    shareGraphic,
  },
  body[]{
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
  }
}`;
export const RELATED_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && category->title == $categoryTitle && secondLevelCategory->title == $secondLevelCategory]{title, _id, slug} | order(publishedAt asc)`;
export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current) && defined(slug) && defined(title) && status == 'done'][].slug.current`;
export const NEXT_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt > $publishedAt]{title, slug} | order(publishedAt asc)[0]`;
export const PREV_POSTS_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done' && publishedAt < $publishedAt]{title, slug} | order(publishedAt desc)[0]`;
