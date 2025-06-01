import blockContent from './schemas/block/blockContent';
import calloutBlock from './schemas/block/calloutBlock';
import recommendationBlock from './schemas/block/recommendationBlock';
import simpleBlock from './schemas/block/simpleBlock';
import gAnnouncement from './schemas/globals/g-announcement';
import gheader from './schemas/globals/g-header';
import postMegamenu from './schemas/globals/megamenu/postMegamenu';
import recommendation from './schemas/globals/recommendation';
import settingsGeneral from './schemas/globals/settingsGeneral';
import moduleProductAbout from './schemas/modules/moduleProductAbout';
import moduleProductFAQs from './schemas/modules/moduleProductFAQs';
import moduleProductFeatures from './schemas/modules/moduleProductFeatures';
import moduleProductHero from './schemas/modules/moduleProductHero';
import moduleProductPrices from './schemas/modules/moduleProductPricing';
import moduleProductProblems from './schemas/modules/moduleProductProblems';
import moduleProductSolutions from './schemas/modules/moduleProductSolutions';
import moduleProductSteps from './schemas/modules/moduleProductSteps';
import moduleProductTestimonials from './schemas/modules/moduleProductTestimonials';
import achievements from './schemas/objects/achievements';
import codepen from './schemas/objects/codepen';
import media from './schemas/objects/media';
import sharing from './schemas/objects/sharing';
import video from './schemas/objects/video';
import pHome from './schemas/pages/p-home';
import pProduct from './schemas/pages/p-product';
import firstLevelCategory from './schemas/posts/firstLevelCategory';
import post from './schemas/posts/post';
import secondLevelCategory from './schemas/posts/secondLevelCategory';
import thirdLevelCategory from './schemas/posts/thirdLevelCategory';

export const schemas = [
  settingsGeneral,

  gheader,
  postMegamenu,
  gAnnouncement,
  recommendation,

  post,
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
