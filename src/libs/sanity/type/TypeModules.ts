import { TypeMedia } from './typeMedia';

export type TypeProductHero = {
  _key: string;
  _type: 'moduleProductHero';
  heading: string;
  paragraph: string;
  media: TypeMedia;
  callToAction: {
    url: string;
    label: string;
  };
};

export type TypeProductProblems = {
  _type: 'moduleProductProblems';
};

export type TypeModulesProduct = (TypeProductHero | TypeProductProblems)[];
