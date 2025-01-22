import type { TypeCta } from './typeCta';

export type TypeHome = {
  hero: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: string;
    media: {};
    cta: TypeCta;
  };
  leadMagnet: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: string;
    media: {};
    formId: string;
  };
  categoriesNav: {
    subheading: string;
    heading: string;
    headingId: string;
    categories: {}[];
  };
  latestPosts: {
    subheading: string;
    heading: string;
    headingId: string;
    posts: {}[];
  };
  siteOwner: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: any[];
    media: {};
    achievements: {}[];
  };
  recommendation: {
    subheading: string;
    heading: string;
    headingId: string;
    paragraph: string;
    media: {};
    cta: TypeCta;
  };
};
