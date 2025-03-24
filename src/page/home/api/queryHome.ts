import { groq } from 'next-sanity';

export const queryHome = groq`*[_type == "pHome"][0]{
  hero {
    heading,
    headingId,
    subheading,
    paragraph,
    media,
    cta,
    isShowFormOrCta,
    form {
      formId,
      btnLabel,
      successMessage,
    },
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
    "posts": *[_type == "post" && defined(slug) && defined(title) && status == 'done'] | order(publishedAt desc) [0...20] {
      title,
      description,
      publishedAt,
      slug {
        current,
      },
      category -> {
        title,
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
