'use client';

import { useEffect, useRef } from 'react';
import type { TypeProductAnnouncement } from '@/src/types/typePageProduct';
import { createPortal } from 'react-dom';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { useIsMounted } from '@/src/shared/hooks/useIsMounted';
import { AnnouncementCountdown } from '@/src/shared/ui/AnnouncementCountDown';

export default function ProductAnnouncement({ data }: { data: TypeProductAnnouncement }) {
  const isMounted = useIsMounted();

  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      `${announcementRef.current?.clientHeight || 0}px`
    );

    return () => {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, []);

  if (!isMounted || !hasArrayValue(data)) return null;

  return createPortal(
    <div
      ref={announcementRef}
      id="p-product-announcement"
      className="bg-blue-1 fixed top-0 left-0 z-(--z-announcement) flex w-full justify-center gap-1 py-1 text-sm text-white"
    >
      {data.map((item) => {
        switch (item._type) {
          case 'dueDate':
            return <AnnouncementCountdown key={item._key} targetTime={item.time} />;
          case 'paragraph':
            return <p key={item._key}>{item.paragraph}</p>;
          default:
            return null;
        }
      })}
    </div>,
    document?.body
  );
}
