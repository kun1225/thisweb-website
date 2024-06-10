import { cn } from '@/lib/utils';
import { HeadingType } from '../type';

const HeadingButton: React.FC<{
  heading: HeadingType;
  activeId: string | undefined;
  className?: string;
  children: React.ReactNode;
}> = ({ heading, activeId, className, children }) => {
  return (
    <a
      className={cn(
        'text-left transition select-none',
        heading.id === activeId
          ? 'hover:text-primary'
          : 'text-gray-500 hover:text-neutral-900',
        heading.level === 3 && 'pl-4',
        className,
      )}
      key={heading.id}
      href={`#${heading.id}`}
      aria-label={`跳轉至${heading.text}`}
      title={`跳轉至${heading.text}`}
      data-testid="headingButton"
    >
      {children}
    </a>
  );
};

export default HeadingButton;
