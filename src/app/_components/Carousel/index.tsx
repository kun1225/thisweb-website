'use client';

import { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import cx from 'classnames';
// import Fade from 'embla-carousel-fade';
// Components
import { PrevButton, NextButton, usePrevNextButtons } from './NavButtons';
import { DotButton, useDotButton } from './DotButton';
// Types
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

export default function Carousel({
  align = 'center',
  breakpoints = {},
  containScroll = 'trimSnaps',
  dragFree = false,
  gap = '0px',
  itemWidth = 100, // as %
  itemMinWidth = 0, // as px
  loop = true,
  slidesToScroll = 1,

  isShowNav = false,
  isShowDots = false,
  // isFade = false,
  isAutoplay = false,
  autoplayInterval = 4000,
  children,
  className,

  isScrollToWhenUpdateIndex = false,
  currentActiveIndex = 0,
  onSelect,
}: {
  align?: string;
  breakpoints?: { [key: string]: number };
  containScroll?: string;
  dragFree?: boolean;
  gap?: string;
  itemWidth?: number;
  itemMinWidth?: number;
  loop?: boolean;
  slidesToScroll?: number;
  isShowNav?: boolean;
  isShowDots?: boolean;
  // isFade?: boolean,
  isAutoplay?: boolean;
  autoplayInterval?: number;
  children?: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];

  isScrollToWhenUpdateIndex?: boolean;
  currentActiveIndex?: number;
  onSelect?: (_emblaApi: EmblaCarouselType) => void;
}) {
  const options = {
    align,
    breakpoints,
    containScroll,
    dragFree,
    loop,
    slidesToScroll,
    inViewThreshold: 1,
    skipSnaps: true,
  };
  const autoplayOptions = {
    delay: autoplayInterval,
    stopOnInteraction: false,
    playOnInit: isAutoplay,
  };
  const plugins = [
    Autoplay(autoplayOptions),
    ClassNames(),
    WheelGesturesPlugin(),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    options as EmblaOptionsType,
    plugins,
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [isSingleSlide, setIsSingleSlide] = useState(true);
  const [isDraggable, setIsDraggable] = useState(true);

  const updateDraggable = useCallback(() => {
    if (emblaApi?.canScrollNext()) {
      setIsDraggable(true);
      emblaApi?.reInit({ watchDrag: true });
    } else {
      setIsDraggable(false);
      emblaApi?.reInit({ watchDrag: false });
    }
  }, [emblaApi]);

  const updateScrollSnap = useCallback(() => {
    const scrollSnapListLength = emblaApi?.scrollSnapList().length!;
    setIsSingleSlide(scrollSnapListLength <= 1);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateDraggable();
    updateScrollSnap();
    emblaApi.on('resize', updateDraggable);
    emblaApi.on('resize', updateScrollSnap);
    if (onSelect) emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('resize', updateDraggable);
      emblaApi.off('resize', updateScrollSnap);
      if (onSelect) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, updateDraggable, updateScrollSnap, onSelect]);

  useEffect(() => {
    if (!emblaApi || !isScrollToWhenUpdateIndex) return;
    emblaApi?.scrollTo(currentActiveIndex);
  }, [emblaApi, currentActiveIndex, isScrollToWhenUpdateIndex]);

  return (
    <div
      className={cx('c-carousel', className)}
      style={
        {
          '--item-width': `${itemWidth}%`,
          '--item-min-width': `${itemMinWidth}px`,
          '--item-gap': gap,
        } as React.CSSProperties
      }
    >
      <div
        ref={emblaRef}
        className={cx('c-carousel__viewport', {
          'disable-draggable': !isDraggable,
        })}
      >
        <div className="c-carousel__container">{children}</div>
      </div>

      {(isShowDots || isShowNav) && !isSingleSlide && isDraggable ? (
        <div className="c-carousel__controls c">
          {isShowDots ? (
            <div className="c-carousel__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  isSelected={index === selectedIndex}
                  index={index}
                />
              ))}
            </div>
          ) : null}

          {isShowNav ? (
            <div className="c-carousel__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
