import { SanityDocument } from '@sanity/client';

export type PostType = SanityDocument & {
  publishedAt: string;
  body: any[];
  slug: {
    current: string;
  };
  author: string;
  status: string;
  category: string;
  subCategory: string;
  title: string;
};

export type PostsType = PostType[];

export type SlugAndTitleType = Pick<PostType, 'slug' | 'title'>;


export type categoryType = {
  title: string;
  description?: string;
  orderNumber?: number;
};

export type CategoriesType = categoryType[];

export type ServiceType = SanityDocument& {
  title: string;
  body: any[];
  priority: number;
}