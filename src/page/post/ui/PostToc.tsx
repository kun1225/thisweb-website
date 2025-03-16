'use client';
// Hooks & Libs
import { useState, useMemo, useEffect } from 'react';
import GithubSlugger from 'github-slugger';
// Components
import { PostTocBody } from './PostTocBody';
//Types
import { TypePost, TypePostTocHeading } from '@/src/types/typePosts';

export function PostToc({ data }: { data: TypePost }) {
  const [activeId, setActiveId] = useState<string>();

  const rawHeadings = extractHeadings(data.body);

  const structuredHeadings = useMemo(() => transformRawHeadings(rawHeadings), [rawHeadings]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('#p-post h2, #p-post h3'));

    const observer = observeHeading(headingElements, setActiveId);

    return () => {
      observer.disconnect();
    };
  }, [setActiveId]);

  return (
    <aside
      className="w-full max-w-3xl border border-gray-200 p-8 opacity-0 shadow xl:sticky xl:top-[var(--top)] xl:mb-0 xl:mr-[1.25vw] xl:max-w-64 xl:flex-1 xl:self-start xl:overflow-y-auto xl:border-0 xl:py-0 xl:pl-0 xl:pr-[0.25vw] xl:shadow-none"
      style={{ animation: 'fade-in 0.6s 0.8s linear forwards;' }}
    >
      <div className="xl:max-h-[60vh]">
        <PostTocHeader />
        <PostTocBody structuredHeadings={structuredHeadings} activeId={activeId} />
      </div>
    </aside>
  );
}

function PostTocHeader() {
  return (
    <p
      className="mb-4 flex items-center justify-between gap-2 font-bold text-blue"
      data-testid="toc-header-title"
    >
      文章目錄
    </p>
  );
}

// *** Helper Functions ***
export function getIndexFromId(headingElements: Element[], id: string) {
  return headingElements.findIndex((heading) => heading.id === id);
}

export function findLastVisibleHeadingEntry(
  headingsEntry: IntersectionObserverEntry[],
  headingElements: Element[]
) {
  return headingsEntry.sort(
    (a, b) =>
      getIndexFromId(headingElements, b.target.id) - getIndexFromId(headingElements, a.target.id)
  )[0];
}

export function observeHeading(headingElements: Element[], setActiveId: (_id: string) => void) {
  const setCurrentActiveId = (headingsEntry: IntersectionObserverEntry[]) => {
    if (!headingsEntry[0]?.isIntersecting) return;

    if (headingsEntry.length === 1) {
      setActiveId(headingsEntry[0]!.target.id);
    } else if (headingsEntry.length > 1) {
      const lastVisibleHeadingEntry = findLastVisibleHeadingEntry(headingsEntry, headingElements);

      setActiveId(lastVisibleHeadingEntry!.target.id);
    }
  };

  const observer = new IntersectionObserver(setCurrentActiveId, {
    rootMargin: '0px 0px -60% 0px',
  });

  headingElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

export function transformRawHeadings(rawHeadings: any[]) {
  const headings: TypePostTocHeading[] = [];
  let currentH2: TypePostTocHeading | null = null;

  rawHeadings.forEach((rawHeading) => {
    const { style, children } = rawHeading;
    const text = children[0]?.text;
    const level = style === 'h2' ? 2 : 3;

    const slugger = new GithubSlugger();
    const id = text && slugger.slug(text.replace(/\s+/g, ''));

    if (style === 'h2') {
      currentH2 = { text, level, id, children: [] };
      headings.push(currentH2);
    } else if (style === 'h3' && currentH2) {
      currentH2.children.push({ text, level, id });
    }
  });

  return headings;
}

export function extractHeadings(source: any[]): any[] {
  return source.filter((block) => ['h2', 'h3'].includes(block.style));
}
