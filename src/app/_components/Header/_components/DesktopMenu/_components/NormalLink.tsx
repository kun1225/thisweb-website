'use client';

// Hooks & Libs
import { usePathname } from 'next/navigation';
import { cn } from '@/src/libs/utils';
// Components
import Link from 'next/link';
import Magnetic from '@/src/app/_components/effect/Magnetic';

export default function NormalLink({
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
      <Magnetic
        className={cn(
          pathname === linkUrl
            ? 'text-secondary font-semibold drop-shadow-lg'
            : 'text-gray-500 hover:text-secondary ',
          'duration-200 p-1 xs:p-4 whitespace-nowrap relative z-20',
        )}
      >
        {linkText}
      </Magnetic>
    </Link>
  );
}
