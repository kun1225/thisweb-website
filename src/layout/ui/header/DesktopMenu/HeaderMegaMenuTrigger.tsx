import { FaCaretDown } from 'react-icons/fa6';
import { cn } from '@/src/shared/lib/utils';

export function HeaderMegaMenuTrigger({
  title,
  index,
  currentIndex,
  switchMegaMenu,
  style,
}: {
  title: string;
  index: number;
  currentIndex: number;
  switchMegaMenu: (_index: number) => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      aria-label="Open the mega menu"
      onClick={() => switchMegaMenu(index)}
      className={cn(
        'before:bg-blue-5 hover:text-blue-1 before:ease-bounce-2 relative z-10 ml-2 cursor-pointer whitespace-nowrap text-gray-500 transition-colors before:absolute before:-inset-0 before:-z-10 before:scale-75 before:rounded-sm before:opacity-0 before:transition before:duration-300 hover:before:scale-100 hover:before:opacity-100',
        'animate-out fade-out-100 fill-mode-forwards animation-duration-1000 opacity-0 ease-linear'
      )}
      style={{
        animationDelay: `${index * 150 + 300}ms`,
      }}
    >
      <div className="flex items-center gap-1 p-1">
        <span>{title}</span>
        <FaCaretDown
          className={cn('size-4 transition-transform', index === currentIndex && 'rotate-180')}
        />
      </div>
    </button>
  );
}
