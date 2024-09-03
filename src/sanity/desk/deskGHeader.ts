import { ComponentIcon, SquareIcon } from '@sanity/icons';

export const deskGHeader = (S: any) => {
  return S.listItem()
    .title('Header')
    .child(
      S.list()
        .title('Header & Megamenu')
        .items([
          S.listItem()
            .title('Header')
            .child(
              S.editor()
                .id('gHeader')
                .schemaType('gHeader')
                .documentId('gHeader'),
            )
            .icon(ComponentIcon),
          S.divider(),
          S.listItem()
            .title('Posts Megamenu')
            .child(
              S.editor()
                .id('postsMegamenu')
                .schemaType('postsMegamenu')
                .documentId('postsMegamenu'),
            )
            .icon(SquareIcon),
        ]),
    )
    .icon(ComponentIcon);
};
