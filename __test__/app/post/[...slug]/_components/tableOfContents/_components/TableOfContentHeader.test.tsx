import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vitest } from 'vitest';
import TableOfContentHeader from '@/src/app/(site)/post/[slug]/_components/PostTOC/_components/TableOfContentHeader';

describe('TableOfContentHeader Component', () => {
  const toggleToc = vitest.fn();
  const setIsTocOpen = vitest.fn();

  test('toggleToc and setIsTocOpen should be called one time', () => {
    const { getByTitle } = render(
      <TableOfContentHeader
        toggleToc={toggleToc}
        setIsTocOpen={setIsTocOpen}
        isTocCollapsed={false}
      />,
    );

    fireEvent.click(getByTitle('顯示文章目錄'));
    expect(toggleToc).toBeCalledTimes(1);
    expect(setIsTocOpen).toBeCalledTimes(1);
  });

  test('the icon should be hidden on collapse toc', () => {
    const { getByTestId } = render(
      <TableOfContentHeader
        toggleToc={toggleToc}
        setIsTocOpen={setIsTocOpen}
        isTocCollapsed={true}
      />,
    );

    const icon = getByTestId('toc-header-icon');
    expect(icon).toHaveClass('opacity-0');
  });
});
