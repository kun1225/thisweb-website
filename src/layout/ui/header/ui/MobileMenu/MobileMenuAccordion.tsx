// Libs
// Components
import Link from 'next/link';
// Types
import { TypeCategory } from '@/src/types/typeGlobalHeader';
import { Accordion, AccordionContent, AccordionTitle } from '@/src/shared/ui/Accordion';
import { getPostsUrl } from '../../../../lib/getPostsUrl';

export function MobileMenuAccordion({
  category,
  closeMobileMenu,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
}) {
  return (
    <li className="mb-2">
      <Accordion iconPosition="right" initExpanded={false}>
        <AccordionTitle className="items-center">
          <Link
            className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-blue-800"
            href={getPostsUrl(category.url)}
            aria-label={`前往${category.title}頁面`}
            onClick={closeMobileMenu}
          >
            {category.title}
            <span className="sr-only">前往{category.title}頁面</span>
          </Link>
        </AccordionTitle>
        <AccordionContent>
          <ul className="mt-1 mb-2 space-y-2 pl-4">
            {category.secondLevelCategories
              ? category.secondLevelCategories.map((secondLevelCategory) => (
                  <li key={secondLevelCategory.title}>
                    <Link
                      className="block py-2 text-base transition-colors duration-200 hover:text-blue-800"
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
