import type { HTMLProps } from 'react';
import { cn } from '@/src/libs/utils';
import React from 'react';

type TypeStackProps = {
  as: React.ElementType;
  gap?: number | string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  wrap?: boolean;
  className?: HTMLProps<HTMLElement>['className'];
  children?: React.ReactNode;
};

function Stack({
  as: Component = 'div',
  gap = 0,
  direction = 'row',
  wrap = false,
  className = '',
  children,
}: TypeStackProps) {
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

export function HStack({ children, ...props }: TypeStackProps) {
  return (
    <Stack {...props} direction="row" className={props.className}>
      {children}
    </Stack>
  );
}

export default Stack;
