import { ComponentIcon } from '@sanity/icons';

export const deskMainPage = (S: any) => {
  return S.listItem()
    .title('Main Page')
    .child(
      S.list()
        .title('Main Page')
        .items([
          S.listItem()
            .title('Home Page')
            .child(S.editor().id('pHome').schemaType('pHome').documentId('pHome'))
            .icon(ComponentIcon),
        ])
    )
    .icon(ComponentIcon);
};
