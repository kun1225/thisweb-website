'use client';
// Core
import { createPortal } from 'react-dom';

// Utils
import { motion, AnimatePresence } from 'framer-motion';

// Hook
import { useEffect, useState } from 'react';

// Component
import { IoClose } from 'react-icons/io5';

interface ModalPropsType {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  isBodyScrollLock?: boolean;
  className?: React.HTMLProps<HTMLElement>['className'];
  children: React.ReactNode;
}

const Modal: React.FC<ModalPropsType> = ({
  isOpen,
  onClose,
  title,
  isBodyScrollLock = true,
  className,
  children,
  ...rest
}) => {
  useEffect(() => {
    if (isOpen) {
      if (isBodyScrollLock) document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isBodyScrollLock]);

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (isOpen && e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="z-overlay fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={`z-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[20vw] min-h-[20svh] max-w-[90vw] max-h-[90svh] overflow-auto flex flex-col gap-4 bg-slate-50 p-4 rounded-md ${className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              {...rest}
            >
              {title ? (
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <Button onClose={onClose} />
                </div>
              ) : (
                <Button className="self-end" onClose={onClose} />
              )}

              <div>{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default Modal;

function Portal({ children }: { children: React.ReactNode }) {
  let [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}

function Button({
  onClose,
  className,
}: {
  onClose: () => void;
  className?: React.HTMLProps<HTMLElement>['className'];
}) {
  return (
    <button
      type="button"
      aria-label="關閉"
      onClick={onClose}
      className={className}
    >
      <p className="sr-only">關閉 close</p>
      <IoClose className="transition-colors hover:text-secondary-2" />
    </button>
  );
}
