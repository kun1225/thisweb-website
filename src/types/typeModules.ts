import { TypeMedia } from './typeMedia';
import { TypeIcon } from './typeIcon';

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

export type TypeModuleProductProblem = {
  _key: string;
  icon: TypeIcon;
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

export type TypeModuleProductSolution = {
  _key: string;
  heading: string;
  paragraph: string;
  media: TypeMedia;
};
export type TypeModuleProductSolutions = {
  _key: string;
  _type: 'moduleProductSolutions';
  heading: string;
  paragraph: string;
  solutions: TypeModuleProductSolution[];
};

export type TypeModuleProductStep = {
  _key: string;
  icon: TypeIcon;
  heading: string;
  paragraph: any[];
  media: TypeMedia;
};
export type TypeModuleProductSteps = {
  _key: string;
  _type: 'moduleProductSteps';
  heading: string;
  steps: TypeModuleProductStep[];
};

export type TypeModuleProductFeature = {
  _key: string;
  icon: TypeIcon;
  heading: string;
  paragraph: string;
  media: TypeMedia;
};
export type TypeModuleProductFeatures = {
  _key: string;
  _type: 'moduleProductFeatures';
  heading: string;
  paragraph: string;
  features: TypeModuleProductFeature[];
};

export type TypeModuleProductAboutAchievements = {
  _key: string;
  value: number;
  paragraph: string;
};
export type TypeModuleProductAbout = {
  _key: string;
  _type: 'moduleProductAbout';
  heading: string;
  paragraph: string;
  media: TypeMedia;
  achievements: TypeModuleProductAboutAchievements[];
};

export type TypeModulesProduct = (
  | TypeModuleProductHero
  | TypeModuleProductProblems
  | TypeModuleProductSolutions
  | TypeModuleProductSteps
  | TypeModuleProductFeatures
  | TypeModuleProductAbout
)[];
