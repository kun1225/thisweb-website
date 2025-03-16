'use client';

// Core
// Hook
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// Component
import { IoClose } from 'react-icons/io5';
// Utils
import { AnimatePresence, motion } from 'motion/react';

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
              className="fixed inset-0 z-overlay bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={`fixed left-1/2 top-1/2 z-modal flex max-h-[90svh] min-h-[20svh] min-w-[20vw] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-auto rounded-md bg-slate-50 p-4 ${className}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              {...rest}
            >
              {title ? (
                <div className="flex items-center justify-between">
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
    <button type="button" aria-label="關閉" onClick={onClose} className={className}>
      <p className="sr-only">關閉 close</p>
      <IoClose className="transition-colors hover:text-blue-2" />
    </button>
  );
}
