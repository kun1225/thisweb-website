import NormalLink from './NormalLink';
import MegaMenu from './MegaMenu';
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

export default function NavContents({
  headerContent,
  currentIndex,
  switchMegaMenu,
  closeMegaMenu,
}: {
  headerContent: TypeGlobalHeaderContent;
  currentIndex: number;
  switchMegaMenu: (index: number) => void;
  closeMegaMenu: () => void;
}) {
  return headerContent.navContents.map((item, index) => {
    switch (item._type) {
      case 'normalLink':
        return (
          <NormalLink
            key={item._key}
            linkText={item.linkText}
            linkUrl={item.linkUrl}
            onClick={closeMegaMenu}
          />
        );

      case 'megamenu':
        return (
          <MegaMenu
            key={item._key}
            megamenu={item}
            title={item.buttonText}
            index={index}
            currentIndex={currentIndex}
            switchMegaMenu={switchMegaMenu}
            closeMegaMenu={closeMegaMenu}
          />
        );

      default:
        return null;
    }
  });
}
