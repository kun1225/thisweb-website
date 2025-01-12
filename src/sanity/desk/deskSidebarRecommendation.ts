import { PanelRightIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskSidebarRecommendation = (S: any) => {
  return S.listItem()
    .title('Sidebar Recommendation')
    .schemaType('sidebarRecommendation')
    .child(() =>
      S.documentList()
        .schemaType('sidebarRecommendation')
        .title('Sidebar Recommendation')
        .apiVersion(apiVersion)
        .filter(`_type == 'sidebarRecommendation'`)
    )
    .icon(PanelRightIcon);
};
