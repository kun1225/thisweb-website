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
      className={cn('bg-muted origin-left animate-pulse rounded-md bg-gray-200', className)}
    />
  );
};

export default Skeleton;
