// Components
import MegaMenuTrigger from './MegaMenuTrigger';
import PostsMegaMenu from './PostsMegaMenu';
// Types
import { TypeMegamenu } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function MegaMenu({
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
  switchMegaMenu: (index: number) => void;
  closeMegaMenu: () => void;
}) {
  return (
    <>
      <MegaMenuTrigger
        title={title}
        index={index}
        currentIndex={currentIndex}
        switchMegaMenu={switchMegaMenu}
      />
      {megamenu.content._type === 'postsMegamenu' && (
        <PostsMegaMenu
          content={megamenu.content}
          index={index}
          currentIndex={currentIndex}
          closeMegaMenu={closeMegaMenu}
        />
      )}
    </>
  );
}
