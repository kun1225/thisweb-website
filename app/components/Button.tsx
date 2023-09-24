import type { HTMLProps } from 'react';

function Button({
  className,
  children,
  type = 'button',
}: {
  className?: HTMLProps<HTMLElement>['className'];
  children: React.ReactNode;
  type?: HTMLButtonElement['type'];
}) {
  return (
    <button
      className={`
      w-full 
      md:w-80 
      border-2 
      border-secondary 
      text-secondary
      text-sm 
      px-6 py-2 
      rounded-sm
      duration-200 
      hover:bg-gray-200
      hover:border-transparent
      ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
