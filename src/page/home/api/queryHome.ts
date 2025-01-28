import { groq } from 'next-sanity';

export const queryHome = groq`*[_type == "pHome"][0]{
  hero {
    heading,
    headingId,
    subheading,
    paragraph,
    media,
    cta,
  },

  leadMagnet {
    heading,
    headingId,
    subheading,
    paragraph,
    media,
    formId,
    btnLabel,
    successMessage,
  },

  categoriesNav {
    heading,
    headingId,
    subheading,
    categories {
      _key,
      title,
      paragraph,
      "defaultTitle": category->title,
      "url": category->url,
    }[]
  },

  latestPosts {
    heading,
    headingId,
    subheading,
    postsCount,
    "posts": *[_type == "post" && defined(slug) && defined(title) && status == 'done'] | order(_createdAt desc) [0...4] {
      title,
      slug {
        current,
      },
    },
  },

  siteOwner {
    heading,
    headingId,
    subheading,
    paragraph,
    media,
    achievements {
      value,
      paragraph,
    }[],
  },
  
  recommendation {
    heading,
    headingId,
    subheading,
    paragraph,
    media,
    cta,
  }

}`;
