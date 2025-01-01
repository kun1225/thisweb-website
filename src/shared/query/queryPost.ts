import { groq } from 'next-sanity';

export const POST_QUERY = groq`*[_type == "post" && defined(slug) && defined(title) && slug.current == $slug && status == 'done'][0]{
  title,
  publishedAt,
  slug {
	current
  },
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

export const postsCountsQuery = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;

export const postsLimitedQuery = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] {
	...,
	"category": category->title,
} | order(publishedAt desc) [$start...$end]`;
