'use client';

// Hooks
import { useEffect, useState, useMemo } from 'react';

// Utils
import { observeHeading, extractHeadings, transformRawHeadings } from './utils';

// Components
import TableOfContentsBody from './_components/TableOfContentsBody';
import TableOfContentsIndicator from './_components/TableOfContentsIndicator';
import useIsMounted from '@/app/_hook/useIsMounted';
import { PiCaretDoubleRight } from 'react-icons/pi';

const TableOfContents: React.FC<{ source: any[] }> = ({ source }) => {
  const [activeId, setActiveId] = useState<string>();

  const rawHeadings = extractHeadings(source);
  const structuredHeadings = useMemo(
    () => transformRawHeadings(rawHeadings),
    [source],
  );

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
    <>
      <div className="flex justify-between items-baseline gap-2">
        <p className="!mb-2 text-primary">目錄</p>
        <button
          className="text-neutral-500 hover:text-neutral-950 transition"
          type="button"
          aria-label="隱藏目錄"
          title="隱藏目錄"
        >
          <PiCaretDoubleRight />
        </button>
      </div>
      <div className="toc flex flex-col gap-1 text-sm">
        <TableOfContentsBody
          structuredHeadings={structuredHeadings}
          activeId={activeId}
        />
      </div>
      <TableOfContentsIndicator
        className="fixed right-4 top-24 hidden md:flex flex-col gap-2 items-end"
        structuredHeadings={structuredHeadings}
        activeId={activeId}
      />
    </>
  );
};

export default TableOfContents;
