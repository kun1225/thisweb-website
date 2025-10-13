import type { PortableTextBlock } from 'sanity';

export type TypeGlobalAnnouncement = {
  global: TypeAnnouncementContent;
  products: {
    slug: string;
    announcement: TypeAnnouncementContent;
  }[];
};

export type TypeAnnouncementContent =
  | {
      _type: 'dueDate';
      _key: 'string';
      time: string;
    }[]
  | {
      _type: 'paragraph';
      _key: 'string';
      paragraph: PortableTextBlock[];
    }[];
