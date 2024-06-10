import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TableOfContentsBody from '@/app/post/[...slug]/_components/tableOfContents/_components/TableOfContentsBody';
import { HeadingType } from '@/app/post/[...slug]/_components/tableOfContents/type';

describe('TableOfContentsBody', () => {
  const mockHeadingsWithoutChildren: HeadingType[] = [
    { text: 'Heading 1', level: 2, id: 'heading-1', children: [] },
    { text: 'Heading 2', level: 2, id: 'heading-2', children: [] },
  ];

  const mockHeadingsWithChildren: HeadingType[] = [
    {
      text: 'Heading 1',
      level: 2,
      id: 'heading-1',
      children: [
        {
          text: 'Subheading 1.1',
          level: 3,
          id: 'subheading-1-1',
          children: [],
        },
      ],
    },
  ];

  const activeId = 'heading-1';

  it('it should render all headings without children', () => {
    const { getByText } = render(
      <TableOfContentsBody
        structuredHeadings={mockHeadingsWithoutChildren}
        activeId={activeId}
      />,
    );

    mockHeadingsWithoutChildren.forEach((heading) => {
      expect(getByText(heading.text)).toBeInTheDocument();
    });
  });

  it('it should render all heading with children', () => {
    const { getByText } = render(
      <TableOfContentsBody
        structuredHeadings={mockHeadingsWithChildren}
        activeId={activeId}
      />,
    );

    mockHeadingsWithChildren.forEach((heading) => {
      expect(getByText(heading.text)).toBeInTheDocument();
      heading.children.forEach((child) => {
        expect(getByText(child.text)).toBeInTheDocument();
      });
    });
  });

  it('every heading should have correct class', () => {
    const { getByText } = render(
      <TableOfContentsBody
        structuredHeadings={mockHeadingsWithoutChildren}
        activeId={activeId}
      />,
    );

    mockHeadingsWithoutChildren.forEach((heading) => {
      const headingElement = getByText(heading.text);
      if (heading.id === activeId) {
        expect(headingElement).toHaveClass('hover:text-primary');
      } else {
        expect(headingElement).toHaveClass(
          'text-gray-500 hover:text-neutral-900',
        );
      }
      if (heading.level === 3) {
        expect(headingElement).toHaveClass('pl-4');
      }
    });
  });
});
