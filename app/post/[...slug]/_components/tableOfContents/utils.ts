import GithubSlugger from 'github-slugger';

import { HeadingType } from './type';

export function getIndexFromId(headingElements: Element[], id: string) {
  return headingElements.findIndex((heading) => heading.id === id);
}

export function findLastVisibleHeadingEntry(
  headingsEntry: IntersectionObserverEntry[],
  headingElements: Element[],
) {
  return headingsEntry.sort(
    (a, b) =>
      getIndexFromId(headingElements, b.target.id) -
      getIndexFromId(headingElements, a.target.id),
  )[0];
}

export function observeHeading(
  headingElements: Element[],
  setActiveId: (id: string) => void,
) {
  const setCurrentActiveId = (headingsEntry: IntersectionObserverEntry[]) => {
    if (!headingsEntry[0]?.isIntersecting) return;

    if (headingsEntry.length === 1) {
      setActiveId(headingsEntry[0]!.target.id);
    } else if (headingsEntry.length > 1) {
      const lastVisibleHeadingEntry = findLastVisibleHeadingEntry(
        headingsEntry,
        headingElements,
      );

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
}

export function extractHeadings(source: any[]): any[] {
  return source.filter((block) => ['h2', 'h3'].includes(block.style));
}
