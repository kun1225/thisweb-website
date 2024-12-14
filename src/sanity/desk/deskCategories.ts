import { TagsIcon, TagIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskCategories = (S: any) => {
  return S.listItem()
    .title('All Categories')
    .child(
      S.list()
        .title('All Categories')
        .items([
          S.listItem()
            .title('First Level Category')
            .child(() =>
              S.documentList()
                .schemaType('category')
                .title('First Level Category')
                .apiVersion(apiVersion)
                .filter(`_type == 'category'`)
            )
            .icon(TagIcon),
          S.listItem()
            .title('Second Level Category')
            .child(() =>
              S.documentList()
                .schemaType('secondLevelCategory')
                .title('Second Level Category')
                .apiVersion(apiVersion)
                .filter(`_type == 'secondLevelCategory'`)
            )
            .icon(TagIcon),
          S.listItem()
            .title('Third Level Category')
            .child(() =>
              S.documentList()
                .schemaType('thirdLevelCategory')
                .title('Third Level Category')
                .apiVersion(apiVersion)
                .filter(`_type == 'thirdLevelCategory'`)
            )
            .icon(TagIcon),
        ])
    )
    .icon(TagsIcon);
};
