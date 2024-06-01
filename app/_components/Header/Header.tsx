// Components
import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Image from 'next/image';
import NavContent from './_components/MegaMenuFolder/NavContent';
import MobileMenu from './_components/MobileMenuFolder/MobileMenu';

async function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center px-4 md:px-8 py-2 bg-[rgba(249,250,251,0.8)] backdrop-blur-md z-header" id='g-header'>
      <Link href="/" title="This.Web Logo">
        <Magnetic className="p-2 flex items-center gap-2 md:gap-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="-translate-y-[3px]"
            title="This.Web Logo Image"
          />
          <p className="font-[FiraCode] font-semibold">This.Web</p>
        </Magnetic>
      </Link>
      <NavContent className="hidden md:flex"/>
      <MobileMenu className="block md:hidden" />
    </header>
  );
}

export default Header;
