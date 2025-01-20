'use client';
// Hooks & Libs
import { useEffect } from 'react';
import useWindowWidth from '@/src/shared/hooks/useWindowWidth';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
// Components
import { HeaderLogo } from './HeaderLogo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

const SCROLLED_THRESHOLD = 0;

export function Header({ headerContent }: { headerContent: TypeGlobalHeaderContent }) {
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
