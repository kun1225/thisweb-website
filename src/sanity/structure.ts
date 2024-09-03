import type { StructureResolver } from 'sanity/structure';
import { deskGHeader } from './desk/deskGHeader';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Studio')
    .items([
      deskGHeader(S),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'gHeader'),
    ]);
