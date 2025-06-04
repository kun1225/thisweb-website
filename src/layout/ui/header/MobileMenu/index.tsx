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
}: {
  headerContent: TypeGlobalHeaderContent;
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="grid place-content-center md:hidden">
      <MobileMenuIcon mobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setIsMobileMenuOpen} />
      <MobileMenuContent
        headerContent={headerContent}
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}
