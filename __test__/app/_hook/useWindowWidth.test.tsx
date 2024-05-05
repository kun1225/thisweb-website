import { vi, describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import useWindowWidth from '@/app/_hook/useWindowWidth';



// Mock theme
vi.mock('@/style/theme', () => (
  {
    default: {
      screens: {
        lg: '1024px',
        md: '768px',
        // Add other screen sizes or theme properties as necessary
      },
    },
  }
));

const TestComponent = () => {
  const { windowWidth, isDesktop, isTablet, isMobile } = useWindowWidth();

  return (
    <div>
      <div role='windowWidth'>{windowWidth}</div>
      <div role='isDesktop'>{isDesktop ? 'true' : 'false'}</div>
      <div role='isTablet'>{isTablet ? 'true' : 'false'}</div>
      <div role='isMobile'>{isMobile ? 'true' : 'false'}</div>
    </div>
  );
};


describe('useWindowWidth', () => {

  const resizeWindow = (width: number) => {
    // Simulate window resize
    act(() => {
      // Simulate window resize
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
      });
      window.dispatchEvent(new Event('resize'));
    });
  };

  it('updates isMobile, isTablet, and isDesktop based on window width', () => {
    // Initial render
    render(<TestComponent />);

    const windowWidthElement = screen.getByRole('windowWidth');
    const isDesktopElement = screen.getByRole('isDesktop');
    const isTabletElement = screen.getByRole('isTablet');
    const isMobileElement = screen.getByRole('isMobile');

    resizeWindow(500); // Simulate resizing to mobile width
    expect(windowWidthElement).toHaveTextContent('500');
    expect(isDesktopElement).toHaveTextContent('false');
    expect(isTabletElement).toHaveTextContent('false');
    expect(isMobileElement).toHaveTextContent('true');

    resizeWindow(800); // Simulate resizing to tablet width
    expect(windowWidthElement).toHaveTextContent('800');
    expect(isDesktopElement).toHaveTextContent('false');
    expect(isTabletElement).toHaveTextContent('true');
    expect(isMobileElement).toHaveTextContent('false');

    resizeWindow(1200); // Simulate resizing to desktop width
    expect(windowWidthElement).toHaveTextContent('1200');
    expect(isDesktopElement).toHaveTextContent('true');
    expect(isTabletElement).toHaveTextContent('false');
    expect(isMobileElement).toHaveTextContent('false');
  });
});

