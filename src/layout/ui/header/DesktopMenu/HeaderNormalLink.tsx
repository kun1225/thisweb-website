'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/shared/lib/utils';
import { Button } from '@/src/shared/ui/Button';
import type { TypeNormalLink } from '@/src/types/typeGlobalHeader';

export function HeaderNormalLink({ item, onClick }: { item: TypeNormalLink; onClick: () => void }) {
  const pathname = usePathname();
  const { linkText, linkUrl, isButton } = item;

  let className;
  if (pathname === linkUrl) {
    className = 'text-blue-1 font-semibold  transition-colors';
  } else if (isButton) {
    className = 'md:ml-4 lg:ml-8';
  } else {
    className =
      'before:bg-blue-5 hover:text-blue-1 relative z-10 rounded-sm text-gray-500 transition-colors before:absolute before:-inset-0 before:-z-10 before:scale-50 before:rounded-sm before:opacity-0 before:transition before:duration-300 hover:before:scale-100 hover:before:opacity-100 before:ease-bounce-2';
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
