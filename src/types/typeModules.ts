import { TypeMedia } from './typeMedia';
import { TypeImage } from './typeImage';
import { TypeIcon } from './typeIcon';

export type TypeModuleProductHero = {
  _key: string;
  _type: 'moduleProductHero';
  heading: string;
  headingId?: string;
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
  headingId?: string;
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
  headingId?: string;
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
  headingId?: string;
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
  headingId?: string;
  subheading: string;
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
  headingId?: string;
  paragraph: string;
  media: TypeMedia;
  achievements: TypeModuleProductAboutAchievements[];
};

export type TypeModuleProductTestimonial = {
  _key: string;
  name?: string;
  role?: string;
  image?: TypeImage;
  quote: any[];
};
export type TypeModuleProductTestimonials = {
  _key: string;
  _type: 'moduleProductTestimonials';
  heading: string;
  headingId?: string;
  paragraph: string;
  subHeading: string;
  testimonials: TypeModuleProductTestimonial[];
};

export type TypeModuleProductPricingPlan = {
  _key: string;
  heading: string;
  headingId?: string;
  price: {
    originalPrice: number;
    discountedPrice: number;
  };
  features: any[];
  cta: {
    label: string;
    url: string;
  };
};
export type TypeModuleProductPricing = {
  _key: string;
  _type: 'moduleProductPricing';
  heading: string;
  headingId?: string;
  paragraph: string;
  plans: TypeModuleProductPricingPlan[];
};

export type TypeModuleProductFAQ = {
  _key: string;
  heading: string;
  answer: any[];
};
export type TypeModuleProductFAQs = {
  _key: string;
  _type: 'moduleProductFAQs';
  heading: string;
  headingId?: string;
  subheading: string;
  paragraph: string;
  faqList: TypeModuleProductFAQ[];
};

export type TypeModulesProduct = (
  | TypeModuleProductHero
  | TypeModuleProductProblems
  | TypeModuleProductSolutions
  | TypeModuleProductSteps
  | TypeModuleProductFeatures
  | TypeModuleProductAbout
  | TypeModuleProductPricing
  | TypeModuleProductTestimonials
  | TypeModuleProductFAQs
)[];
