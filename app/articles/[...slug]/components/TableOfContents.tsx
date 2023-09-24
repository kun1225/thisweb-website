'use client';
import clsx from 'clsx';
import GithubSlugger from 'github-slugger';
import { useEffect, useRef, useState } from 'react';

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
      document.querySelectorAll('.article h2,h3'),
    );

    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveId]);
};

interface PropsType {
  source: string;
}

function TableOfContents({ source }: PropsType) {
  const headingLines = source
    .split('\n')
    .filter((line) => /^###?\s/.exec(line));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '');
    const level = raw.startsWith('###') ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  return (
    <>
      <p className="!mb-2 text-lg">目錄</p>
      <div className="flex flex-col text-xs">
        {headings.map((heading) => (
          <button
            className={clsx(
              heading.id === activeId
                ? 'font-medium text-primary-500 hover:text-primary-600'
                : 'font-normal text-gray-500 hover:text-gray-800',
              heading.level === 3 && 'pl-4',
              'mb-2 text-left',
            )}
            key={heading.id}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
              });
            }}
            type="button"
          >
            {heading.text}
          </button>
        ))}
      </div>
    </>
  );
}

export default TableOfContents;
