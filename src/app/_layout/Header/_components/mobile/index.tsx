'use client';
// Hooks
import { useState } from 'react';
// Libs
import { cn } from '@/src/shared/lib/utils';
// Components
import MobileMenuIcon from './_components/MobileMenuIcon';
import MobileMenuContent from './_components/MobileMenuContent';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export default function MobileMenu({
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
