// Hooks & Libs
import { HTMLAttributes } from 'react';
import { imgBuilder } from '@/src/libs/sanity/client';
import { cn } from '@/src/libs/utils';
// Components
import Image from 'next/image';
// Type
import { TypeImage } from '@/src/libs/sanity/type/typeImage';

export default function Img({
  image,
  alt,
  className,
  responsiveImage,
  breakpoint = 768,
  quality = 80,
  loading = 'lazy',
  withPlaceholder = true,
}: {
  image: TypeImage;
  alt?: string;
  className?: HTMLAttributes<HTMLElement>['className'];
  responsiveImage?: any;
  breakpoint?: number;
  quality?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  withPlaceholder?: boolean;
}) {
  const imageId = getSanityRefId(image);
  const imageDimension = getImageDimensions(imageId);
  const aspectRatio = imageDimension?.aspectRatio;
  const imageWidth = imageDimension?.width;
  const imageHeight = aspectRatio
    ? Math.round(imageWidth / aspectRatio)
    : imageDimension?.height;
  const src = buildImageSrc(image, {
    width: imageWidth,
    height: imageHeight,
    quality,
  });

  const responsiveImageSrc = buildImageSrc(responsiveImage, {
    quality,
  });

  if (!image || !imageId || !src) return null;

  return (
    <picture
      className={cn('c-img', className, {
        'border rounded bg-neutral-100': withPlaceholder,
      })}
    >
      {responsiveImageSrc ? (
        <>
          <source media={`(min-width: ${breakpoint + 1}px)`} srcSet={src} />
          <source
            media={`(max-width: ${breakpoint}px)`}
            srcSet={responsiveImageSrc}
          />
        </>
      ) : null}
      <Image
        src={src}
        quality={quality}
        loading={loading}
        fill
        alt={alt || image.alt || 'image'}
        className="c-img__img"
      />
    </picture>
  );
}

function getSanityRefId(image: any) {
  if (!image) return null;
  if (typeof image === 'string') {
    return image;
  }

  if (image?.asset) {
    return image?.asset?._ref || image?.asset?._id;
  }

  return image?._ref || image?._id || false;
}

function getImageDimensions(id: any) {
  if (!id) return null;

  const dimensions = id.split('-')[2];
  const [width, height] = dimensions
    .split('x')
    .map((num: any) => parseInt(num, 10));
  const aspectRatio = width / height;

  return { width, height, aspectRatio };
}

export function buildImageSrc(
  image: any,
  { width, height, format, quality = 80 }: any,
) {
  if (!image) return null;

  let imgSrc = imgBuilder.image(image);

  if (width) {
    imgSrc = imgSrc.width(Math.round(width));
  }

  if (height) {
    imgSrc = imgSrc.height(Math.round(height));
  }

  if (format) {
    imgSrc = imgSrc.format(format);
  }

  if (quality) {
    imgSrc = imgSrc.quality(quality);
  }

  return imgSrc.fit('max').auto('format').url();
}
