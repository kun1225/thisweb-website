import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useHeight from '@/app/_hook/useHeight';
import React from 'react';

const TestComponent = () => {
  const { headerHeight } = useHeight();

  return (
    <>
      <div role="headerHeight">{headerHeight}</div>
    </>
  );
};

describe('useHeight', () => {
  afterEach(() => {
    // clean all mocks
    vi.restoreAllMocks();
  });

  it("should set headerHeight to the clientHeight of the element with id 'g-header'", () => {
    // Arrange
    const mockClientHeight = 100;
    const mockElement = {
      clientHeight: mockClientHeight,
    } as HTMLElement;

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);
    const { result } = renderHook(() => useHeight());

    // Act
    const { headerHeight } = result.current;

    // Assert
    expect(headerHeight).toBe(mockClientHeight);
  });

  // headerHeight is initially set to 0.
  // headerHeight is set to 0 if element with id 'g-header' is not found.
  it('should set headerHeight to 0 when useEffect is called with an empty dependency array', () => {
    // Arrange
    const { result } = renderHook(() => useHeight());

    // Act
    const { headerHeight } = result.current;

    // Assert
    expect(headerHeight).toBe(0);
  });
});
