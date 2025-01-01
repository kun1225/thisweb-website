'use client';

// Hooks
import { useState } from 'react';

// Libs
import { cn } from '@/src/shared/lib/utils';

interface MobileMenuPropsType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuIcon: React.FC<MobileMenuPropsType> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setIsInitialRender(false);
  };
  return (
    <button
      type="button"
      aria-label="Toggle Menu"
      className={`g-header__mobile-menu__trigger ${cn(
        mobileMenuOpen && 'is-open',
        isInitialRender && 'is-initial'
      )}`}
      onClick={toggleMenu}
    />
  );
};

export default MobileMenuIcon;
