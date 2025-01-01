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
};

export type TypePosts = TypePost[];
