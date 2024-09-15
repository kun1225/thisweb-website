// Libs
import { getPostsUrl } from '../lib';
// Components
import Link from 'next/link';
// Type
import { TypeCategory } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function MobileMenuCategoryLink({
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
