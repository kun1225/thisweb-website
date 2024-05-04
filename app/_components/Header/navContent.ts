import PostsMegaMenu from './_components/PostsMegaMenu';

export type navContentType = {
  title: string;
  url: string;
  isMegaMenu: boolean;
  MegaMenuTag?: React.FC<any>;
};

export const navContent: navContentType[] = [
  {
    title: '主頁',
    url: '/',
    isMegaMenu: false,
  },
  {
    title: '全部文章',
    url: '/posts/page/0',
    isMegaMenu: false,
  },
  {
    title: '文章分類',
    url: '/posts/page/0',
    isMegaMenu: true,
    MegaMenuTag: PostsMegaMenu,
  },
];