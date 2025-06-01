import { HeaderNormalLink } from './HeaderNormalLink';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export function HeaderNavContents({
  headerContent,
  currentIndex,
  switchMegaMenu,
  closeMegaMenu,
}: {
  headerContent: TypeGlobalHeaderContent;
  currentIndex: number;
  switchMegaMenu: (_index: number) => void;
  closeMegaMenu: () => void;
}) {
  return headerContent.navContents.length > 0
    ? headerContent.navContents.map((item, index) => {
        switch (item._type) {
          case 'normalLink':
            return (
              <li key={item._key}>
                <HeaderNormalLink item={item} onClick={closeMegaMenu} />
              </li>
            );

          case 'megamenu':
            return (
              <li key={item._key}>
                <HeaderMegaMenu
                  megamenu={item}
                  title={item.buttonText}
                  index={index}
                  currentIndex={currentIndex}
                  switchMegaMenu={switchMegaMenu}
                  closeMegaMenu={closeMegaMenu}
                />
              </li>
            );

          default:
            return null;
        }
      })
    : null;
}
