import Link from 'next/link';
import { SecondLevelCategoriesType } from '@/lib/sanity/type';

const SecondLevelCategories = ({
  content,
  closeMegaMenu,
}: {
  content: SecondLevelCategoriesType;
  closeMegaMenu: () => void;
}) => {
  return (
    <ul className="second-level-categories absolute bottom-0 left-0 mx-edge-xs py-2 flex overflow-y-auto text-gray-600">
      {content.map((secondLevelCategory, index) => (
        <li key={secondLevelCategory._id} className="flex-shrink-0">
          {index !== 0 && <span className="text-gray-500">·</span>}
          <Link
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
};

export default SecondLevelCategories;
