import Link from 'next/link';
import { TypeCategory } from '@/src/types/typeGlobalHeader';
import { Accordion, AccordionContent, AccordionTitle } from '@/src/shared/ui/Accordion';
import { getPostsUrl } from '@/src/layout/lib/getPostsUrl';

export function MobileMenuAccordion({
  category,
  closeMobileMenu,
  index,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
  index: number;
}) {
  return (
    <li className="border-blue border-b">
      <Accordion iconPosition="right" initExpanded={false}>
        <AccordionTitle className="items-center">
          <Link
            className="text-blue block py-6 font-bold"
            href={getPostsUrl(category.url)}
            aria-label={`前往${category.title}頁面`}
            onClick={closeMobileMenu}
          >
            <span className="mr-6 font-mono text-sm">{`${index.toString().padStart(2, '0')}`}</span>
            <span>{category.title}</span>
          </Link>
        </AccordionTitle>
        <AccordionContent>
          <ul className="mb-4 pl-4 text-lg">
            {category.secondLevelCategories
              ? category.secondLevelCategories.map((secondLevelCategory) => (
                  <li key={secondLevelCategory.title}>
                    <Link
                      className="block py-4 transition-colors duration-200"
                      href={getPostsUrl(secondLevelCategory.url)}
                      aria-label={`前往${secondLevelCategory.title}頁面`}
                      onClick={closeMobileMenu}
                    >
                      {secondLevelCategory.title}
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
