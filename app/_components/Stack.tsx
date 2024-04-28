import type { HTMLProps } from 'react';
import { cn } from '@/lib/utils';

function Stack({
  as: Component = 'div',
  gap = 0,
  direction = 'row',
  wrap = false,
  className = '',
  children,
}: {
  as?: keyof HTMLElementTagNameMap;
  gap?: number | string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  wrap?: boolean;
  className?: HTMLProps<HTMLElement>['className'];
  children?: React.ReactNode;
}) {
  const gapStyle = typeof gap === 'number' ? `gap-${gap}` : `gap-[${gap}]`;

  const directionStyle = `flex-${direction}`;

  return (
    <Component
      className={cn(
        'flex',
        gapStyle,
        wrap && 'flex-wrap',
        directionStyle,
        className,
      )}
    >
      {children}
    </Component>
  );
}

export default Stack;
