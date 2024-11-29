import { CogIcon, EarthGlobeIcon } from '@sanity/icons';

export const deskSettings = (S: any) => {
  return S.listItem()
    .title('Settings')
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('General')
            .child(
              S.editor()
                .id('settingsGeneral')
                .schemaType('settingsGeneral')
                .documentId('settingsGeneral'),
            )
            .icon(EarthGlobeIcon),
        ]),
    )
    .icon(CogIcon);
};
