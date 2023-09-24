'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { HTMLProps } from 'react';
import { useEffect, useState } from 'react';

const PageTransitionLayout = ({
  className,
  children,
}: {
  className?: HTMLProps<HTMLElement>['className'];
  children: React.ReactNode;
}) => {
  const pathName = usePathname();

  return (
    <motion.main
      className={className}
      key={pathName}
      initial={{ opacity: 0, y: pathName === '/' ? 0 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.1,
        type: 'spring',
        damping: 15,
        stiffness: 80,
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransitionLayout;
