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
      className="before:bg-blue-5 hover:text-blue-1 relative z-10 cursor-pointer whitespace-nowrap text-gray-500 transition-colors before:absolute before:-inset-0 before:-z-10 before:scale-75 before:rounded-sm before:opacity-0 before:transition before:duration-300 hover:before:scale-100 hover:before:opacity-100"
      onClick={() => switchMegaMenu(index)}
    >
      <div className="flex items-center gap-2 p-1">
        {title}
        <FaCaretDown className={cn('transition', index === currentIndex && 'rotate-180')} />
      </div>
    </button>
  );
}
