import { cn } from '@/lib/utils';

interface MageMenuWrapperPropsType {
  children: React.ReactNode;
  index: number;
  currentIndex: number;
  closeMegaMenu: () => void;
}

const MegaMenuWrapper: React.FC<MageMenuWrapperPropsType> = ({
  children,
  index,
  currentIndex,
  closeMegaMenu,
}) => {
  return (
    <>
      <div
        className={cn(
          'fixed top-0 left-0 w-[100%] h-screen z-10',
          index === currentIndex
            ? 'pointer-events-auto'
            : 'pointer-events-none',
        )}
        onClick={closeMegaMenu}
      ></div>
      <div
        className={cn(
          'c header__mega-menu fixed top-[120%] right-8 left-8 p-4 rounded-xl bg-pure-white shadow-2xl transition duration-200 z-10',
          index === currentIndex
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-10 opacity-0 pointer-events-none',
        )}
      >
        {children}
      </div>
    </>
  );
};

export default MegaMenuWrapper;
