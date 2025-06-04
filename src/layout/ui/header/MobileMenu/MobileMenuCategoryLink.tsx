import Link from 'next/link';
import { TypeCategory } from '@/src/types/typeGlobalHeader';
import { getPostsUrl } from '@/src/layout/lib/getPostsUrl';

export function MobileMenuCategoryLink({
  category,
  closeMobileMenu,
  index,
}: {
  category: TypeCategory;
  closeMobileMenu: () => void;
  index: number;
}) {
  return (
    <li className="border-blue border-b">
      <Link
        href={getPostsUrl(category.url)}
        className="text-blue block py-6 font-bold"
        onClick={closeMobileMenu}
        aria-label={`前往${category.title}頁面`}
      >
        <span className="mr-6 font-mono text-sm">{`${index.toString().padStart(2, '0')}`}</span>
        <span>{category.title}</span>
      </Link>
    </li>
  );
}
