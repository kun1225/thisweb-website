'use client';
// Hooks
import { useEffect, useState, useRef } from 'react';

// Components
import Link from 'next/link';
import {
  Accordion,
  AccordionTitle,
  AccordionContent,
} from '../../../Accordion';

// Type
import { CategoriesType } from '@/lib/sanity/type';

// Libs
import postClassificationAction from '../../_action/postClassificationAction';

// Data
import { navContent } from '../../navContent';

interface MobileMenuContentPropsType {
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const MobileMenuContent: React.FC<MobileMenuContentPropsType> = ({
  closeMobileMenu,
  isMobileMenuOpen,
}) => {
  const [megaMenuContent, setMegaMenuContent] = useState<CategoriesType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  const main = useRef<null | HTMLElement>(null);

  if (typeof window != 'undefined') {
    main.current = document.getElementById('main');
    main.current?.classList.toggle('is-blur', isMobileMenuOpen);
    document?.body &&
      (isMobileMenuOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = ''));
  }

  useEffect(() => {
    if (!megaMenuContent) {
      postClassificationAction().then((data) => {
        setMegaMenuContent(data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <ul className="c flex flex-col h-full py-4 text-body text-primary overflow-y-auto">
      {navContent &&
        navContent.map((nav) => {
          return (
            !nav.isMegaMenu && (
              <li key={nav.title} className="py-2 border-b-[1.5px] border-primary">
                <Link
                  href={nav.url}
                  className="block p-[2vw]"
                  onClick={closeMobileMenu}
                >
                  {nav.title}
                </Link>
              </li>
            )
          );
        })}
      {megaMenuContent ? (
        megaMenuContent.map((category) => {
          return category.secondLevelCategory ? (
            <li key={category._id} className="py-2 border-b-[1.5px] border-primary">
              <Accordion iconPosition="right" initExpanded={false}>
                <AccordionTitle className="items-center">
                  <Link
                    href={`/posts/${category.title}/0`}
                    className="block p-[2vw]"
                    onClick={closeMobileMenu}
                  >
                    {category.title}
                  </Link>
                </AccordionTitle>
                <AccordionContent>
                  <ul className="flex flex-col pl-6 mt-2 pb-2 gap-2">
                    {category.secondLevelCategory &&
                      category.secondLevelCategory.map(
                        (secondLevelCategory) => (
                          <li key={secondLevelCategory._id}>
                            <Link
                              href={`/posts/${secondLevelCategory.title}/0`}
                              className="block"
                              onClick={closeMobileMenu}
                            >
                              {secondLevelCategory.title}
                            </Link>
                          </li>
                        ),
                      )}
                  </ul>
                </AccordionContent>
              </Accordion>
            </li>
          ) : (
            <li className="py-2 border-b-[1.5px] border-primary">
              <Link
                href={`/posts/${category.title}/0`}
                className="block p-[2vw]"
                onClick={closeMobileMenu}
              >
                {category.title}
              </Link>
            </li>
          );
        })
      ) : (
        <div></div>
      )}
    </ul>
  );
};

export default MobileMenuContent;
