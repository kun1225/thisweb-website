import Video from './Video';
import Img from './Img';
import { TypeMedia } from '@/src/types/typeMedia';
import { HTMLAttributes } from 'react';

export default function Media({
  data,
  className,
  withPlaceholder,
  ...props
}: {
  data: TypeMedia;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  withPlaceholder?: boolean;
  [key: string]: any;
}) {
  const { type, image, video } = data || {};

  return (
    <>
      {type === 'video' && video ? <Video data={video} className={className} {...props} /> : null}
      {type === 'image' && image ? (
        <Img image={image} className={className} withPlaceholder={withPlaceholder} {...props} />
      ) : null}
    </>
  );
}
