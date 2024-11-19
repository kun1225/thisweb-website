export type TypePost = {
  _id: string;
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

export type TypePosts = TypePost[];
