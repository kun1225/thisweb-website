'use client';
// Hooks & Libs
import { useEffect } from 'react';
import { hasArrayValue } from '@/src/libs/utils';
// Components
import MobileMenuAccordion from './MobileMenuAccordion';
import MobileMenuNormalLink from './MobileMenuNormalLink';
import MobileMenuCategoryLink from './MobileMenuCategoryLink';
import { Button } from '@/src/app/_components/Button';
// Type
import {
  TypeGlobalHeaderContent,
  TypeMegamenu,
  TypeNormalLink,
} from '@/src/types/typeGlobalHeader';
import Link from 'next/link';

export default function MobileMenuContent({
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
    <ul className="g-header__mobile-menu__content">
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
          <Button asChild key={link._key} variant="dark">
            <li className="g-header__mobile-menu__button">
              <Link
                href={link.linkUrl}
                onClick={closeMobileMenu}
                aria-label={`前往${link.linkText}頁面`}
              >
                {link.linkText}
                <span className="sr-only">前往{link.linkText}頁面</span>
              </Link>
            </li>
          </Button>
        ))}
    </ul>
  );
}
