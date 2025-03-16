'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/src/shared/lib/utils';
import { motion } from 'motion/react';

interface Rotate3dEffectProps {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>['className'];
  initRotateDeg?: {
    x: number;
    y: number;
  };
  amplitude?: number | { x: number; y: number };
}

const Rotate3dEffect: React.FC<Rotate3dEffectProps> = ({
  children,
  className = '',
  initRotateDeg = { x: 0, y: 0 },
  amplitude = 0.5,
}) => {
  const preRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState(initRotateDeg);
  const [skew, setSkew] = useState({ x: 0, y: 0 });

  const rotateElement = (event: any) => {
    if (!preRef.current) return;

    const {
      x: refX,
      y: refY,
      width: refWidth,
      height: refHeight,
    } = preRef.current.getBoundingClientRect();

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetX = refX + refWidth / 2 - mouseX;
    const offsetY = refY + refHeight / 2 - mouseY;

    const amplitudeX = typeof amplitude === 'number' ? amplitude : amplitude.x;
    const amplitudeY = typeof amplitude === 'number' ? amplitude : amplitude.y;

    setRotate({ x: offsetY * amplitudeY, y: -offsetX * amplitudeX });
  };

  const initRotate = () => setRotate(initRotateDeg);

  return (
    <div
      ref={preRef}
      onMouseMove={rotateElement}
      onMouseLeave={initRotate}
      className={cn('group p-[2rem]', className)}
    >
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          duration: 0.1,
        }}
        className={cn('card relative grid')}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(5000px)',
        }}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      >
        <div className="col-[1/2] row-[1/2] transition duration-500 group-hover:scale-105">
          {children}
        </div>
        <div
          className="col-[1/2] row-[1/2] opacity-20 blur-lg transition duration-500 group-hover:opacity-50"
          style={{ transform: 'translateZ(-150px)' }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Rotate3dEffect;
