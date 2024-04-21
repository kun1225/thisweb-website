import type {  HTMLProps } from 'react';
import { cn } from '@/lib/utils';

function Button({
  className,
  children,
  type = 'button',
  buttonType = 'primary',
  disabled = false,
  ...props
}: {
  className?: HTMLProps<HTMLElement>['className'];
  children: React.ReactNode;
  type?: HTMLButtonElement['type'];
  buttonType?: 'primary' | 'outline';
  disabled?: boolean;
}) {
  const typeClass = (() => {
    if (disabled) {
      return 'cursor-not-allowed bg-gray-200 text-gray-400 shadow-none';
    }

    switch (buttonType) {
      case 'primary':
        return 'bg-secondary text-white hover:bg-secondary-2 hover:shadow-2xl hover:scale-105';
      case 'outline':
        return 'border-2 border-secondary text-secondary hover:shadow-2xl hover:scale-105 hover:border-transparent hover:bg-secondary-2 hover:text-white';
      default:
        return '';
    }
  })();
  return (
    <button
      className={cn(`w-full md:w-80 text-sm px-6 py-2 shadow-md rounded-sm duration-200 ${typeClass} ${className}`)}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
