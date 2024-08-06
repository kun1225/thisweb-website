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

  const main = useRef<null | HTMLElement>(null);
  const footer = useRef<null | HTMLElement>(null);

  if (typeof window !== 'undefined') {
    footer.current = document.getElementById('g-footer');
    main.current = document.getElementById('g-main');
    main.current?.classList.toggle('is-blur', isMobileMenuOpen);
    footer.current?.classList.toggle('is-blur', isMobileMenuOpen);

    document?.body &&
      (isMobileMenuOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = ''));
  }

  useEffect(() => {
    if (!megaMenuContent) {
      postClassificationAction().then((data) => {
        setMegaMenuContent(data);
      });
    }
  });

  const getPostsUrl = (url: string) => `/posts/${url}/0`;

  return (
    <ul className="c flex flex-col h-full py-4 text-body text-primary overflow-y-auto">
      {navContent
        ? navContent.map((nav) => {
            return (
              !nav.isMegaMenu && (
                <li
                  key={nav.id}
                  className="py-2 border-b-[1.5px] border-primary"
                >
                  <Link
                    href={nav.url}
                    className="font-semibold block p-[2vw]"
                    onClick={closeMobileMenu}
                  >
                    {nav.title}
                  </Link>
                </li>
              )
            );
          })
        : null}
      {megaMenuContent
        ? megaMenuContent.map((category) => {
            return category.secondLevelCategory ? (
              <li
                key={category._id}
                className="py-2 border-b-[1.5px] border-primary"
              >
                <Accordion iconPosition="right" initExpanded={false}>
                  <AccordionTitle className="items-center">
                    <Link
                      href={getPostsUrl(category.url)}
                      className="font-semibold block p-[2vw]"
                      onClick={closeMobileMenu}
                    >
                      {category.title}
                    </Link>
                  </AccordionTitle>
                  <AccordionContent>
                    <ul className="flex flex-col pl-6 mt-2 pb-2 gap-2">
                      {category.secondLevelCategory
                        ? category.secondLevelCategory.map(
                            (secondLevelCategory) => (
                              <li key={secondLevelCategory._id}>
                                <Link
                                  href={getPostsUrl(secondLevelCategory.url)}
                                  className="block"
                                  onClick={closeMobileMenu}
                                >
                                  {secondLevelCategory.title}
                                </Link>
                              </li>
                            ),
                          )
                        : null}
                    </ul>
                  </AccordionContent>
                </Accordion>
              </li>
            ) : (
              <li
                key={category._id}
                className="py-2 border-b-[1.5px] border-primary"
              >
                <Link
                  href={getPostsUrl(category.url)}
                  className="font-semibold block p-[2vw]"
                  onClick={closeMobileMenu}
                >
                  {category.title}
                </Link>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default MobileMenuContent;
