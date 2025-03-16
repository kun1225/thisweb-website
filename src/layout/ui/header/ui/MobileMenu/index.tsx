'use client';

// Hooks
import { useState } from 'react';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
// Libs
import { cn } from '@/src/shared/lib/utils';
import { MobileMenuContent } from './MobileMenuContent';
// Components
import { MobileMenuIcon } from './MobileMenuIcon';

export function MobileMenu({
  headerContent,
  className = '',
}: {
  headerContent: TypeGlobalHeaderContent;
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="grid place-content-center md:hidden">
      <MobileMenuIcon mobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setIsMobileMenuOpen} />
      <div
        className={cn(
          'fixed top-0 left-0 -z-10 h-screen w-full bg-white transition-all duration-300 ease-in-out dark:bg-gray-900',
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <MobileMenuContent
          headerContent={headerContent}
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </div>
  );
}
