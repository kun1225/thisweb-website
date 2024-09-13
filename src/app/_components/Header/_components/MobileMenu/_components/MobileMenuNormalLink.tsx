// Components
import Link from 'next/link';
// Type
import { TypeNormalLink } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function MobileMenuNormalLink({
  link,
  closeMobileMenu,
}: {
  link: TypeNormalLink;
  closeMobileMenu: () => void;
}) {
  return (
    <li className="py-2 border-b-[1.5px] border-primary">
      <Link
        href={link.linkUrl}
        className="block p-[2vw] font-semibold"
        onClick={closeMobileMenu}
        aria-label={`前往${link.linkText}頁面`}
      >
        {link.linkText}
        <span className="sr-only">前往{link.linkText}頁面</span>
      </Link>
    </li>
  );
}
