// Components
import Link from 'next/link';
// Type
import { TypeNormalLink } from '@/src/types/typeGlobalHeader';

export default function MobileMenuNormalLink({
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
        className="g-header__mobile-menu__link"
        onClick={closeMobileMenu}
        aria-label={`前往${link.linkText}頁面`}
      >
        {link.linkText}
        <span className="sr-only">前往{link.linkText}頁面</span>
      </Link>
    </li>
  );
}
