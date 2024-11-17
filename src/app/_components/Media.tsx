import Video from './Video';
import Img from './Img';
import { TypeMedia } from '@/src/types/typeMedia';
import { HTMLAttributes } from 'react';

export default function Media({
  data,
  className,
}: {
  data: TypeMedia;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}) {
  const { type, image, video } = data || {};

  return (
    <>
      {type === 'video' && video ? (
        <Video data={video} className={className} />
      ) : null}
      {type === 'image' && image ? (
        <Img image={image} className={className} />
      ) : null}
    </>
  );
}
