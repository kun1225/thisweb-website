import { MenuIcon, SquareIcon, TriangleOutlineIcon } from '@sanity/icons';

export const deskGlobal = (S: any) => {
  return S.listItem()
    .title('Globals Components')
    .child(
      S.list()
        .title('Globals Components')
        .items([
          S.listItem()
            .title('Announcement')
            .child(
              S.editor().id('gAnnouncement').schemaType('gAnnouncement').documentId('gAnnouncement')
            )
            .icon(TriangleOutlineIcon),
          S.divider(),
          S.listItem()
            .title('Header')
            .child(S.editor().id('gHeader').schemaType('gHeader').documentId('gHeader'))
            .icon(MenuIcon),
          S.listItem()
            .title('Posts Megamenu')
            .child(
              S.editor().id('postsMegamenu').schemaType('postsMegamenu').documentId('postsMegamenu')
            )
            .icon(SquareIcon),
        ])
    )
    .icon(MenuIcon);
};
