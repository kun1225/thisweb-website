import type { PortableTextBlock } from 'next-sanity';
import type { TypeCta } from './typeCta';
import type { TypeMedia } from './typeMedia';

export type TypeHome = {
  hero: {
    heading: string;
    headingId: string;
    subheading: string;
    paragraph: string;
    media: TypeMedia;
    isShowFormOrCta: 'form' | 'cta';
    form?: {
      formId: string;
      btnLabel: string;
      successMessage: string;
      errorMessage: string;
    };
    cta?: TypeCta;
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
  popularPosts: {
    heading: string;
    headingId: string;
    subheading: string;
    paragraph: PortableTextBlock;
    posts: {
      _key: string;
      title: string;
      slug: {
        current: string;
      };
      excerpt?: string;
      sharing?: {
        shareGraphic?: any;
        description?: string;
      };
      category: {
        title: string;
      };
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
