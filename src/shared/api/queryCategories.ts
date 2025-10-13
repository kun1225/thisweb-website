import { groq } from 'next-sanity';

export const categoriesQuery = groq`
  *[
    _type == 'category' && 
    defined(title) && 
    defined(url)
  ] {
    _id,
    priority, 
    title, 
    url, 
    _type, 
    description,
    "postCount": count(
      *[
        _type == 'post' &&
        defined(category) &&
        ^._id == category._ref
      ]
    )
  }`;
