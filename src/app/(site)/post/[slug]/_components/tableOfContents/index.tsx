'use client';

// Hooks
import { useEffect } from 'react';
import useGlobalSettings from '@/src/app/_hooks/useGlobalSettings';
// Utils
import { observeHeading } from './utils';
import { cn } from '@/src/libs/utils';
import { motion } from 'framer-motion';
// Components
import TableOfContentsBody from './_components/TableOfContentsBody';
import TableOfContentHeader from './_components/TableOfContentHeader';
// Types
import { HeadingType } from './type';

const TableOfContents: React.FC<{
  structuredHeadings: HeadingType[];
  activeId: string | undefined;
  setActiveId: React.Dispatch<React.SetStateAction<string | undefined>>;
  isTocOpen: boolean;
  setIsTocOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: React.HTMLProps<HTMLElement>['className'];
}> = ({
  structuredHeadings,
  activeId,
  setActiveId,
  isTocOpen,
  setIsTocOpen,
  className,
}) => {
  const { isTocCollapsed, toggleToc } = useGlobalSettings();
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('.article h2, .article h3'),
    );

    const observer = observeHeading(headingElements, setActiveId);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn(className)}>
      <TableOfContentHeader
        toggleToc={toggleToc}
        setIsTocOpen={setIsTocOpen}
        isTocCollapsed={isTocCollapsed}
      />
      <TableOfContentsBody
        structuredHeadings={structuredHeadings}
        activeId={activeId}
      />
    </div>
  );
};

export default TableOfContents;
