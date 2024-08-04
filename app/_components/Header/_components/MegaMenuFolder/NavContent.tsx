'use client';

// Hooks
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// Components
import Link from 'next/link';
import Magnetic from '../../../effect/Magnetic';
import Stack from '../../../Stack';
import { FaCaretDown } from 'react-icons/fa6';
import MegaMenuWrapper from './MegaMenuWrapper';
// Libs
import { cn } from '@/lib/utils';
// Data
import { navContent } from '../../navContent';
// Style
import './mega-menu-style.min.css';

interface NavContentPropsType {
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}

const NavContent: React.FC<NavContentPropsType> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const pathname = usePathname();

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
      {navContent.map(({ title, url, isMegaMenu, MegaMenuTag, id }, index) => (
        <li key={id} className="relative">
          {isMegaMenu && MegaMenuTag ? (
            <>
              <Magnetic className="text-gray-500 hover:text-secondary duration-200 p-1 xs:p-4 whitespace-nowrap relative z-20">
                <button
                  type="button"
                  aria-label="Open the mega menu"
                  className="flex gap-2 items-center"
                  onClick={() => switchMegaMenu(index)}
                >
                  {title}
                  <FaCaretDown
                    className={` ${cn(
                      'transition',
                      index === currentIndex && 'rotate-180',
                    )}`}
                  />
                </button>
              </Magnetic>
              <MegaMenuWrapper
                index={index}
                currentIndex={currentIndex}
                closeMegaMenu={closeMegaMenu}
              >
                <MegaMenuTag closeMegaMenu={closeMegaMenu} />
              </MegaMenuWrapper>
            </>
          ) : (
            <Link href={url}>
              <Magnetic
                className={cn(
                  pathname === url
                    ? 'text-secondary font-semibold drop-shadow-lg'
                    : 'text-gray-500 hover:text-secondary ',
                  'duration-200 p-1 xs:p-4 whitespace-nowrap relative z-20',
                )}
              >
                {title}
              </Magnetic>
            </Link>
          )}
        </li>
      ))}
    </Stack>
  );
};

export default NavContent;
