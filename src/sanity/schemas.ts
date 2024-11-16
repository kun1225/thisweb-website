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
import pageHome from './schemas/pages/home';
import pageService from './schemas/pages/service';
import pageFrontendCareerGuide from './schemas/pages/p-frontend-career-guide';

// Block
import blockContent from './schemas/block/blockContent';
import codepen from './schemas/block/codepen';
import callout from './schemas/block/calloutContent';

// Modules
import moduleProductHero from './schemas/modules/moduleProductHero';
import moduleProductProblems from './schemas/modules/moduleProductProblems';

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

  pageHome,
  pageService,
  pageFrontendCareerGuide,

  blockContent,
  callout,
  codepen,

  moduleProductHero,
  moduleProductProblems,

  sharing,
  video,
  media,
];
