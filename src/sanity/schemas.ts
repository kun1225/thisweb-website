import settingsGeneral from './schemas/globals/settingsGeneral';

// Global
import header from './schemas/globals/header';
import postMegamenu from './schemas/globals/megamenu/postMegamenu';

import recommendation from './schemas/globals/recommendation';

// Posts
import post from './schemas/posts/post';
import author from './schemas/posts/author';
import firstLevelCategory from './schemas/posts/firstLevelCategory';
import secondLevelCategory from './schemas/posts/secondLevelCategory';
import thirdLevelCategory from './schemas/posts/thirdLevelCategory';

// Page
import pHome from './schemas/pages/p-home';
import pProduct from './schemas/pages/p-product';

// Block
import blockContent from './schemas/block/blockContent';
import calloutBlock from './schemas/block/calloutBlock';
import recommendationBlock from './schemas/block/recommendationBlock';
import simpleBlock from './schemas/block/simpleBlock';

// Modules
import moduleProductHero from './schemas/modules/moduleProductHero';
import moduleProductProblems from './schemas/modules/moduleProductProblems';
import moduleProductSolutions from './schemas/modules/moduleProductSolutions';
import moduleProductSteps from './schemas/modules/moduleProductSteps';
import moduleProductFeatures from './schemas/modules/moduleProductFeatures';
import moduleProductAbout from './schemas/modules/moduleProductAbout';
import moduleProductPrices from './schemas/modules/moduleProductPricing';
import moduleProductTestimonials from './schemas/modules/moduleProductTestimonials';
import moduleProductFAQs from './schemas/modules/moduleProductFAQs';

// objects
import sharing from './schemas/objects/sharing';
import video from './schemas/objects/video';
import media from './schemas/objects/media';
import codepen from './schemas/objects/codepen';
import achievements from './schemas/objects/achievements';

export const schemas = [
  settingsGeneral,

  header,
  postMegamenu,
  recommendation,

  post,
  author,
  firstLevelCategory,
  secondLevelCategory,
  thirdLevelCategory,

  pHome,
  pProduct,

  blockContent,
  calloutBlock,
  recommendationBlock,
  simpleBlock,

  moduleProductHero,
  moduleProductProblems,
  moduleProductSolutions,
  moduleProductSteps,
  moduleProductFeatures,
  moduleProductAbout,
  moduleProductTestimonials,
  moduleProductPrices,
  moduleProductFAQs,

  sharing,
  video,
  media,
  codepen,
  achievements,
];
