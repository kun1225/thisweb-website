'use client';

// Hooks & Libs
import { useState, useEffect } from 'react';
// Components
import HeaderOverlay from './_components/HeaderOverlay';
import HeaderNavContents from './_components/HeaderNavContents';
// Types
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function DesktopMenu({
  headerContent,
}: {
  headerContent: TypeGlobalHeaderContent;
}) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const isHasMegaMenu = headerContent.navContents.some(
    (item) => item._type === 'megamenu',
  );

  const switchMegaMenu = (index: number) => {
    if (index === currentIndex) setCurrentIndex(-1);
    else setCurrentIndex(index);

    document.documentElement.classList.toggle('is-megamenu-open', index !== -1);
  };

  const closeMegaMenu = () => {
    setCurrentIndex(-1);
    document.documentElement.classList.remove('is-megamenu-open');
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
        <HeaderOverlay
          closeMegaMenu={closeMegaMenu}
          currentIndex={currentIndex}
        />
      ) : null}
      <ul className="g-header__desktop">
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
