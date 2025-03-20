// Components
import Link from 'next/link';
// Type
import { TypeNormalLink } from '@/src/types/typeGlobalHeader';

export function MobileMenuNormalLink({
  link,
  closeMobileMenu,
  index,
}: {
  link: TypeNormalLink;
  closeMobileMenu: () => void;
  index: number;
}) {
  return (
    <li className="border-blue border-b">
      <Link
        href={link.linkUrl}
        className="text-blue block py-6 font-bold"
        onClick={closeMobileMenu}
        aria-label={`前往${link.linkText}頁面`}
      >
        <span className="mr-6 font-mono text-sm">{`${index.toString().padStart(2, '0')}`}</span>
        <span>{link.linkText}</span>
      </Link>
    </li>
  );
}
