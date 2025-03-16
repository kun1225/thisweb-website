// Hooks & Libs
// Components
import { FaCaretDown } from 'react-icons/fa6';
import { cn } from '@/src/shared/lib/utils';

export function HeaderMegaMenuTrigger({
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
      className="hover:text-blue-1 relative cursor-pointer whitespace-nowrap text-gray-500 transition-colors duration-200"
      onClick={() => switchMegaMenu(index)}
    >
      <div className="flex items-center gap-2 p-1">
        {title}
        <FaCaretDown className={cn('transition', index === currentIndex && 'rotate-180')} />
      </div>
    </button>
  );
}
