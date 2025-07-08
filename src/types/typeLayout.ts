import { TypeGlobalAnnouncement } from './typeGlobalAnnouncement';
import { TypeGlobalHeaderContent } from './typeGlobalHeader';

export type TypeLayout = {
  header: TypeGlobalHeaderContent;
  announcement: TypeGlobalAnnouncement;
  products: {
    slug: {
      current: string;
    };
    announcement: {
      _id: string;
    }[];
  }[];
};
