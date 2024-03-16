'use client';

// Hooks
import { useState, useEffect } from 'react';
import { motion, useWillChange } from 'framer-motion';

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

interface ImageEnlargerPropsType
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageEnlarger: React.FC<ImageEnlargerPropsType> = ({
  src,
  alt,
  className,
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const willChange = useWillChange();

  // if (typeof window !== 'undefined') return;

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (isEnlarged && e.key === 'Escape') setIsEnlarged(false);
    };
    const handleScroll = (e: any) => {
      isEnlarged && setIsEnlarged(false);
    }

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <motion.div className={`relative w-full pt-[66.6%] ${className}`}>
      <motion.div
        onClick={() => setIsEnlarged(false)}
        animate={{ opacity: isEnlarged ? 1 : 0 }}
        transition={transition}
        className={`z-overlay fixed inset-0 bg-black/70 backdrop-blur-sm opacity-0 ${
          isEnlarged
            ? 'pointer-events-auto cursor-zoom-out'
            : 'pointer-events-none'
        }`}
      />
      <motion.img
        layout
        src={src}
        alt={alt}
        onClick={() => setIsEnlarged(!isEnlarged)}
        style={{ willChange }}
        className={`inset-0 ${
          isEnlarged
            ? 'fixed z-modal w-auto h-auto max-w-[100vw] max-h-[100svh] m-auto p-4 cursor-zoom-out'
            : 'absolute max-w-full max-h-full cursor-zoom-in'
        }`}
        transition={transition}
      ></motion.img>
    </motion.div>
  );
};

export default ImageEnlarger;
