import type { PortableTextBlock } from 'sanity';

export type TypeGlobalAnnouncement = {
  announcement:
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
};
