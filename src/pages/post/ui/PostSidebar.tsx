'use client';
// Hooks & Libs
import { useState, useMemo, useEffect } from 'react';
import GithubSlugger from 'github-slugger';
// Components
import { PostSidebarBody } from './PostSidebarBody';
import { PostRecommendations } from './PostRecommendations';
//Types
import { TypePost, TypePostSidebarHeading } from '@/src/types/typePosts';

export function PostSidebar({ data }: { data: TypePost }) {
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
    <aside className="p-post__sidebar">
      <div className="p-post__sidebar__menu">
        <PostSidebarHeader />
        <PostSidebarBody structuredHeadings={structuredHeadings} activeId={activeId} />
      </div>
      <PostRecommendations data={data} className="p-post__sidebar__recommendations" />
    </aside>
  );
}

function PostSidebarHeader() {
  return (
    <div className="p-post__sidebar__header">
      <p className="text-primary" data-testid="toc-header-title">
        目錄
      </p>
    </div>
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
  const headings: TypePostSidebarHeading[] = [];
  let currentH2: TypePostSidebarHeading | null = null;

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
