import type { HTMLProps } from 'react';
import { ReactHTMLElement } from 'react';

const Stack = ({
  as: Component = 'div',
  gap = 4,
  direction = 'row',
  wrap = false,
  className,
  children,
}: {
  as?: keyof HTMLElementTagNameMap;
  gap?: number;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  wrap?: boolean;
  className?: HTMLProps<HTMLElement>['className'];
  children?: React.ReactNode;
}) => {
  return (
    <Component
      className={`flex gap-${gap} flex-${direction} ${wrap && 'flex-wrap'} ${
        className ? className : ''
      }`}
    >
      {children}
    </Component>
  );
};

export default Stack;
