'use client';
import { useEffect } from 'react';
// Components
import Link from 'next/link';
import Image from 'next/image';
import DesktopMenu from './_components/desktop';
import MobileMenu from './_components/mobile';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

const SCROLLED_THRESHOLD = 200;

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

      if (currentScrollY > SCROLLED_THRESHOLD) {
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
          <div className="g-header__logo">
            <Image
              src="/logo.png"
              alt="logo"
              width={24}
              height={24}
              className="g-header__logo__img"
              title="This.Web Logo Image"
            />
            <p className="g-header__logo__text">This.Web</p>
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
