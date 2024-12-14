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
          S.listItem()
            .title('Frontend Career Guide page')
            .child(
              S.editor()
                .id('pageFrontendCareerGuide')
                .schemaType('pageFrontendCareerGuide')
                .documentId('pageFrontendCareerGuide')
            )
            .icon(ComponentIcon),
          S.listItem()
            .title('Service page')
            .child(S.editor().id('pageService').schemaType('pageService').documentId('pageService'))
            .icon(ComponentIcon),
        ])
    )
    .icon(ComponentIcon);
};
