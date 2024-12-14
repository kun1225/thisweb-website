'use client';
// Hooks
import { useEffect, useRef } from 'react';
// Components
import MobileMenuAccordion from './MobileMenuAccordion';
import MobileMenuNormalLink from './MobileMenuNormalLink';
import MobileMenuCategoryLink from './MobileMenuCategoryLink';
// Type
import { TypeGlobalHeaderContent, TypeMegamenu } from '@/src/types/typeGlobalHeader';

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
    (item) => item._type === 'normalLink'
  );
  const categoriesContent = headerContent?.navContents.filter(
    (item): item is TypeMegamenu =>
      item._type === 'megamenu' && item.content?._type === 'postsMegamenu'
  )[0]?.content.categories;

  const main = useRef<null | HTMLElement>(null);
  const footer = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      footer.current = document.getElementById('g-footer');
      main.current = document.getElementById('main');
      main.current?.classList.toggle('blur-md', isMobileMenuOpen);
      footer.current?.classList.toggle('blur-md', isMobileMenuOpen);

      document?.body &&
        (isMobileMenuOpen
          ? (document.body.style.overflow = 'hidden')
          : (document.body.style.overflow = ''));
    }
  }, [isMobileMenuOpen]);

  return (
    <ul className="g-header__mobile-menu__content">
      {normalLinksContent
        ? normalLinksContent.map((link) => (
            <MobileMenuNormalLink key={link._key} link={link} closeMobileMenu={closeMobileMenu} />
          ))
        : null}

      {categoriesContent?.map((item) => {
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
    </ul>
  );
}
