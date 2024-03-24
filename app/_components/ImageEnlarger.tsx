'use client';

// Hooks
import { useState, useEffect, useRef } from 'react';
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
  const [wrapperHeight, setWrapperHeight] = useState(500);
  const willChange = useWillChange();
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (isEnlarged && e.key === 'Escape') setIsEnlarged(false);
    };
    const handleScroll = () => {
      isEnlarged && setIsEnlarged(false);
    }

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('scroll', handleScroll);
    }
  });

  useEffect(() => {
    setWrapperHeight(imgRef.current?.clientHeight || 500);
  }, [imgRef])

  return (
    <motion.div className={`relative w-full mb-4 ${className}`} style={{ minHeight: `${wrapperHeight}px` }}>
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
        ref={imgRef}
        layout
        src={src}
        alt={alt}
        onClick={() => setIsEnlarged(!isEnlarged)}
        style={{ willChange }}
        className={`inset-0 rounded-md shadow-lg ${
          isEnlarged
            ? 'fixed z-modal w-auto h-auto max-w-[92vw] max-h-[92svh] m-auto cursor-zoom-out'
            : 'absolute max-w-full cursor-zoom-in rounded-md'
        }`}
        transition={transition}
      ></motion.img>
    </motion.div>
  );
};

export default ImageEnlarger;
