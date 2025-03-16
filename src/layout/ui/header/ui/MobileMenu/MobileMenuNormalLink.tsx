// Components
import Link from 'next/link';
// Type
import { TypeNormalLink } from '@/src/types/typeGlobalHeader';

export function MobileMenuNormalLink({
  link,
  closeMobileMenu,
}: {
  link: TypeNormalLink;
  closeMobileMenu: () => void;
}) {
  return (
    <li>
      <Link
        href={link.linkUrl}
        className="block py-3 text-lg font-medium transition-colors duration-200 hover:text-blue-800"
        onClick={closeMobileMenu}
        aria-label={`前往${link.linkText}頁面`}
      >
        {link.linkText}
        <span className="sr-only">前往{link.linkText}頁面</span>
      </Link>
    </li>
  );
}
