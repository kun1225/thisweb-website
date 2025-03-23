import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { AiOutlineLoading } from 'react-icons/ai';
import { cn } from '@/src/shared/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-base transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-1 text-white shadow hover:bg-blue-2 hover:shadow-xl hover:scale-[1.02]',
        outline:
          'border-2 border-blue-1 shadow text-blue-1 hover:shadow-xl hover:scale-[1.02] hover:bg-blue-2 hover:text-white',
        dark: 'bg-blue text-white shadow hover:shadow-xl hover:scale-[1.02]',
        link: 'underline',
      },
      size: {
        xs: 'px-0 text-sm',
        sm: 'px-8 py-1 text-sm rounded-sm',
        default: 'px-10 py-2 rounded-md',
        hero: 'w-full md:w-80 px-6 py-2 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface TypeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, TypeButtonProps>(
  (
    { className, variant, size, children, asChild = false, isLoading = false, disabled, ...props },
    ref
  ) => {
    return asChild ? (
      <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Slot>
    ) : (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {children}
        {isLoading && <AiOutlineLoading className="ml-3 size-3 animate-spin" />}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
