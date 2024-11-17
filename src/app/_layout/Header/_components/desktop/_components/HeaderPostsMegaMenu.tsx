import { cn } from '@/src/libs/utils';
// Components
import Link from 'next/link';
import HeaderPostsMegamenuCategories from './HeaderPostsMegamenuCategories';
// Types
import { TypePostsMegamenu } from '@/src/types/typeGlobalHeader';

export default function HeaderPostsMegaMenu({
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
    <ul
      className={cn('g-header__posts-megamenu', {
        'is-active': index === currentIndex,
      })}
    >
      {content.categories.map((category) => (
        <li key={category.url} className="g-header__posts-megamenu__item">
          <div className="block relative h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className="g-header__posts-megamenu__link "
              title={category.title}
              onClick={closeMegaMenu}
            >
              <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
              <p className="text-sm mb-14">{category.description}</p>
            </Link>

            {category.secondLevelCategories ? (
              <HeaderPostsMegamenuCategories
                isCanBeTabIndex={isCanBeTabIndex}
                content={category.secondLevelCategories}
                closeMegaMenu={closeMegaMenu}
              />
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
