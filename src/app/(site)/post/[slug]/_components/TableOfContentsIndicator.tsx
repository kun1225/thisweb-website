'use client';
// Hooks
import useGlobalSettings from '@/src/app/_hooks/useGlobalSettings';
// Utils
import { cn } from '@/src/libs/utils';
import { motion } from 'framer-motion';
// Components
import { FaCaretLeft } from 'react-icons/fa';
// Types
import { HeadingType } from './tableOfContents/type';
interface TableOfContentsIndicatorProps
  extends React.HTMLProps<HTMLDivElement> {
  structuredHeadings: HeadingType[];
  activeId: string | undefined;
  className?: React.HTMLProps<HTMLElement>['className'];
}

const TableOfContentsIndicator: React.FC<TableOfContentsIndicatorProps> = ({
  structuredHeadings,
  activeId,
  className = '',
  onClick,
}) => {
  const { toggleToc, isTocCollapsed } = useGlobalSettings();

  return (
    <motion.div
      className={cn(className)}
      onClick={onClick}
      animate={{ opacity: isTocCollapsed ? 1 : 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      whileHover={{ y: '-8px' }}
    >
      <button
        className="block text-neutral-500 hover:text-neutral-950 transition"
        type="button"
        aria-label="展開文章目錄"
        title="展開文章目錄"
        onClick={toggleToc}
      >
        <FaCaretLeft />
      </button>
      {structuredHeadings.map((h2: HeadingType) => (
        <div
          key={h2.id}
          className="flex flex-col gap-4 items-end pointer-events-none"
        >
          <div
            className={cn(
              'h-1 rounded-full w-6',
              h2.id === activeId ? 'bg-neutral-950' : 'bg-gray-400',
            )}
          ></div>
          {h2.children.length > 0 &&
            h2.children.map((h3: HeadingType) => (
              <div
                key={h3.id}
                className={cn(
                  'h-1 rounded-full w-4',
                  h3.id === activeId ? 'bg-neutral-950' : 'bg-gray-400',
                )}
              ></div>
            ))}
        </div>
      ))}
    </motion.div>
  );
};

export default TableOfContentsIndicator;
