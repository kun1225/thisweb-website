'use client';

// Hooks
import { useState } from 'react';
// Libs
import { cn } from '@/src/shared/lib/utils';

interface MobileMenuPropsType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenuIcon: React.FC<MobileMenuPropsType> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setIsInitialRender(false);
  };
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      className={cn(
        'relative flex size-8 flex-col items-center justify-center focus:outline-none',
        mobileMenuOpen ? 'text-gray-900' : 'text-gray-600',
        isInitialRender && 'transition-none'
      )}
      onClick={toggleMenu}
    >
      <span
        className={cn(
          'absolute block h-0.5 w-6 transform bg-current transition-transform duration-300',
          mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
        )}
      />
      <span
        className={cn(
          'absolute block h-0.5 w-6 bg-current transition-opacity duration-300',
          mobileMenuOpen && 'opacity-0'
        )}
      />
      <span
        className={cn(
          'absolute block h-0.5 w-6 transform bg-current transition-transform duration-300',
          mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
        )}
      />
    </button>
  );
};
