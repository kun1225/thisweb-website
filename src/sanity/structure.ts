import type { StructureResolver } from 'sanity/structure';
import { deskGlobalHeader } from './desk/deskGlobalHeader';
import { deskRecommendation } from './desk/deskRecommendation';
import { deskMainPage } from './desk/deskMainPage';
import { deskProductPage } from './desk/deskProductPage';
import { deskPosts } from './desk/deskPosts';
import { deskAuthor } from './desk/deskAuthor';
import { deskCategories } from './desk/deskCategories';
import { deskSettings } from './desk/deskSettings';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Studio')
    .items([
      deskGlobalHeader(S),
      deskRecommendation(S),
      S.divider(),

      deskMainPage(S),
      deskProductPage(S),
      S.divider(),

      deskPosts(S),
      deskAuthor(S),
      deskCategories(S),
      S.divider(),

      deskSettings(S),
    ]);
