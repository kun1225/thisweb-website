// Components
import { cn } from '@/src/shared/lib/utils';
import { HeaderMegaMenuTrigger } from './HeaderMegaMenuTrigger';
import { HeaderPostsMegaMenu } from './HeaderPostsMegaMenu';
// Types
import { TypeMegamenu } from '@/src/types/typeGlobalHeader';

export function HeaderMegaMenu({
  megamenu,
  title,
  index,
  currentIndex,
  switchMegaMenu,
  closeMegaMenu,
}: {
  megamenu: TypeMegamenu;
  title: string;
  index: number;
  currentIndex: number;
  switchMegaMenu: (_index: number) => void;
  closeMegaMenu: () => void;
}) {
  return (
    <>
      <HeaderMegaMenuTrigger
        title={title}
        index={index}
        currentIndex={currentIndex}
        switchMegaMenu={switchMegaMenu}
        className={cn(
          'animate-out fade-out-100 fill-mode-forwards opacity-0 duration-1000 ease-linear'
        )}
        style={{
          animationDelay: `${index * 150 + 300}ms`,
        }}
      />
      {megamenu.content._type === 'postsMegamenu' && (
        <HeaderPostsMegaMenu
          content={megamenu.content}
          index={index}
          currentIndex={currentIndex}
          closeMegaMenu={closeMegaMenu}
        />
      )}
    </>
  );
}
