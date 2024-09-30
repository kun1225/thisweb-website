'use client';
// Hooks
import { useState, useMemo, useEffect } from 'react';
import useGlobalSettings from '@/src/app/_hooks/useGlobalSettings';
// Utils
import { cn } from '@/src/libs/utils';
import { extractHeadings, transformRawHeadings } from './tableOfContents/utils';
// Components
import TableOfContents from './tableOfContents';

const PostSidebar: React.FC<{
  source: any[];
  className?: React.HTMLAttributes<HTMLElement>['className'];
}> = ({ source, className }) => {
  const { isTocCollapsed } = useGlobalSettings();
  const [isTocOpen, setIsTocOpen] = useState(!isTocCollapsed);
  const [activeId, setActiveId] = useState<string>();

  const rawHeadings = extractHeadings(source);
  const structuredHeadings = useMemo(
    () => transformRawHeadings(rawHeadings),
    [source],
  );

  useEffect(() => {
    const closeToc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTocOpen(false);
    };

    document.addEventListener('keydown', closeToc);

    return () => document.removeEventListener('keydown', closeToc);
  });

  return (
    <aside
      className={cn(
        'block w-full max-w-2xl  mb-8 border-2 rounded-md xl:sticky xl:w-auto xl:max-w-fit xl:self-start xl:top-20 xl:mb-0 xl:border-0',
        className,
      )}
    >
      <TableOfContents
        className={cn(
          'scrollbar-small w-full xl:w-[320px] p-6 xl:max-h-[80vh] overflow-y-auto bg-transparent rounded-lg',
        )}
        structuredHeadings={structuredHeadings}
        activeId={activeId}
        setActiveId={setActiveId}
        isTocOpen={isTocOpen}
        setIsTocOpen={setIsTocOpen}
      />
    </aside>
  );
};

export default PostSidebar;
