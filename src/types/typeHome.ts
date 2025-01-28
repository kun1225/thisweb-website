import type { TypeCta } from './typeCta';
import type { TypeMedia } from './typeMedia';
import type { PortableTextBlock } from 'next-sanity';

export type TypeHome = {
  hero: {
    heading: string;
    headingId: string;
    subheading: string;
    paragraph: string;
    media: TypeMedia;
    cta: TypeCta;
  };
  leadMagnet: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: PortableTextBlock;
    media: TypeMedia;
    formId: string;
    btnLabel: string;
    successMessage: string;
  };
  categoriesNav: {
    subheading: string;
    heading: string;
    headingId: string;
    categories: {
      _key: string;
      title: string;
      paragraph: string;
      defaultTitle: string;
      url: string;
    }[];
  };
  latestPosts: {
    subheading: string;
    heading: string;
    headingId: string;
    postsCount: number;
    posts: {
      _key: string;
      title: string;
      description: string;
      slug: {
        current: string;
      };
      publishedAt: string;
      category: {
        title: string;
        url: string;
      };
    }[];
  };
  siteOwner: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: any[];
    media: TypeMedia;
    achievements: {}[];
  };
  recommendation: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: PortableTextBlock;
    media: TypeMedia;
    cta: TypeCta;
  };
};
