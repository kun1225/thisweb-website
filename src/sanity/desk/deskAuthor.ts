import { UserIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskAuthor = (S: any) => {
  return S.listItem()
    .title('Authors')
    .schemaType('author')
    .child(() =>
      S.documentList()
        .schemaType('author')
        .title('Authors')
        .apiVersion(apiVersion)
        .filter(`_type == 'author'`)
    )
    .icon(UserIcon);
};
