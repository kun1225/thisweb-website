'use client';

import { useEffect, useRef, useState } from 'react';
import { PortableText } from 'next-sanity';
import type { PortableTextComponents } from 'next-sanity';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { TypeGlobalAnnouncement } from '@/src/types/typeGlobalAnnouncement';
import { TypeLayout } from '@/src/types/typeLayout';
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

export function Announcement({
  data,
  products,
}: {
  data: TypeGlobalAnnouncement;
  products: TypeLayout['products'];
}) {
  const { announcement } = data;

  const pathname = usePathname();

  const currentProductPage = products.find((product) => pathname.includes(product.slug.current));
  const shouldShowAnnouncement =
    currentProductPage && hasArrayValue(currentProductPage?.announcement);

  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setAnnouncementHeight = () => {
      document.documentElement.style.setProperty(
        '--announcement-height',
        `${announcementRef.current?.clientHeight || 0}px`
      );
    };

    setAnnouncementHeight();

    window.addEventListener('resize', setAnnouncementHeight);
    return () => {
      window.removeEventListener('resize', setAnnouncementHeight);
    };
  }, []);

  if (!data || !hasArrayValue(data?.announcement) || !shouldShowAnnouncement) return null;

  return (
    <div
      ref={announcementRef}
      id="g-announcement"
      className="bg-blue-1 fixed top-0 left-0 z-(--z-announcement) flex w-full flex-wrap justify-center gap-1 p-2 text-center text-sm text-pretty text-white"
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
