'use client';
import { useEffect } from 'react';
// Components
import Link from 'next/link';
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
  useEffect(() => {
    const gHeader = document.getElementById('g-header');
    document.documentElement.style.setProperty(
      '--header-height',
      `${gHeader?.clientHeight}px`,
    );

    let lastScrollY = 0; // Store the last scroll position
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Get current scroll position

      if (currentScrollY > 100) {
        gHeader?.classList.add('is-scrolled');
      } else {
        gHeader?.classList.remove('is-scrolled');
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > window.innerHeight) {
        gHeader?.classList.add('is-scrolling-down');
      } else {
        gHeader?.classList.remove('is-scrolling-down');
      }
      lastScrollY = currentScrollY; // Update last scroll position
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="g-header" id="g-header">
      <div className="g-header__container">
        <Link href="/" title="This.Web Logo">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              width={24}
              height={24}
              className="-translate-y-[2px]"
              title="This.Web Logo Image"
            />
            <p className="font-mono font-semibold">This.Web</p>
          </div>
        </Link>
        <DesktopMenu headerContent={headerContent} />
        <MobileMenu
          className="g-header__mobile"
          headerContent={headerContent}
        />
      </div>
    </header>
  );
}
