import { cn } from '@/src/libs/utils';
// Components
import Link from 'next/link';
import SecondLevelCategories from './SecondLevelCategories';
// Types
import { TypePostsMegamenu } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function PostsMegaMenu({
  content,
  index,
  currentIndex,
  closeMegaMenu,
}: {
  content: TypePostsMegamenu;
  index: number;
  currentIndex: number;
  closeMegaMenu: () => void;
}) {
  const isCanBeTabIndex = index === currentIndex;

  return (
    <div
      className={cn(
        'c grid grid-cols-3 fixed top-[120%] right-8 left-8 p-4 rounded-xl bg-pure-white shadow-2xl transition duration-300 z-10',
        index === currentIndex
          ? 'translate-y-0 opacity-100 pointer-events-auto blur-0'
          : 'translate-y-10 opacity-0 pointer-events-none blur-md',
      )}
    >
      {content.categories.map((category) => (
        <li key={category.url} className="posts-mega-menu-item rounded-md ">
          <div className="block relative h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className="block h-full p-edge-xs pb-8 transition hover:bg-gray-100"
              title={category.title}
              onClick={closeMegaMenu}
            >
              <h3 className="text-xl font-bold mb-1">{category.title}</h3>
              <p className="text-sm mb-4">{category.description}</p>
            </Link>

            {category.secondLevelCategories ? (
              <SecondLevelCategories
                isCanBeTabIndex={isCanBeTabIndex}
                content={category.secondLevelCategories}
                closeMegaMenu={closeMegaMenu}
              />
            ) : null}
          </div>
        </li>
      ))}
    </div>
  );
}
