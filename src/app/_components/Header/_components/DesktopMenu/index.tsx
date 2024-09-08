'use client';

// Hooks & Libs
import { useState, useEffect } from 'react';
import { cn } from '@/src/libs/utils';
// Components
import NormalLink from './_components/NormalLink';
import MegaMenu from './_components/MegaMenu';
import Stack from '../../../Stack';
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
    <Stack as="ul" className={`text-sm ${className}`}>
      {headerContent.navContents.some((item) => item._type === 'megamenu') && (
        <button
          tabIndex={-1}
          type="button"
          aria-label="Close the mega menu"
          className={cn(
            'fixed top-0 left-0 w-[100%] h-screen z-10',
            currentIndex !== -1 ? 'pointer-events-auto' : 'pointer-events-none',
          )}
          onClick={closeMegaMenu}
        />
      )}
      {headerContent.navContents.map((item, index) => {
        switch (item._type) {
          case 'normalLink':
            return (
              <NormalLink
                key={item._key}
                linkText={item.linkText}
                linkUrl={item.linkUrl}
                onClick={closeMegaMenu}
              />
            );

          case 'megamenu':
            return (
              <MegaMenu
                key={item._key}
                megamenu={item}
                title={item.buttonText}
                index={index}
                currentIndex={currentIndex}
                switchMegaMenu={switchMegaMenu}
                closeMegaMenu={closeMegaMenu}
              />
            );

          default:
            return null;
        }
      })}
    </Stack>
  );
}
