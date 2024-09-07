import { BookIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskPosts = (S: any) => {
  return S.listItem()
    .title('Posts')
    .schemaType('post')
    .child(() =>
      S.documentList()
        .schemaType('post')
        .title('Posts')
        .apiVersion(apiVersion)
        .filter(`_type == 'post'`),
    )
    .icon(BookIcon);
};
