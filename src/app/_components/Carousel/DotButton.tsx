import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/src/libs/utils';

export function useDotButton(emblaApi: any, onButtonClick?: (_emblaApi: any) => void) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index: any) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

export const DotButton = ({
  isSelected,
  index,
  children,
  ...props
}: {
  isSelected: boolean;
  index: number;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  const describedLabel = `Switch to slide ${index + 1}`;

  return (
    <button
      type="button"
      className={cn('c-carousel__dot', {
        'is-selected': isSelected,
      })}
      {...props}
    >
      <span className="c-carousel__dot__icon" />
      <span className="sr-only">{describedLabel}</span>
    </button>
  );
};
