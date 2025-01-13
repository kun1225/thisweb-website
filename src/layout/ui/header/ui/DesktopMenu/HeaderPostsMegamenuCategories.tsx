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
    <ul className="g-header__posts-megamenu__categories">
      {content.map((secondLevelCategory, index) => (
        <li key={secondLevelCategory.url} className="flex-shrink-0">
          {index !== 0 && <span className="mr-1 text-gray-500">·</span>}
          <Link
            tabIndex={isCanBeTabIndex ? 0 : -1}
            href={`/posts/${secondLevelCategory.url}/0`}
            className="g-header__posts-megamenu__categories__link"
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
