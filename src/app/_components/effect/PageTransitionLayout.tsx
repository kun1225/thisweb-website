'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { HTMLProps } from 'react';

function PageTransitionLayout({
  className,
  children,
}: {
  className?: HTMLProps<HTMLElement>['className'];
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: pathName === '/' ? 0 : 100 }}
      key={pathName}
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
}

export default PageTransitionLayout;
