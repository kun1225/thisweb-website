// Hooks & Libs
import { cn } from '@/src/libs/utils';
// Components
import { FaCaretDown } from 'react-icons/fa6';
import Magnetic from '@/src/app/_components/effect/Magnetic';

export default function MegaMenuTrigger({
  title,
  index,
  currentIndex,
  switchMegaMenu,
}: {
  title: string;
  index: number;
  currentIndex: number;
  switchMegaMenu: (index: number) => void;
}) {
  return (
    <button
      type="button"
      aria-label="Open the mega menu"
      className="g-header__megamenu-trigger"
      onClick={() => switchMegaMenu(index)}
    >
      <Magnetic className="flex gap-2 items-center p-1 xs:p-4">
        {title}
        <FaCaretDown
          className={cn('transition', index === currentIndex && 'rotate-180')}
        />
      </Magnetic>
    </button>
  );
}
