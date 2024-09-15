// Components
import Link from 'next/link';
import Magnetic from '../effect/Magnetic';
import Image from 'next/image';
import DesktopMenu from './_components/desktop';
import MobileMenu from './_components/mobile';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function GHeader({
  headerContent,
}: {
  headerContent: TypeGlobalHeaderContent;
}) {
  return (
    <header className="g-header" id="g-header">
      <div className="g-header__container">
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
        <DesktopMenu
          className="g-header__desktop"
          headerContent={headerContent}
        />
        <MobileMenu
          className="g-header__mobile"
          headerContent={headerContent}
        />
      </div>
    </header>
  );
}
