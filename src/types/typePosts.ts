import type { TypeImage } from './typeImage';
import type { TypeCta } from './typeCta';

export type TypePost = {
  _id: string;
  publishedAt: string;
  body: any[];
  slug: {
    current: string;
  };
  author: string;
  status: string;
  category: string;
  secondLevelCategory: string;
  title: string;
  sharing: {
    shareGraphic: any;
  };
  relatedPosts?: TypeRelatedPost[];
  recommendations: {
    _key: string;
    title: string;
    imageSection: {
      image: TypeImage;
      imageCta?: TypeCta;
    };
    displayScopeSection: {
      displayScope: string;
      firstLevelCategory?: any;
      secondLevelCategory?: any;
    };
    contentSection: {
      content?: any[];
      contentCta?: TypeCta;
    };
  }[];
};

export type TypePosts = TypePost[];

export type TypePostSidebarHeading = {
  text: string;
  level: 2 | 3;
  id: string;
  children: any[];
};

export type TypeRelatedPost = {
  _key: string;
  title: string;
  slug: {
    current: string;
  };
};
