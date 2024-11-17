// Header
import header from './schemas/globals/header';
import postMegamenu from './schemas/globals/megamenu/postMegamenu';

// Posts
import post from './schemas/posts/post';
import author from './schemas/posts/author';
import category from './schemas/posts/category';
import secondLevelCategory from './schemas/posts/secondLevelCategory';
import thirdLevelCategory from './schemas/posts/thirdLevelCategory';

// Page
import pHome from './schemas/pages/p-home';
import pProduct from './schemas/pages/p-product';
import pageService from './schemas/pages/service';
import pageFrontendCareerGuide from './schemas/pages/p-frontend-career-guide';

// Block
import blockContent from './schemas/block/blockContent';
import codepen from './schemas/block/codepen';
import callout from './schemas/block/calloutContent';

// Modules
import moduleProductHero from './schemas/modules/moduleProductHero';
import moduleProductProblems from './schemas/modules/moduleProductProblems';
import moduleProductSolutions from './schemas/modules/moduleProductSolutions';
import moduleProductSteps from './schemas/modules/moduleProductSteps';
import moduleProductFeatures from './schemas/modules/moduleProductFeatures';
import moduleProductAbout from './schemas/modules/moduleProductAbout';
import moduleProductBonuses from './schemas/modules/moduleProductBonuses';
import moduleProductTestimonials from './schemas/modules/moduleProductTestimonials';
import moduleProductPrices from './schemas/modules/moduleProductPricing';

// objects
import sharing from './schemas/objects/sharing';
import video from './schemas/objects/video';
import media from './schemas/objects/media';

export const schemas = [
  header,
  postMegamenu,

  post,
  author,
  category,
  secondLevelCategory,
  thirdLevelCategory,

  pHome,
  pProduct,
  pageService,
  pageFrontendCareerGuide,

  blockContent,
  callout,
  codepen,

  moduleProductHero,
  moduleProductProblems,
  moduleProductSolutions,
  moduleProductSteps,
  moduleProductFeatures,
  moduleProductAbout,
  moduleProductBonuses,
  moduleProductTestimonials,
  moduleProductPrices,

  sharing,
  video,
  media,
];
