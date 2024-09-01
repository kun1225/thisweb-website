import PostsMegaMenu from './_components/DesktopMenu/_components/PostsMegaMenu';

export type navContentType = {
  title: string;
  url: string;
  isMegaMenu: boolean;
  MegaMenuTag?: React.FC<any>;
  id: string;
};

export const navContent: navContentType[] = [
  {
    title: '主頁',
    url: '/',
    isMegaMenu: false,
    id: '0',
  },
  {
    title: '全部文章',
    url: '/posts/page/0',
    isMegaMenu: false,
    id: '1',
  },
  {
    title: '文章分類',
    url: '/posts/page/0',
    isMegaMenu: true,
    MegaMenuTag: PostsMegaMenu,
    id: '2',
  },
  {
    title: '服務項目',
    url: '/service',
    isMegaMenu: false,
    id: '3',
  },
];
