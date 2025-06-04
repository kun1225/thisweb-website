import type { TypeCta } from './typeCta';
import type { TypeImage } from './typeImage';

export type TypePost = {
  _id: string;
  publishedAt: string;
  body: any[];
  slug: {
    current: string;
  };
  status: string;
  category: string;
  secondLevelCategory: string;
  title: string;
  sharing: {
    shareGraphic: any;
  };
  relatedPosts?: TypeRelatedPost[];
  recommendations: {
    _id: string;
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

export type TypePostTocHeading = {
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
