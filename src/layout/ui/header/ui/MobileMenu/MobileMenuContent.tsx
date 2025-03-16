'use client';

// Hooks & Libs
import { useEffect } from 'react';
import Link from 'next/link';
// Type
import {
  TypeGlobalHeaderContent,
  TypeMegamenu,
  TypeNormalLink,
} from '@/src/types/typeGlobalHeader';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
// Components
import { MobileMenuAccordion } from './MobileMenuAccordion';
import { MobileMenuCategoryLink } from './MobileMenuCategoryLink';
import { MobileMenuNormalLink } from './MobileMenuNormalLink';

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

  return (
    <ul className="mt-6 flex h-full flex-col overflow-y-auto px-4 pt-[var(--header-height)] pb-4 text-blue-600">
      {hasArrayValue(normalLinksContent)
        ? normalLinksContent?.map((link) => (
            <MobileMenuNormalLink key={link._key} link={link} closeMobileMenu={closeMobileMenu} />
          ))
        : null}

      {hasArrayValue(categoriesContent) &&
        categoriesContent?.map((item) => {
          if (item.secondLevelCategories)
            return (
              <MobileMenuAccordion
                key={item.title}
                category={item}
                closeMobileMenu={closeMobileMenu}
              />
            );

          if (!item.secondLevelCategories) {
            return (
              <MobileMenuCategoryLink
                key={item.title}
                category={item}
                closeMobileMenu={closeMobileMenu}
              />
            );
          }

          return null;
        })}

      {hasArrayValue(buttonLinksContent) &&
        buttonLinksContent?.map((link) => (
          <li className="mt-4" key={link._key}>
            <Button asChild variant="dark">
              <Link
                href={link.linkUrl}
                onClick={closeMobileMenu}
                aria-label={`前往${link.linkText}頁面`}
                className="w-full"
              >
                {link.linkText}
                <span className="sr-only">前往{link.linkText}頁面</span>
              </Link>
            </Button>
          </li>
        ))}
    </ul>
  );
}
