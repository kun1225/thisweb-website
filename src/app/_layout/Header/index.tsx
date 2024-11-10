'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';
// Components
import Link from 'next/link';
import Image from 'next/image';

const DesktopMenu = dynamic(() => import('./_components/desktop'));
const MobileMenu = dynamic(() => import('./_components/mobile'));

const SCROLLED_THRESHOLD = 0;

export default function Header({
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

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Get current scroll position

      if (currentScrollY > SCROLLED_THRESHOLD) {
        gHeader?.classList.add('is-scrolled');
      } else {
        gHeader?.classList.remove('is-scrolled');
      }
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
