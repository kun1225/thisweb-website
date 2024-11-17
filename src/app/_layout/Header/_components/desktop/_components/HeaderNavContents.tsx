import HeaderNormalLink from './HeaderNormalLink';
import HeaderMegaMenu from './HeaderMegaMenu';
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';

export default function HeaderNavContents({
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
              <li>
                <HeaderNormalLink
                  key={item._key}
                  linkText={item.linkText}
                  linkUrl={item.linkUrl}
                  onClick={closeMegaMenu}
                />
              </li>
            );

          case 'megamenu':
            return (
              <li>
                <HeaderMegaMenu
                  key={item._key}
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
