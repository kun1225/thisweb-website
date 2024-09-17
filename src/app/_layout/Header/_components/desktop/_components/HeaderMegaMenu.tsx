// Components
import HeaderMegaMenuTrigger from './HeaderMegaMenuTrigger';
import HeaderPostsMegaMenu from './HeaderPostsMegaMenu';
// Types
import { TypeMegamenu } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function HeaderMegaMenu({
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
