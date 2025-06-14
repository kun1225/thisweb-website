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
        'bg-header ease-bounce-1 top-top-space-2 pointer-events-none fixed left-1/2 z-10 grid max-h-[80vh] w-4/5 origin-[70%_0%] -translate-x-1/2 grid-cols-3 overflow-auto rounded-lg p-4 shadow-[0_0_7px_rgba(0,0,0,.1)] transition xl:origin-[80%_0%]',
        index === currentIndex
          ? 'pointer-events-auto scale-100 opacity-100 duration-350'
          : 'pointer-events-none scale-50 opacity-0 duration-200'
      )}
    >
      {content.categories.map((category, i) => (
        <li
          key={category.url}
          className={cn(
            'transition-opacity delay-200 duration-300',
            index === currentIndex ? 'opacity-100' : 'opacity-0 !delay-0'
          )}
        >
          <div className="relative block h-full">
            <Link
              tabIndex={isCanBeTabIndex ? 0 : -1}
              href={`/posts/${category.url}/0`}
              className={cn(
                'relative z-10 block h-full border border-transparent p-4',
                'before:bg-blue-5 before:ease-bounce-1 before:absolute before:-inset-0 before:-z-10 before:scale-90 before:rounded-md before:border before:border-transparent before:opacity-0 before:transition before:duration-200',
                'hover:before:border-blue-4 hover:before:scale-100 hover:before:opacity-100'
              )}
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
