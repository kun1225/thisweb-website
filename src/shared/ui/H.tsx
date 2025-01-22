import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/src/shared/lib/utils';

const hVariants = cva('font-bold transition duration-200', {
  variants: {
    variant: {
      default: 'text-primary',
      secondary: 'text-secondary',
      gray: 'text-gray',
      'gray-light': 'text-gray-light',
    },
    size: {
      sm: 'text-sm',
      md: 'text-lg',
      lg: 'text-2xl',
      xl: 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface HProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof hVariants> {
  as?: ElementType; // Allows dynamic element rendering
  asChild?: boolean; // Enables Slot wrapping
}

export const H = forwardRef<HTMLHeadingElement, HProps>(
  (
    { as: Component = 'h2', asChild = false, className, variant, size, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : Component;
    return (
      <Comp className={cn(hVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
H.displayName = 'H';
