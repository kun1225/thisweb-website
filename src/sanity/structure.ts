import type { StructureResolver } from 'sanity/structure';
import { deskGlobalHeader } from './desk/deskGlobalHeader';
import { deskMainPage } from './desk/deskMainPage';
import { deskPosts } from './desk/deskPosts';
import { deskAuthor } from './desk/deskAuthor';
import { deskCategories } from './desk/deskCategories';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Studio')
    .items([
      deskGlobalHeader(S),
      S.divider(),

      deskMainPage(S),
      S.divider(),

      deskPosts(S),
      deskAuthor(S),
      deskCategories(S),
    ]);
