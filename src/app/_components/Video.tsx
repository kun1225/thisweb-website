'use client';

import cx from 'classnames';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { TypeVideo } from '@/src/types/typeVideo';

import { urlForImg, getFile } from '@/src/libs/sanity/client';

export default function Video({
  data,
  className,
  autoPlay = true,
}: {
  data: TypeVideo;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  autoPlay?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { file, thumbnail } = data || {};

  // const posterUrl = thumbnail?.asset ? urlForImg(thumbnail) : null;

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const supportedVideoFormats = ['mp4', 'webm', 'ogg'];

  const getVideoType = (file: any) => {
    const extension = getFile(file).extension;
    if (supportedVideoFormats.includes(extension)) {
      return `video/${extension}`;
    } else if (extension === 'mov') {
      return 'video/quicktime';
    }

    return 'video/mp4';
  };

  if (!file) return null;

  return (
    <InView
      as="div"
      className={cx('c-video', className)}
      onChange={(inView) => {
        if (autoPlay) {
          if (inView) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }
      }}
    >
      <video
        ref={videoRef}
        preload="auto"
        controls={false}
        loop
        muted={autoPlay}
        playsInline
        className={cx({
          'is-ready': videoRef.current,
        })}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.volume = autoPlay ? 0 : 1;
          }
        }}
      >
        <source src={getFile(file).url} type={getVideoType(file)} />
      </video>
    </InView>
  );
}
