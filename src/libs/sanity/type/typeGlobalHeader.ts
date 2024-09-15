export type TypeNormalLink = {
  _key: string;
  _type: 'normalLink';
  linkText: string;
  linkUrl: string;
};

export type TypeSecondLevelCategory = {
  _type: 'secondLevelCategory';
  title: string;
  url: string;
};

export type TypeCategory = {
  _type: 'category';
  title: string;
  url: string;
  description: string;
  secondLevelCategories: TypeSecondLevelCategory[] | null;
};

export type TypePostsMegamenu = {
  _type: 'postsMegamenu';
  categories: TypeCategory[];
};

export type TypeMegamenu = {
  _key: string;
  _type: 'megamenu';
  buttonText: string;
  content: TypePostsMegamenu;
};

export type TypeHeaderItem = TypeNormalLink | TypeMegamenu;

export type TypeGlobalHeaderContent = {
  navContents: TypeHeaderItem[];
};
