import { CogIcon, EarthGlobeIcon, EyeOpenIcon } from '@sanity/icons';

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
                .documentId('settingsGeneral')
            )
            .icon(EarthGlobeIcon),
          S.listItem()
            .title('LLMs Text')
            .child(
              S.editor().id('settingsLLMs').schemaType('settingsLLMs').documentId('settingsLLMs')
            )
            .icon(EyeOpenIcon),
        ])
    )
    .icon(CogIcon);
};
