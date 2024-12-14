'use client';

// Hooks & Libs
import { usePathname } from 'next/navigation';
import { cn } from '@/src/libs/utils';
// Components
import Link from 'next/link';
import { Button } from '@/src/app/_components/Button';
// Types
import type { TypeNormalLink } from '@/src/types/typeGlobalHeader';

export default function HeaderNormalLink({
  item,
  onClick,
}: {
  item: TypeNormalLink;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const { linkText, linkUrl, isButton } = item;

  let className;
  if (pathname === linkUrl) {
    className = 'text-secondary font-semibold drop-shadow-md';
  } else if (isButton) {
    className = '';
  } else {
    className = 'text-gray-500 hover:text-secondary';
  }

  return (
    <Comp isButton={isButton}>
      <Link
        href={linkUrl}
        onClick={onClick}
        className={cn('g-header__normal-link', className, isButton && 'is-button')}
      >
        {linkText}
      </Link>
    </Comp>
  );
}

function Comp({ isButton, children }: { isButton?: boolean; children: React.ReactNode }) {
  return isButton ? (
    <Button asChild size="sm" variant="dark">
      {children}
    </Button>
  ) : (
    <>{children}</>
  );
}
