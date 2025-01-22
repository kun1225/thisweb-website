import { forwardRef, type ElementType, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/src/shared/lib/utils';

const pVariants = cva('transition duration-200', {
  variants: {
    variant: {
      default: 'text-black',
      blue: 'text-secondary',
      'blue-light': 'text-secondary-2',
      gray: 'text-black-light',
      ghost: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'base',
  },
});

export interface PProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariants> {
  as?: ElementType; // Allows dynamic element rendering
  asChild?: boolean; // Enables Slot wrapping
}

const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ as: Component = 'p', asChild = false, className, variant, size, children, ...props }, ref) => {
    const Comp = asChild ? Slot : Component;
    return (
      <Comp className={cn(pVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);
P.displayName = 'P';
