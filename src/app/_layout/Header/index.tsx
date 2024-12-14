'use client';
// Hooks & Libs
import { useEffect } from 'react';
import useWindowWidth from '../../_hooks/useWindowWidth';
import dynamic from 'next/dynamic';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
// Components
import HeaderLogo from './_components/HeaderLogo';

const DesktopMenu = dynamic(() => import('./_components/desktop'));
const MobileMenu = dynamic(() => import('./_components/mobile'));

const SCROLLED_THRESHOLD = 0;

export default function Header({ headerContent }: { headerContent: TypeGlobalHeaderContent }) {
  const { isMobile } = useWindowWidth();

  useEffect(() => {
    const gHeader = document.getElementById('g-header');
    document.documentElement.style.setProperty('--header-height', `${gHeader?.clientHeight}px`);

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
        <HeaderLogo />

        {isMobile ? (
          <MobileMenu className="g-header__mobile" headerContent={headerContent} />
        ) : (
          <DesktopMenu headerContent={headerContent} />
        )}
      </div>
    </header>
  );
}
