import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TableOfContents from '@/app/post/[slug]/_components/tableOfContents';
import { HeadingType } from '@/app/post/[slug]/_components/tableOfContents/type';

const mockUseGlobalSettings = vi.fn().mockReturnValue({
  isTocCollapsed: false,
  toggleToc: vi.fn(),
});
vi.mock('@/app/_hook/useGlobalSettings', () => ({
  default: () => mockUseGlobalSettings(),
}));

const mockIntersectionObserver = vi.fn().mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

const mockHeadings: HeadingType[] = [
  {
    id: 'heading1',
    text: 'Heading 1',
    level: 2,
    children: [{ id: 'heading2', text: 'Heading 2', level: 3, children: [] }],
  },
];
const setActiveId = vi.fn();
const setIsTocOpen = vi.fn();

describe('TableOfContents Component', () => {
  it('renders without crashing', () => {
    render(
      <TableOfContents
        structuredHeadings={mockHeadings}
        activeId={undefined}
        setActiveId={setActiveId}
        isTocOpen={true}
        setIsTocOpen={setIsTocOpen}
        className=""
      />,
    );
    expect(screen.getByText('Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Heading 2')).toBeInTheDocument();
  });
});
