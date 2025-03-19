// Components
import Link from 'next/link';
// Types
import { TypePostsMegamenu } from '@/src/types/typeGlobalHeader';
import { cn } from '@/src/shared/lib/utils';
import { HeaderPostsMegamenuCategories } from './HeaderPostsMegamenuCategories';

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
      className={cn(
        'bg-header pointer-events-none fixed top-[calc(var(--header-height)_+_16px)] left-1/2 z-10 grid max-h-[80vh] w-4/5 -translate-x-1/2 grid-cols-3 overflow-auto rounded-md p-4 shadow-[0_0_28px_rgba(0,0,0,.1)] transition duration-300',
        index === currentIndex
          ? 'pointer-events-auto scale-100 opacity-100'
          : 'pointer-events-none scale-50 opacity-0'
      )}
    >
      {content.categories.map((category, i) => (
        <li
          key={category.url}
          className={cn(
            'transition-opacity duration-[0.4s]',
            index === currentIndex ? 'opacity-100' : 'opacity-0 !delay-0'
          )}
          style={{
            transitionDelay: `${(i - 1) * 100 + 150}ms`,
          }}
        >
          <div className="relative block h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className="hover:bg-blue-5 hover:border-blue-4 block h-full rounded-md border border-transparent p-4 transition duration-200"
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
