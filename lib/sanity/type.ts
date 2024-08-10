import type { SanityDocument } from '@sanity/client';

export type PostType = SanityDocument & {
  publishedAt: string;
  body: any[];
  slug: {
    current: string;
  };
  author: string;
  mainImage: {
    _type: string;
    alt: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
  status: string;
  category: string;
  secondLevelCategory: string;
  title: string;
};

export type PostsType = PostType[];

export type SlugAndTitleType = Pick<PostType, 'slug' | 'title'>;

export type CategoryType = SanityDocument & {
  title: string;
  url: string;
  description?: string;
  priority?: number;
  secondLevelCategory?: (SanityDocument & {
    title: string;
    url: string;
    priority: number;
  })[];
};

export type CategoriesType = CategoryType[];

export type SecondLevelCategoryType = SanityDocument & {
  title: string;
  url: string;
  description?: string;
  priority?: number;
  ThirdLevelCategory?: (SanityDocument & { title: string; priority: number })[];
};

export type SecondLevelCategoriesType = SecondLevelCategoryType[];

export type ServiceType = SanityDocument & {
  title: string;
  price: string;
  body: any[];
  priority: number;
  ctaLabel: string;
  ctaUrl: string;
};
