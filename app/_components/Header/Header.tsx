// Components
import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Image from 'next/image';
import NavContent from './_components/NavContent';

type navContentType  = {
  title: string;
  url: string;
  isMegaMenu: boolean;
  megaMenuContentType?: 'categories';

}

export const navContent: navContentType[] = [
  {
    title: '主頁',
    url: '/',
    isMegaMenu: false,
  },
  {
    title: '文章',
    url: '/posts/page/0',
    isMegaMenu: true,
    megaMenuContentType: 'categories',
  },
];

async function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-2 shadow-sm shadow-gray-200 sticky top-0 backdrop-blur-md z-header">
      <Link href="/">
        <Magnetic className="p-2 flex items-center gap-2 md:gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="-translate-y-[3px]"
          />

          <h1 className="font-[FiraCode] font-semibold">This.Web</h1>
        </Magnetic>
      </Link>
      <NavContent />
    </header>
  );
}

export default Header;
