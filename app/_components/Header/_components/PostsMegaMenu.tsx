'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Skeleton from '../../Skeleton';

import { CategoriesType } from '@/lib/sanity/type';

import postClassificationAction from '../_action/postClassificationAction';

interface PostsMegaMenuPropsType {
  closeMegaMenu: () => void;
}

const PostsMegaMenu: React.FC<PostsMegaMenuPropsType> = ({ closeMegaMenu }) => {
  const [megaMenuContent, setMegaMenuContent] = useState<CategoriesType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postClassificationAction().then((data) => {
      setMegaMenuContent(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <ul className="grid grid-cols-3 grid-flow-row gap-[1vw]">
      {isLoading ? (
        <>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton className="col-span-1 h-[30vh]" />
        ))}
        </>
      ) : (
        <>
          {megaMenuContent?.map((category) => (
            <>
              {category.description && (
                <li
                  key={category._id}
                  className="transition rounded-md hover:bg-gray-100"
                >
                  <Link
                    href={`/posts/${category.title}/0`}
                    className="block p-[2vw]"
                    onClick={closeMegaMenu}
                  >
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm mb-2">{category.description}</p>
                    {category.secondLevelCategory && (
                      <ul className="scrollbar-hidden flex overflow-y-auto text-gray-600">
                        {category.secondLevelCategory.map(
                          (secondLevelCategory, index) => (
                            <li
                              key={secondLevelCategory.title}
                              className="flex-shrink-0"
                            >
                              {index !== 0 && (
                                <span className="text-gray-500">·</span>
                              )}
                              <Link
                                href={`/posts/${secondLevelCategory.title}/0`}
                                className="inline-block py-1 px-2 text-xs rounded-full transition bg-gray-200 hover:bg-secondary hover:text-white"
                                onClick={closeMegaMenu}
                              >
                                {secondLevelCategory.title}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </Link>
                </li>
              )}
            </>
          ))}
        </>
      )}
    </ul>
  );
};

export default PostsMegaMenu;
