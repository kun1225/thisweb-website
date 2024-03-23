'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import clsx from 'clsx';
import GithubSlugger from 'github-slugger';
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
} from '@/app/_components/Accordion';

type UseIntersectionObserverType = (setActiveId: (id: string) => void) => void;

const useIntersectionObserver: UseIntersectionObserverType = (setActiveId) => {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>(
    {},
  );

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;

        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement?.isIntersecting)
          visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0]!.target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id),
        );

        setActiveId(sortedVisibleHeadings[0]!.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -45% 0px',
    });

    const headingElements = Array.from(
      document.querySelectorAll('.article h2, .article h3'),
    );

    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveId]);
};

interface HeadingType {
  text: string;
  level: number;
  id: string;
  children: any[];
}

const HeadingButton: React.FC<{
  heading: HeadingType;
  activeId: string | undefined;
  className?: string;
  children: React.ReactNode;
}> = ({ heading, activeId, className, children }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    document.querySelector(`#${heading.id}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  return (
    <button
      className={clsx(
        heading.id === activeId
          ? 'hover:text-primary-600'
          : 'text-gray-500 hover:text-neutral-900',
        heading.level === 3 && 'pl-4',
        'text-left transition select-none',
        className,
      )}
      key={heading.id}
      onClick={(e) => {
        handleClick(e);
      }}
      type="button"
    >
      {children}
    </button>
  );
};

interface TableOfContentsPropsType {
  source: any[];
}

const TableOfContents: React.FC<TableOfContentsPropsType> = ({ source }) => {
  const rawHeadings = source.filter((block) =>
    ['h2', 'h3'].includes(block.style),
  );

  const modifiedHeadings = useMemo(() => {
    const headings: HeadingType[] = [];
    let currentH2: HeadingType | null = null;

    rawHeadings.forEach((rawHeading) => {
      const { style, children } = rawHeading;
      const text = children[0].text;
      const level = style === 'h2' ? 2 : 3;
      const slugger = new GithubSlugger();
      const id = slugger.slug(text.replace(/\s+/g, ''));

      if (style === 'h2') {
        currentH2 = { text, level, id, children: [] };
        headings.push(currentH2);
      } else if (style === 'h3' && currentH2) {
        currentH2.children.push({ text, level, id });
      }
    });

    return headings;
  }, [source]);

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  return (
    <>
      <p className="!mb-2 text-primary">目錄</p>
      <div className="toc flex flex-col gap-1 text-sm">
        {modifiedHeadings.map((heading: HeadingType) => {
          return heading.children.length === 0 ? (
            <HeadingButton
              heading={heading}
              activeId={activeId}
              className={`mb-2 ${clsx(
                heading.id === activeId
                  ? 'hover:text-primary-600'
                  : 'text-gray-500 hover:text-neutral-900',
                heading.level === 3 && 'pl-4',
                'text-left transition select-none',
              )}`}
            >
              {heading.text}
            </HeadingButton>
          ) : (
            <Accordion iconPosition="right" key={heading.id} className="mb-2">
              <AccordionTitle
                className={`${clsx(
                  heading.id === activeId
                    ? 'hover:text-primary-600'
                    : 'text-gray-500 hover:text-neutral-900',
                )}`}
              >
                <HeadingButton heading={heading} activeId={activeId}>
                  {heading.text}
                </HeadingButton>
              </AccordionTitle>
              <AccordionContent className='flex flex-col'>
                {heading.children.map((h3: HeadingType) => (
                  <HeadingButton
                    heading={h3}
                    activeId={activeId}
                    key={h3.id}
                    className="mt-2"
                  >
                    {h3.text}
                  </HeadingButton>
                ))}
              </AccordionContent>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default TableOfContents;
