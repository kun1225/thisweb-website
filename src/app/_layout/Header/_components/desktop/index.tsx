'use client';

// Hooks & Libs
import { useState, useEffect } from 'react';
// Components
import Stack from '../../../../_components/Stack';
import CloseMenuOverlay from './_components/CloseMenuOverlay';
import NavContents from './_components/NavContents';
// Style
import './style.css';
// Types
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function DesktopMenu({
  headerContent,
  className = '',
}: {
  headerContent: TypeGlobalHeaderContent;
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
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
    <ul className={className}>
      {isHasMegaMenu ? (
        <CloseMenuOverlay
          closeMegaMenu={closeMegaMenu}
          currentIndex={currentIndex}
        />
      ) : null}

      <NavContents
        headerContent={headerContent}
        currentIndex={currentIndex}
        switchMegaMenu={switchMegaMenu}
        closeMegaMenu={closeMegaMenu}
      />
    </ul>
  );
}
