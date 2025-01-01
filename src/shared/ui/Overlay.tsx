import { cn } from '@/src/shared/lib/utils';

const Overlay: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={cn('pointer-events-none fixed inset-0', className)} {...props}></div>;
};

export default Overlay;
