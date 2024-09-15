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
        'g-header__posts-megamenu',
        index === currentIndex
          ? 'translate-y-0 opacity-100 pointer-events-auto blur-0'
          : 'translate-y-10 opacity-0 pointer-events-none blur-md',
      )}
    >
      {content.categories.map((category) => (
        <li key={category.url} className="rounded-md">
          <div className="block relative h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className="g-header__posts-megamenu__link "
              title={category.title}
              onClick={closeMegaMenu}
            >
              <h3 className="text-xl font-bold mb-1">{category.title}</h3>
              <p className="text-sm mb-14">{category.description}</p>
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
