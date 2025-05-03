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
        'bg-header ease-bounce-1 pointer-events-none fixed top-[calc(var(--header-height)_+_16px)] left-1/2 z-10 grid max-h-[80vh] w-4/5 origin-[70%_0%] -translate-x-1/2 grid-cols-3 overflow-auto rounded-lg p-4 shadow-[0_0_7px_rgba(0,0,0,.1)] transition xl:origin-[80%_0%]',
        index === currentIndex
          ? 'pointer-events-auto scale-100 opacity-100 duration-350'
          : 'pointer-events-none scale-50 opacity-0 duration-200'
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
              className="before:bg-blue-5 before:border-blue-4 before:ease-bounce-1 relative z-10 block h-full border border-transparent p-4 before:absolute before:-inset-0 before:-z-10 before:scale-75 before:rounded-md before:border before:opacity-0 before:transition before:duration-250 hover:before:scale-100 hover:before:opacity-100"
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
