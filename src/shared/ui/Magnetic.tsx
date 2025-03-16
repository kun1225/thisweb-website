'use client';

import type { HTMLProps, MouseEvent } from 'react';
import { useCallback, useRef, useState } from 'react';
import useWindowWidth from '@/src/shared/hooks/useWindowWidth';
import { motion } from 'motion/react';

function Magnetic({
  disableInMobile = true,
  className,
  children,
}: {
  disableInMobile?: boolean;
  className?: HTMLProps<HTMLElement>['className'];
  children?: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const { isDesktop } = useWindowWidth();

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (disableInMobile && !isDesktop) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current!.getBoundingClientRect();

      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;

      setPosition({ x, y });
    },
    [isDesktop]
  );

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className={className}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseMove}
      ref={ref}
      transition={{ type: 'spring', stiffness: 150, damping: 30, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
