'use client';

import { useEffect, useRef, useState } from 'react';
import { PortableText } from 'next-sanity';
import type { PortableTextComponents } from 'next-sanity';
import Link from 'next/link';
import type { TypeGlobalAnnouncement } from '@/src/types/typeGlobalAnnouncement';
import { hasArrayValue } from '@/src/shared/lib/utils';
import { AnnouncementCountdown } from '@/src/shared/ui/AnnouncementCountDown';

const announcementPortableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const { href } = value;
      return (
        <Link href={href} target="_blank" rel="noopener">
          {children}
        </Link>
      );
    },
  },
};

export function Announcement({ data }: { data: TypeGlobalAnnouncement }) {
  const { announcement } = data;

  const announcementRef = useRef<HTMLDivElement>(null);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const hasProductAnnouncement = document.getElementById('p-product-announcement');
    setShouldShow(!hasProductAnnouncement);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      `${announcementRef.current?.clientHeight || 0}px`
    );
  }, [shouldShow]);

  if (!data || !hasArrayValue(data?.announcement) || !shouldShow) return null;

  return (
    <div
      ref={announcementRef}
      id="g-announcement"
      className="bg-blue-1 fixed top-0 left-0 z-(--z-announcement) flex w-full justify-center gap-1 py-1 text-sm text-white"
    >
      {announcement.map((item) => {
        switch (item._type) {
          case 'dueDate':
            return <AnnouncementCountdown key={item._key} targetTime={item.time} />;
          case 'paragraph':
            return (
              <PortableText
                key={item._key}
                value={item.paragraph}
                components={announcementPortableTextComponents}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
