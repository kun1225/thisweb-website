// Libs
import { getPostsUrl } from '../../../../lib/getPostsUrl';
// Components
import Link from 'next/link';
// Type
import { TypeCategory } from '@/src/types/typeGlobalHeader';

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
        className="g-header__mobile-menu__link"
        onClick={closeMobileMenu}
        aria-label={`前往${category.title}頁面`}
      >
        {category.title}
        <span className="sr-only">前往{category.title}頁面</span>
      </Link>
    </li>
  );
}
