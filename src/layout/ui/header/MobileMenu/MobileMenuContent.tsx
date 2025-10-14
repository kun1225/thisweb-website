'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/src/shared/lib/utils';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
// Components
import { MobileMenuAccordion } from './MobileMenuAccordion';
import { MobileMenuCategoryLink } from './MobileMenuCategoryLink';
import { MobileMenuNormalLink } from './MobileMenuNormalLink';
import {
  TypeGlobalHeaderContent,
  TypeMegamenu,
  TypeNormalLink,
} from '@/src/types/typeGlobalHeader';

export function MobileMenuContent({
  headerContent,
  closeMobileMenu,
  isMobileMenuOpen,
}: {
  headerContent: TypeGlobalHeaderContent;
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}) {
  const normalLinksContent = headerContent?.navContents.filter(
    (item) => item._type === 'normalLink' && !item.isButton
  ) as TypeNormalLink[];

  const buttonLinksContent = headerContent?.navContents.filter(
    (item) => item._type === 'normalLink' && item.isButton === true
  ) as TypeNormalLink[];

  const categoriesContent = headerContent?.navContents.filter(
    (item): item is TypeMegamenu =>
      item._type === 'megamenu' && item.content?._type === 'postsMegamenu'
  )[0]?.content.categories;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('is-mobile-menu-open', isMobileMenuOpen);
      document.body.classList.toggle('overflow-hidden', isMobileMenuOpen);
    }
  }, [isMobileMenuOpen]);

  let index = 0;

  return (
    <div
      className={cn(
        'border-blue-4 ease-circ-in-out fixed top-0 left-0 -z-10 h-svh w-full bg-white transition-all',
        isMobileMenuOpen
          ? 'duration-650 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]'
          : 'duration-400 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]'
      )}
    >
      <ul
        className={cn(
          'c mt-top-space-4 flex h-full flex-col overflow-y-auto pb-[calc(var(--header-height)*2)] text-xl ease-linear',
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100 duration-500'
            : 'pointer-events-none opacity-0 duration-300'
        )}
      >
        {hasArrayValue(normalLinksContent)
          ? normalLinksContent?.map((link) => {
              index++;
              return (
                <MobileMenuNormalLink
                  key={link._key}
                  link={link}
                  closeMobileMenu={closeMobileMenu}
                  index={index}
                />
              );
            })
          : null}

        {hasArrayValue(categoriesContent) &&
          categoriesContent?.map((item) => {
            index++;
            if (item.secondLevelCategories)
              return (
                <MobileMenuAccordion
                  key={item.title}
                  category={item}
                  closeMobileMenu={closeMobileMenu}
                  index={index}
                />
              );

            if (!item.secondLevelCategories) {
              return (
                <MobileMenuCategoryLink
                  key={item.title}
                  category={item}
                  closeMobileMenu={closeMobileMenu}
                  index={index}
                />
              );
            }

            return null;
          })}

        {hasArrayValue(buttonLinksContent) &&
          buttonLinksContent?.map((link) => (
            <li className="mt-12" key={link._key}>
              <Button asChild variant="dark" className="w-full text-xl">
                <Link
                  href={link.linkUrl}
                  onClick={closeMobileMenu}
                  aria-label={`前往${link.linkText}頁面`}
                >
                  {link.linkText}
                </Link>
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
}
