import { TypeModulesProduct } from './typeModules';

export type TypePageProduct = {
  announcement: TypePageProductAnnouncement;
  modules: TypeModulesProduct;
};

export type TypePageProductAnnouncement =
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
