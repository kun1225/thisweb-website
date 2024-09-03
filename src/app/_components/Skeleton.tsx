'use client';

import { cn } from '@/src/libs/utils';
import { motion } from 'framer-motion';

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

const Skeleton = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={transition}
      className={cn(
        'animate-pulse rounded-md bg-muted bg-gray-200 origin-left',
        className,
      )}
    />
  );
};

export default Skeleton;
