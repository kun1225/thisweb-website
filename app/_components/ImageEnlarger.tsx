'use client';
import Image, { ImageProps } from 'next/image';

// Hooks
import { useState, useEffect, useRef } from 'react';
import useWindowWidth from '../_hook/useWindowWidth';
import useIsMounted from '../_hook/useIsMounted';

import { motion, useWillChange } from 'framer-motion';

import { cn } from '@/lib/utils';

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

const ImageEnlarger: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  const { windowWidth } = useWindowWidth();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>(
    undefined,
  );
  const isMounted = useIsMounted();
  const willChange = useWillChange();
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImageEnlarge = (boolean: boolean) => {
    setIsEnlarged(boolean);
    document.body.style.overflowY = boolean ? 'hidden' : 'auto';
  };

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (isEnlarged && e.key === 'Escape') setIsEnlarged(false);
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  useEffect(() => {
    setWrapperHeight(imgRef.current?.clientHeight);
  }, [windowWidth]);

  return (
    <motion.div
      className={`relative w-full mb-4 ${className}`}
      style={{ minHeight: `${`${wrapperHeight}px` || 'auto'}` }}
    >
      <motion.div
        onClick={() => handleImageEnlarge(false)}
        animate={{ opacity: isEnlarged ? 1 : 0 }}
        transition={transition}
        className={`z-overlay fixed inset-0 bg-black/70 backdrop-blur-sm opacity-0 ${cn(
          isEnlarged
            ? 'pointer-events-auto cursor-zoom-out'
            : 'pointer-events-none',
        )}`}
      />
      <motion.div
        ref={imgRef}
        layout
        onClick={() => handleImageEnlarge(!isEnlarged)}
        onLoad={() => setWrapperHeight(imgRef.current?.clientHeight)}
        style={{ willChange }}
        className={`inset-0 w-full aspect-video rounded-md ${cn(
          isMounted == false
            ? 'relative'
            : isEnlarged
            ? 'fixed z-modal !w-auto !h-auto max-w-[92vw] max-h-[92svh] m-auto cursor-zoom-out'
            : 'absolute max-w-full cursor-zoom-in rounded-md',
        )}`}
        transition={transition}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('drop-shadow-lg rounded-md', isEnlarged ? 'object-contain' : 'object-cover')}
        ></Image>
      </motion.div>
    </motion.div>
  );
};

export default ImageEnlarger;
