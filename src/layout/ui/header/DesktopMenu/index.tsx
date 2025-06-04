'use client';

// Hooks & Libs
import { useEffect, useState } from 'react';
// Types
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
import { HeaderNavContents } from './HeaderNavContents';
// Components
import { HeaderOverlay } from './HeaderOverlay';

export function DesktopMenu({ headerContent }: { headerContent: TypeGlobalHeaderContent }) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const isHasMegaMenu = headerContent.navContents.some((item) => item._type === 'megamenu');

  const switchMegaMenu = (index: number) => {
    if (index === currentIndex) {
      setCurrentIndex(-1);
      document.documentElement.setAttribute('data-megamenu-open', 'false');
    } else {
      setCurrentIndex(index);
      document.documentElement.setAttribute('data-megamenu-open', 'true');
    }
  };

  const closeMegaMenu = () => {
    setCurrentIndex(-1);
    document.documentElement.setAttribute('data-megamenu-open', 'false');
  };

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.key === 'Escape') {
        closeMegaMenu();
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <>
      {isHasMegaMenu ? (
        <HeaderOverlay closeMegaMenu={closeMegaMenu} currentIndex={currentIndex} />
      ) : null}
      <ul className="relative z-10 hidden text-sm md:flex md:gap-[1.2vw]">
        <HeaderNavContents
          headerContent={headerContent}
          currentIndex={currentIndex}
          switchMegaMenu={switchMegaMenu}
          closeMegaMenu={closeMegaMenu}
        />
      </ul>
    </>
  );
}
