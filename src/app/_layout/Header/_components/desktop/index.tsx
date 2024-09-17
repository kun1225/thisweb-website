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
  };

  const closeMegaMenu = () => {
    setCurrentIndex(-1);
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
    <ul className="g-header__desktop">
      {isHasMegaMenu ? (
        <HeaderOverlay
          closeMegaMenu={closeMegaMenu}
          currentIndex={currentIndex}
        />
      ) : null}

      <HeaderNavContents
        headerContent={headerContent}
        currentIndex={currentIndex}
        switchMegaMenu={switchMegaMenu}
        closeMegaMenu={closeMegaMenu}
      />
    </ul>
  );
}