'use client';

import { useEffect } from 'react';
import { DesktopMenu } from './DesktopMenu';
import { HeaderLogo } from './HeaderLogo';
import { MobileMenu } from './MobileMenu';
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export function Header({ headerContent }: { headerContent: TypeGlobalHeaderContent }) {
  useEffect(() => {
    const gHeader = document.getElementById('g-header');
    document.documentElement.style.setProperty('--header-height', `${gHeader?.clientHeight}px`);

    // const handleScroll = () => {
    //   const currentScrollY = window.scrollY; // Get current scroll position

    //   if (currentScrollY > SCROLLED_THRESHOLD) {
    //     gHeader?.classList.add('is-scrolled');
    //     gHeader?.setAttribute('data-scroll', 'true');
    //   } else {
    //     gHeader?.classList.remove('is-scrolled');
    //     gHeader?.setAttribute('data-scroll', 'false');
    //   }
    // };

    // document.addEventListener('scroll', handleScroll);

    // return () => {
    //   document.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <header
      className="c bg-header relative z-(--z-header) w-full py-4 transition-all duration-400"
      id="g-header"
    >
      <div className="animate-out fade-out-100 fill-mode-forwards flex items-center justify-between opacity-0 duration-400 ease-linear">
        <HeaderLogo />
        <MobileMenu headerContent={headerContent} />
        <DesktopMenu headerContent={headerContent} />
      </div>
    </header>
  );
}
