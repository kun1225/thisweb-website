'use client';

// Hooks & Libs
// Components
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Types
import type { TypeNormalLink } from '@/src/types/typeGlobalHeader';
import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';

export function HeaderNormalLink({ item, onClick }: { item: TypeNormalLink; onClick: () => void }) {
  const pathname = usePathname();
  const { linkText, linkUrl, isButton } = item;

  let className;
  if (pathname === linkUrl) {
    className = 'text-blue-1 font-semibold  transition-colors';
  } else if (isButton) {
    className = '';
  } else {
    className = 'text-gray-500 hover:text-blue-1 hover:bg-blue-5 rounded-sm transition-colors';
  }

  return (
    <Comp isButton={isButton}>
      <Link
        href={linkUrl}
        onClick={onClick}
        className={cn(
          'g-header__normal-link block p-1 whitespace-nowrap',
          className,
          isButton && 'is-button'
        )}
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
