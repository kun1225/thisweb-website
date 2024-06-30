'use client';
// Hooks
import { useEffect, useState } from 'react';
import useWindowWidth from '@/app/_hook/useWindowWidth';

// Components
import Link from 'next/link';
import Skeleton from '../../../Skeleton';
import SecondLevelCategories from './SecondLevelCategories';

// Type
import { CategoriesType } from '@/lib/sanity/type';

// Libs
import postClassificationAction from '../../_action/postClassificationAction';

interface PostsMegaMenuPropsType {
  closeMegaMenu: () => void;
}

const PostsMegaMenu: React.FC<PostsMegaMenuPropsType> = ({ closeMegaMenu }) => {
  const [megaMenuContent, setMegaMenuContent] = useState<CategoriesType>();
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useWindowWidth();

  useEffect(() => {
    if (!isMobile && !megaMenuContent) {
      postClassificationAction().then((data) => {
        setMegaMenuContent(data);
        setIsLoading(false);
      });
    }
  }, [isMobile]);

  return (
    <ul className="grid grid-cols-3 grid-flow-row gap-[1vw]">
      {isLoading
        ? Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="col-span-1 h-[20vh]" />
          ))
        : megaMenuContent?.map(
            (category) =>
              category.description && (
                <li
                  key={category._id}
                  className="posts-mega-menu-item rounded-md "
                >
                  <div className="block mb-[-2vw]" onClick={closeMegaMenu}>
                    <Link
                      href={`/posts/${category.url}/0`}
                      className="block p-edge-xs pb-[4vw] transition hover:bg-gray-100"
                    >
                      <h3 className="text-xl font-bold mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm mb-2">{category.description}</p>
                    </Link>

                    {category.secondLevelCategory && (
                      <SecondLevelCategories
                        content={category.secondLevelCategory}
                      />
                    )}
                  </div>
                </li>
              ),
          )}
    </ul>
  );
};

export default PostsMegaMenu;
