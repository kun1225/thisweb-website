import { type MutableRefObject, useLayoutEffect, useRef, useState } from 'react';

export type TypeMouseState = {
  x: number;
  y: number;
  screenX: number;
  screenY: number;
  elementX: number;
  elementY: number;
  elementPositionX: number;
  elementPositionY: number;
};

export function useMouse(): [TypeMouseState, MutableRefObject<HTMLElement | null>] {
  const [state, setState] = useState<TypeMouseState>({
    x: 0,
    y: 0,
    screenX: 0,
    screenY: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
  });

  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newState: Partial<TypeMouseState> = {
        x: event.pageX,
        y: event.pageY,
        screenX: event.screenX,
        screenY: event.screenY,
      };

      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((prev) => ({
        ...prev,
        ...newState,
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [state, ref];
}
