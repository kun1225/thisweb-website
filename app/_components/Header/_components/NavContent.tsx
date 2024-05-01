'use client';

// Hooks
import { useState, useEffect } from 'react';

// Components
import Link from 'next/link';
import Magnetic from '../../effect/Magnetic';
import Stack from '../../Stack';
import { FaCaretDown } from 'react-icons/fa6';
import MegaMenuWrapper from './MegaMenuWrapper';
import PostsMegaMenu from './PostsMegaMenu';

// Libs
import { cn } from '@/lib/utils';

type navContentType = {
  title: string;
  url: string;
  isMegaMenu: boolean;
  MegaMenuTag?: React.FC<any>;
};

export const navContent: navContentType[] = [
  {
    title: '主頁',
    url: '/',
    isMegaMenu: false,
  },
  {
    title: '全部文章',
    url: '/posts/page/0',
    isMegaMenu: false,
  },
  {
    title: '文章分類',
    url: '/posts/page/0',
    isMegaMenu: true,
    MegaMenuTag: PostsMegaMenu,
  },
];

const NavContent = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const switchMegaMenu = (index: number) => {
    if (index === currentIndex) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(index);
    }
  };

  const closeMegaMenu = () => {
    setCurrentIndex(-1);
  };

  return (
    <Stack as="ul" className="text-sm">
      {navContent.map(({ title, url, isMegaMenu, MegaMenuTag }, index) => (
        <li key={url} className="relative">
          {isMegaMenu && MegaMenuTag ? (
            <>
              <Magnetic className="text-gray-500 hover:text-secondary duration-200 p-1 xs:p-4 whitespace-nowrap">
                <button
                  className="flex gap-2 items-center"
                  onClick={() => switchMegaMenu(index)}
                >
                  {title}{' '}
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
              <Magnetic className="text-gray-500 hover:text-secondary duration-200 p-1 xs:p-4 whitespace-nowrap">
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
