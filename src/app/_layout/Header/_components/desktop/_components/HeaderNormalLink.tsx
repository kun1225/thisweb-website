'use client';

// Hooks & Libs
import { usePathname } from 'next/navigation';
import { cn } from '@/src/libs/utils';
// Components
import Link from 'next/link';
// import Magnetic from '@/src/app/_components/effect/Magnetic';

export default function HeaderNormalLink({
  linkText,
  linkUrl,
  onClick,
}: {
  linkText: string;
  linkUrl: string;
  onClick: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link href={linkUrl} onClick={onClick}>
      <div
        className={cn(
          'g-header__normal-link',
          pathname === linkUrl
            ? 'text-secondary font-semibold drop-shadow-lg'
            : 'text-gray-500 hover:text-secondary ',
        )}
      >
        {linkText}
      </div>
    </Link>
  );
}
