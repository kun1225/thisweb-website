import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HeadingButton from '@/app/post/[slug]/_components/tableOfContents/_components/HeadingButton';
import { HeadingType } from '@/app/post/[slug]/_components/tableOfContents/type';

describe('HeadingButton Component', () => {
  const heading: HeadingType = {
    text: 'Sample Heading',
    level: 2,
    id: 'sample-heading',
    children: [],
  };

  it('test heading button href', () => {
    const { getByTestId } = render(
      <HeadingButton heading={heading} activeId="sample-heading">
        Child Content
      </HeadingButton>,
    );
    const headingButton = getByTestId('headingButton');
    expect(headingButton).toHaveAttribute('href', '#sample-heading');
  });

  it('if heading button is active, it should have active class', () => {
    const { getByTestId } = render(
      <HeadingButton heading={heading} activeId="sample-heading">
        Child Content
      </HeadingButton>,
    );
    const anchorElement = getByTestId('headingButton');
    expect(anchorElement).toHaveClass('hover:text-primary');
    expect(anchorElement).not.toHaveClass(
      'text-gray-500 hover:text-neutral-900',
    );
  });
  it('if heading button is not active, it should not have active class', () => {
    const { getByTestId } = render(
      <HeadingButton heading={heading} activeId="sample-heading-2">
        Child Content
      </HeadingButton>,
    );

    const anchorElement = getByTestId('headingButton');
    expect(anchorElement).toHaveClass('text-gray-500 hover:text-neutral-900');
    expect(anchorElement).not.toHaveClass('hover:text-primary');
  });

  it('heading button children should be rendered', () => {
    const { getByText } = render(
      <HeadingButton heading={heading} activeId="sample-heading">
        Child Content
      </HeadingButton>,
    );
    const childElement = getByText('Child Content');
    expect(childElement).toBeInTheDocument();
  });
});
