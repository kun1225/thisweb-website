import { SanityDocument } from "@sanity/client";

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
