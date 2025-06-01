import { deskCategories } from './desk/deskCategories';
import { deskGlobal } from './desk/deskGlobal';
import { deskMainPage } from './desk/deskMainPage';
import { deskPosts } from './desk/deskPosts';
import { deskProductPage } from './desk/deskProductPage';
import { deskRecommendation } from './desk/deskRecommendation';
import { deskSettings } from './desk/deskSettings';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Studio')
    .items([
      deskGlobal(S),
      deskRecommendation(S),
      S.divider(),

      deskMainPage(S),
      deskProductPage(S),
      S.divider(),

      deskPosts(S),
      deskCategories(S),
      S.divider(),

      deskSettings(S),
    ]);
