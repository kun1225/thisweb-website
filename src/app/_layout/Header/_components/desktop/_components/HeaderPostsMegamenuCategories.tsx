import Link from 'next/link';
import { TypeSecondLevelCategory } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function HeaderPostsMegamenuCategories({
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
          {index !== 0 && <span className="text-gray-500">·</span>}
          <Link
            tabIndex={isCanBeTabIndex ? 0 : -1}
            href={`/posts/${secondLevelCategory.url}/0`}
            className="inline-block py-1 px-2 text-xs rounded-full transition bg-gray-200 hover:bg-secondary hover:text-white"
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
