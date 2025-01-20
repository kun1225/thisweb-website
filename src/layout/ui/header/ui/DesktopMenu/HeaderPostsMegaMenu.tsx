import { cn } from '@/src/shared/lib/utils';
// Components
import Link from 'next/link';
import { HeaderPostsMegamenuCategories } from './HeaderPostsMegamenuCategories';
// Types
import { TypePostsMegamenu } from '@/src/types/typeGlobalHeader';

export function HeaderPostsMegaMenu({
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
          <div className="relative block h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className="g-header__posts-megamenu__link"
              title={category.title}
              onClick={closeMegaMenu}
            >
              <h3 className="mb-1 text-xl font-semibold">{category.title}</h3>
              <p className="mb-24 text-sm">{category.description}</p>
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
