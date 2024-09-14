// Libs
import { getPostsUrl } from '../lib';
// Components
import Link from 'next/link';
import {
  Accordion,
  AccordionTitle,
  AccordionContent,
} from '@/src/app/_components/Accordion';
// Types
import { TypeCategory } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function MobileMenuAccordion({
  category,
  closeMobileMenu,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
}) {
  return (
    <li className="py-2 border-b-[1.5px] border-primary">
      <Accordion iconPosition="right" initExpanded={false}>
        <AccordionTitle className="items-center">
          <Link
            className="block p-[2vw] font-semibold "
            href={getPostsUrl(category.url)}
            aria-label={`前往${category.title}頁面`}
            onClick={closeMobileMenu}
          >
            {category.title}
            <span className="sr-only">前往{category.title}頁面</span>
          </Link>
        </AccordionTitle>
        <AccordionContent>
          <ul className="flex flex-col pl-6 mt-2 pb-2 gap-2">
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
