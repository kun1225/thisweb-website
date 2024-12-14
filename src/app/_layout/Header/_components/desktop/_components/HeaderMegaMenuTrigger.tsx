// Hooks & Libs
import { cn } from '@/src/libs/utils';
// Components
import { FaCaretDown } from 'react-icons/fa6';

export default function MegaMenuTrigger({
  title,
  index,
  currentIndex,
  switchMegaMenu,
}: {
  title: string;
  index: number;
  currentIndex: number;
  switchMegaMenu: (_index: number) => void;
}) {
  return (
    <button
      type="button"
      aria-label="Open the mega menu"
      className="g-header__megamenu-trigger"
      onClick={() => switchMegaMenu(index)}
    >
      <div className="flex items-center gap-2 p-1">
        {title}
        <FaCaretDown className={cn('transition', index === currentIndex && 'rotate-180')} />
      </div>
    </button>
  );
}
