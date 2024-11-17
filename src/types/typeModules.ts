import { TypeMedia } from './typeMedia';

export type TypeModuleProductHero = {
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

export type TypeModuleProblemIcon = {
  _type: 'iconPicker';
  provider: 'string';
  name: 'string';
};
export type TypeModuleProductProblem = {
  _key: string;
  icon: TypeModuleProblemIcon;
  heading: string;
  paragraph: string;
};
export type TypeModuleProductProblems = {
  _key: string;
  _type: 'moduleProductProblems';
  heading: string;
  paragraph: string;
  problems: TypeModuleProductProblem[];
};

export type TypeModuleProductSolutions = {};

export type TypeModulesProduct = (
  | TypeModuleProductHero
  | TypeModuleProductProblems
)[];
