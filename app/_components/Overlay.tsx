import { cn } from '@/lib/utils';

const Overlay: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('fixed inset-0 pointer-events-none', className)}
      {...props}
    ></div>
  );
};

export default Overlay;
