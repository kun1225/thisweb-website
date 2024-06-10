'use client';
// Hooks
import { useState, useMemo, useEffect } from 'react';
import useGlobalSettings from '@/app/_hook/useGlobalSettings';

// Utils
import { cn } from '@/lib/utils';
import { extractHeadings, transformRawHeadings } from './tableOfContents/utils';

// Components
import TableOfContents from './tableOfContents';
import TableOfContentsIndicator from './TableOfContentsIndicator';
import Overlay from '@/app/_components/Overlay';

// xl:absolute xl:top-20 xl:right-4

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
    <>
      {isTocCollapsed && (
        <Overlay
          className={cn(isTocCollapsed && isTocOpen && 'pointer-events-auto')}
          onClick={() => setIsTocOpen(false)}
        />
      )}

      <aside
        className={cn(
          'block w-full max-w-2xl  mb-8 border-2 rounded-md xl:sticky xl:w-auto xl:max-w-fit xl:self-start xl:top-20 xl:mb-0 xl:border-0',
          isTocCollapsed && 'xl:overflow-visible xl:top-32 xl:pr-edge xl:pl-8 ',
          className,
        )}
      >
        <TableOfContentsIndicator
          className={cn(
            'hidden pointer-events-none cursor-pointer transition duration-200',
            isTocCollapsed &&
              'xl:flex xl:flex-col xl:gap-4 xl:items-end xl:pointer-events-auto',
          )}
          structuredHeadings={structuredHeadings}
          activeId={activeId}
          onClick={() => setIsTocOpen(!isTocOpen)}
        />
        <TableOfContents
          className={cn(
            'scrollbar-small w-full xl:w-[320px] p-6 xl:max-h-[80vh] overflow-y-auto bg-transparent rounded-lg',
            isTocCollapsed &&
              'xl:absolute xl:right-full xl:top-0 xl:shadow-2xl xl:bg-pure-white xl:pointer-events-none',
          )}
          structuredHeadings={structuredHeadings}
          activeId={activeId}
          setActiveId={setActiveId}
          isTocOpen={isTocOpen}
          setIsTocOpen={setIsTocOpen}
        />
      </aside>
    </>
  );
};

export default PostSidebar;
