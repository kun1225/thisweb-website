import { groq } from 'next-sanity';

export const postsCountsQuery = groq`count(*[_type == "post" && defined(slug) && defined(title) && status == 'done'])`;

export const postsLimitedQuery = groq`*[_type == "post" && defined(slug) && defined(title) && status == 'done'] {
	...,
	"category": category->title,
} | order(publishedAt desc) [$start...$end]`;
