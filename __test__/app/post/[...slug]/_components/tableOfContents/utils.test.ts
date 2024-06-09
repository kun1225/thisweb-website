import { it, expect, describe, vitest, beforeEach } from 'vitest';
import {
  getIndexFromId,
  findLastVisibleHeadingEntry,
  observeHeading,
  transformRawHeadings,
} from '@/app/post/[...slug]/_components/tableOfContents/utils';
import { HeadingType } from '@/app/post/[...slug]/_components/tableOfContents/type';

describe('getIndexFromId', () => {
  it('should return correct index when id is present in headingElements', () => {
    const headingElements = [
      { id: 'heading1' } as Element,
      { id: 'heading2' } as Element,
      { id: 'heading3' } as Element,
    ];
    const id = 'heading2';
    const index = getIndexFromId(headingElements, id);
    expect(index).toBe(1);
  });

  it('should return -1 when headingElements array is empty', () => {
    const headingElements: Element[] = [];
    const id = 'heading1';
    const index = getIndexFromId(headingElements, id);
    expect(index).toBe(-1);
  });
});

describe('findLastVisibleHeadingEntry', () => {
  it('should return the last visible heading entry when multiple headings are intersecting', () => {
    const headingElements = [
      { id: 'heading1' },
      { id: 'heading2' },
      { id: 'heading3' },
    ] as Element[];

    const headingsEntry = [
      { target: { id: 'heading1' }, isIntersecting: true },
      { target: { id: 'heading2' }, isIntersecting: true },
    ] as IntersectionObserverEntry[];

    const result = findLastVisibleHeadingEntry(headingsEntry, headingElements);

    expect(result!.target.id).toBe('heading2');
  });

  it('should return undefined when headingsEntry is an empty array', () => {
    const headingElements = [
      { id: 'heading1' },
      { id: 'heading2' },
      { id: 'heading3' },
    ] as Element[];

    const headingsEntry = [] as IntersectionObserverEntry[];

    const result = findLastVisibleHeadingEntry(headingsEntry, headingElements);

    expect(result).toBeUndefined();
  });
});

describe('observeHeading', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vitest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should call IntersectionObserver one time', () => {
    document.body.innerHTML = '<h1 id="heading1">Heading 1</h1>';
    const headingElements = Array.from(document.querySelectorAll('h2'));
    const setActiveId = vitest.fn();

    const observer = observeHeading(headingElements, setActiveId);

    expect(global.IntersectionObserver).toBeCalledTimes(1);
  });
});

describe('transformRawHeadings', () => {
  it('should correctly transform a list of raw headings with both h2 and h3 styles', () => {
    const rawHeadings = [
      { style: 'h2', children: [{ text: 'Heading 1' }] },
      { style: 'h3', children: [{ text: 'Subheading 1.1' }] },
      { style: 'h2', children: [{ text: 'Heading 2' }] },
      { style: 'h3', children: [{ text: 'Subheading 2.1' }] },
    ];

    const result = transformRawHeadings(rawHeadings);

    expect(result).toEqual([
      {
        text: 'Heading 1',
        level: 2,
        id: 'heading1',
        children: [
          {
            text: 'Subheading 1.1',
            level: 3,
            id: 'subheading11',
          },
        ],
      },
      {
        text: 'Heading 2',
        level: 2,
        id: 'heading2',
        children: [
          {
            text: 'Subheading 2.1',
            level: 3,
            id: 'subheading21',
          },
        ],
      },
    ]);
  });

  // returns an empty list when given an empty input
  it('should return an empty list when given an empty input', () => {
    const rawHeadings: HeadingType[] = [];
    const result = transformRawHeadings(rawHeadings);
    expect(result).toEqual([]);
  });
});
