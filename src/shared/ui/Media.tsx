import { HTMLAttributes } from 'react';
import { TypeMedia } from '@/src/types/typeMedia';
import Img from './Img';
import Video from './Video';

export default function Media({
  data,
  className,
  imgClassName,
  withPlaceholder,
  ...props
}: {
  data: TypeMedia;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  imgClassName?: HTMLAttributes<HTMLImageElement>['className'];
  withPlaceholder?: boolean;
  [key: string]: any;
}) {
  const { type, image, video } = data || {};

  return (
    <>
      {type === 'video' && video ? <Video data={video} className={className} {...props} /> : null}
      {type === 'image' && image ? (
        <Img
          image={image}
          className={className}
          imgClassName={imgClassName}
          withPlaceholder={withPlaceholder}
          {...props}
        />
      ) : null}
    </>
  );
}
