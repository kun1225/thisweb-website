'use client';
// Hooks
import { useState } from 'react';
// Libs
import { cn } from '@/src/shared/lib/utils';
// Components
import { MobileMenuIcon } from './MobileMenuIcon';
import { MobileMenuContent } from './MobileMenuContent';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export function MobileMenu({
  headerContent,
  className = '',
}: {
  headerContent: TypeGlobalHeaderContent;
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={className}>
      <MobileMenuIcon mobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setIsMobileMenuOpen} />
      <div className={cn('g-header__mobile-menu', isMobileMenuOpen && 'is-open')}>
        <MobileMenuContent
          headerContent={headerContent}
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </div>
  );
}
