'use client';

import { cn } from '@/src/shared/lib/utils';
import { motion } from 'motion/react';

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
      className={cn('bg-muted bg-gray origin-left animate-pulse rounded-md', className)}
    />
  );
};

export default Skeleton;
