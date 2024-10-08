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

// Block
import blockContent from './schemas/block/blockContent';
import codepen from './schemas/block/codepen';
import callout from './schemas/block/calloutContent';

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

  blockContent,
  callout,
  codepen,
];
