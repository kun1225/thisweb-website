'use client';
// Components
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';

// Libs
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/libs/utils';

// Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

// Types
import { CategoriesType } from '@/src/libs/sanity/type';

interface CategoryDropdownPropsType {
  categories: CategoriesType;
}

const CategoryDropdown: React.FC<CategoryDropdownPropsType> = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  });

  const decodedCategory = (() => {
    if (category) return decodeURI(category as string);
    else return '文章分類';
  })();

  return (
    <>
      {isDropdownOpen && (
        <div
          data-name="overlay"
          className="fixed left-0 right-0 top-0 h-screen w-screen"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      <div className="relative text-sm">
        <button
          className="select-none transition hover:text-primary"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p className="inline-block pr-2">{decodedCategory}</p>
          <FaCaretDown
            className={`inline-block text-inherit transition ${cn(isDropdownOpen && 'rotate-180')}`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              key="dropdown"
              className="absolute -left-2 z-20 mt-2 flex w-max flex-col overflow-hidden border-2 border-gray-200 bg-gray-50 text-gray-500 shadow-md sm:left-auto sm:right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.li
                initial={{ translateX: '50%', opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
              >
                <Link
                  href={`/posts/page/0`}
                  onClick={() => setIsDropdownOpen(false)}
                  className={`block px-4 pb-1 pt-2 transition hover:text-primary ${cn(
                    decodedCategory == '文章分類' &&
                      'pointer-events-none font-semibold text-neutral-950'
                  )}`}
                >
                  全部文章
                </Link>
              </motion.li>
              {categories.map(({ title }, index) => (
                <motion.li
                  key={title}
                  className="last-of-type:pb-2"
                  initial={{ translateX: '50%', opacity: 0 }}
                  animate={{ translateX: 0, opacity: 1 }}
                  transition={{ delay: (index + 1) / 20 }}
                >
                  <Link
                    href={`/posts/${title}/0`}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 pb-1 pt-2 transition hover:text-primary ${cn(
                      decodedCategory == title &&
                        'pointer-events-none font-semibold text-neutral-950'
                    )}`}
                  >
                    {title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CategoryDropdown;
