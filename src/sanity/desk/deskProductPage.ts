import { CubeIcon } from '@sanity/icons';
import { apiVersion } from '../env';

export const deskProductPage = (S: any) => {
  return S.listItem()
    .title('Products')
    .child(() =>
      S.documentList()
        .schemaType('pProduct')
        .title('Page Product')
        .apiVersion(apiVersion)
        .filter(`_type == 'pProduct'`)
    )
    .icon(CubeIcon);
};
