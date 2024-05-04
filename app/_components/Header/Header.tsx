// Components
import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Image from 'next/image';
import NavContent from './_components/NavContent';
import MobileMenu from './_components/MobileMenuFolder/MobileMenu';

async function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-2 shadow-sm shadow-gray-200 sticky top-0 backdrop-blur-md z-header" id='g-header'>
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
      <NavContent className="hidden md:flex"/>
      <MobileMenu className="block md:hidden" />
    </header>
  );
}

export default Header;
