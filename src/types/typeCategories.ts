import type { SanityDocument } from '@sanity/client';

export type TypeCategory = SanityDocument & {
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

export type TypeCategories = TypeCategory[];

export type TypeSecondLevelCategory = SanityDocument & {
  title: string;
  url: string;
  description?: string;
  priority?: number;
  ThirdLevelCategory?: (SanityDocument & { title: string; priority: number })[];
};

export type TypeSecondLevelCategories = TypeSecondLevelCategory[];
