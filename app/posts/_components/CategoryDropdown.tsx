'use client';
// Components
import { FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';

// Libs
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

// Types
import { categoriesType } from '@/lib/sanity/type';

interface CategoryDropdownPropsType {
  categories: categoriesType;
}

const CategoryDropdown: React.FC<CategoryDropdownPropsType> = ({
  categories,
}) => {
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
          className="fixed top-0 left-0 right-0 w-screen h-screen"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
      <div className="relative text-sm">
        <button
          className="transition hover:text-primary select-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <p className="inline-block pr-2">{decodedCategory}</p>
          <FaCaretDown
            className={`inline-block text-inherit transition ${cn(
              isDropdownOpen && 'rotate-180',
            )}`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              key="dropdown"
              className="absolute -left-2 z-20 overflow-hidden w-max flex flex-col mt-2 text-gray-500 shadow-md bg-gray-50 border-2 border-gray-200"
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
                      'font-semibold pointer-events-none text-neutral-950',
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
                        'font-semibold pointer-events-none text-neutral-950',
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
