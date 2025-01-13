'use client';
import Image, { ImageProps } from 'next/image';

// Hooks
import { useState, useEffect, useRef } from 'react';
import useWindowWidth from '../_hooks/useWindowWidth';
import useIsMounted from '../_hooks/useIsMounted';

import { motion, useWillChange } from 'framer-motion';

import { cn } from '@/src/shared/lib/utils';

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

const ImageEnlarger: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  const { windowWidth } = useWindowWidth();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState<number | undefined>(undefined);
  const isMounted = useIsMounted();
  const willChange = useWillChange();
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImageEnlarge = (boolean: boolean) => {
    setIsEnlarged(boolean);
    document.body.style.overflowY = boolean ? 'hidden' : 'auto';
  };

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (isEnlarged && e.key === 'Escape') {
        setIsEnlarged(false);
        document.body.style.overflowY = 'auto';
      }
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
      className={`relative mb-4 w-full ${className}`}
      style={{ minHeight: `${wrapperHeight ? `${wrapperHeight}px` : 'auto'}` }}
    >
      <motion.div
        onClick={() => handleImageEnlarge(false)}
        animate={{ opacity: isEnlarged ? 1 : 0 }}
        transition={transition}
        className={`fixed inset-0 z-overlay bg-black/70 opacity-0 backdrop-blur-sm ${cn(
          isEnlarged ? 'pointer-events-auto cursor-zoom-out' : 'pointer-events-none'
        )}`}
      />
      <motion.div
        ref={imgRef}
        layout
        onClick={() => handleImageEnlarge(!isEnlarged)}
        onLoad={() => setWrapperHeight(imgRef.current?.clientHeight)}
        style={{ willChange }}
        className={`inset-0 aspect-video w-full rounded-md ${cn(
          isMounted == false
            ? 'relative'
            : isEnlarged
              ? 'fixed z-modal m-auto !h-auto max-h-[92svh] !w-auto max-w-[92vw] cursor-zoom-out'
              : 'absolute max-w-full cursor-zoom-in rounded-md bg-gray-100 shadow-lg'
        )}`}
        transition={transition}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('rounded-md object-contain drop-shadow-lg')}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageEnlarger;
