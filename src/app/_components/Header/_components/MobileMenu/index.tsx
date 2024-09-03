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

interface MobileMenuPropsType {
  className?: React.HtmlHTMLAttributes<HTMLElement>['className'];
}

const MobileMenu: React.FC<MobileMenuPropsType> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { headerHeight } = useHeight();

  return (
    <div className={`${className}`}>
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
          top: headerHeight ? `${headerHeight}px` : '68px',
          height: headerHeight
            ? `calc(100dvh - ${headerHeight}px)`
            : 'calc(100dvh - 68px)',
        }}
      >
        <MobileMenuContent
          closeMobileMenu={() => setIsMobileMenuOpen(false)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
