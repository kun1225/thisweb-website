// Components
import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Image from 'next/image';
import DesktopMenu from './_components/DesktopMenu';
import MobileMenu from './_components/MobileMenu';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function Header({
  headerContent,
}: {
  headerContent: TypeGlobalHeaderContent;
}) {
  return (
    <header
      className="sticky top-0 p-2 bg-[rgba(249,250,251,0.8)] backdrop-blur-md z-header"
      id="g-header"
    >
      <div className="c flex justify-between items-center">
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
        <DesktopMenu className="hidden md:flex" headerContent={headerContent} />
        <MobileMenu className="block md:hidden" />
      </div>
    </header>
  );
}
