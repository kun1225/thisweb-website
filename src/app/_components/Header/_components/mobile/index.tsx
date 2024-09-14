'use client';
// Hooks
import { useState } from 'react';
import useHeight from '@/src/app/_hooks/useHeight';
// Libs
import { cn } from '@/src/libs/utils';
// Components
import MobileMenuIcon from './_components/MobileMenuIcon';
import MobileMenuContent from './_components/MobileMenuContent';
// Style
import './style.css';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function MobileMenu({
  headerContent,
  className = '',
}: {
  headerContent: TypeGlobalHeaderContent;
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { headerHeight } = useHeight();

  return (
    <div className={className}>
      <MobileMenuIcon
        mobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div
        className={cn(
          'mobile-menu fixed left-0 w-[100%] bg-[rgba(249,250,251,0.8)]',
          isMobileMenuOpen && 'is-open',
        )}
        style={{
          top: `${headerHeight || 68}px`,
          height: `calc(100dvh - ${headerHeight || 68}px)`,
        }}
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
