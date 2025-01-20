import { PanelRightIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskRecommendation = (S: any) => {
  return S.listItem()
    .title(' Recommendations')
    .schemaType('recommendation')
    .child(() =>
      S.documentList()
        .schemaType('recommendation')
        .title(' Recommendation')
        .apiVersion(apiVersion)
        .filter(`_type == 'recommendation'`)
    )
    .icon(PanelRightIcon);
};
