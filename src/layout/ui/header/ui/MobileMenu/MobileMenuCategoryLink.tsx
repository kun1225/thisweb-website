// Libs
// Components
import Link from 'next/link';
// Type
import { TypeCategory } from '@/src/types/typeGlobalHeader';
import { getPostsUrl } from '../../../../lib/getPostsUrl';

export function MobileMenuCategoryLink({
  category,
  closeMobileMenu,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
}) {
  return (
    <li>
      <Link
        href={getPostsUrl(category.url)}
        className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-blue-800"
        onClick={closeMobileMenu}
        aria-label={`前往${category.title}頁面`}
      >
        {category.title}
        <span className="sr-only">前往{category.title}頁面</span>
      </Link>
    </li>
  );
}
