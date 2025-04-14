import Link from 'next/link';
import { TypeSecondLevelCategory } from '@/src/types/typeGlobalHeader';

export function HeaderPostsMegamenuCategories({
  content,
  isCanBeTabIndex,
  closeMegaMenu,
}: {
  content: TypeSecondLevelCategory[];
  isCanBeTabIndex: boolean;
  closeMegaMenu: () => void;
}) {
  return (
    <ul className="g-header__posts-megamenu__categories absolute bottom-2 left-0 z-10 mx-4 flex gap-1 overflow-y-auto py-2 text-gray-600 select-none">
      {content.map((secondLevelCategory, index) => (
        <li key={secondLevelCategory.url} className="flex-shrink-0">
          {index !== 0 && <span className="mr-1 text-gray-500">·</span>}
          <Link
            tabIndex={isCanBeTabIndex ? 0 : -1}
            href={`/posts/${secondLevelCategory.url}/0`}
            className="g-header__posts-megamenu__categories__link hover:bg-blue-1 bg-gray inline-block rounded-full px-2.5 py-1 text-xs transition hover:text-white"
            title={secondLevelCategory.title}
            onClick={closeMegaMenu}
          >
            {secondLevelCategory.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
