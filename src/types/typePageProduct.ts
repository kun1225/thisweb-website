import { TypeModulesProduct } from './typeModules';

export type TypePageProduct = {
  announcement: TypeProductAnnouncement;
  modules: TypeModulesProduct;
};

export type TypeProductAnnouncement =
  | {
      _type: 'dueDate';
      _key: 'string';
      time: string;
    }[]
  | {
      _type: 'paragraph';
      _key: 'string';
      paragraph: string;
    }[];
