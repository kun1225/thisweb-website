// Libs
import { getPostsUrl } from '../../../../lib/getPostsUrl';
// Components
import Link from 'next/link';
import { Accordion, AccordionTitle, AccordionContent } from '@/src/shared/ui/Accordion';
// Types
import { TypeCategory } from '@/src/types/typeGlobalHeader';

export function MobileMenuAccordion({
  category,
  closeMobileMenu,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
}) {
  return (
    <li className="g-header__mobile-menu__accordion">
      <Accordion iconPosition="right" initExpanded={false}>
        <AccordionTitle className="items-center">
          <Link
            className="g-header__mobile-menu__accordion__link"
            href={getPostsUrl(category.url)}
            aria-label={`前往${category.title}頁面`}
            onClick={closeMobileMenu}
          >
            {category.title}
            <span className="sr-only">前往{category.title}頁面</span>
          </Link>
        </AccordionTitle>
        <AccordionContent>
          <ul className="g-header__mobile-menu__accordion__list">
            {category.secondLevelCategories
              ? category.secondLevelCategories.map((secondLevelCategory) => (
                  <li key={secondLevelCategory.title}>
                    <Link
                      className="block"
                      href={getPostsUrl(secondLevelCategory.url)}
                      aria-label={`前往${secondLevelCategory.title}頁面`}
                      onClick={closeMobileMenu}
                    >
                      {secondLevelCategory.title}
                      <span className="sr-only">前往{category.title}頁面</span>
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </AccordionContent>
      </Accordion>
    </li>
  );
}
