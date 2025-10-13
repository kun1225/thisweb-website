import { TypeGlobalAnnouncement } from './typeGlobalAnnouncement';
import { TypeGlobalHeaderContent } from './typeGlobalHeader';
import { TypeProductAnnouncement } from './typePageProduct';

export type TypeLayout = {
  header: TypeGlobalHeaderContent;
  announcement: TypeGlobalAnnouncement;
  products: {
    slug: {
      current: string;
    };
    announcement: TypeProductAnnouncement;
  }[];
};
