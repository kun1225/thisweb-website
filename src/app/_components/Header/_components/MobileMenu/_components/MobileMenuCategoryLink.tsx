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
    <li className="py-2 border-b-[1.5px] border-primary">
      <Link
        href={getPostsUrl(category.url)}
        className="block p-[2vw] font-semibold"
        onClick={closeMobileMenu}
        aria-label={`前往${category.title}頁面`}
      >
        {category.title}
        <span className="sr-only">前往{category.title}頁面</span>
      </Link>
    </li>
  );
}
