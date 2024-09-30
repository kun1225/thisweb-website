import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/libs/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-base transition duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-white shadow hover:bg-secondary-2 hover:shadow-xl hover:scale-102',
        outline:
          'border-2 border-secondary shadow text-secondary hover:shadow-xl hover:scale-102 hover:bg-secondary-2 hover:text-white',
      },
      size: {
        default: 'px-10 py-2',
        hero: 'w-full md:w-80 px-6 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface TypeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  labelDescription?: string;
}

const Button = forwardRef<HTMLButtonElement, TypeButtonProps>(
  ({ className, variant, size, labelDescription, children, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {labelDescription ? (
          <span className="sr-only">{labelDescription}</span>
        ) : null}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
