'use client';

import { useEffect, useRef } from 'react';
import { PortableText } from 'next-sanity';
import type { PortableTextComponents } from 'next-sanity';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const { global: globalAnnouncement, products: productsData } = data || {};

  const pathname = usePathname();

  const currentProductPage = productsData.find((product) => pathname.includes(product.slug));

  const currentAnnouncement = currentProductPage?.announcement || globalAnnouncement;

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

  if (!data || !hasArrayValue(currentAnnouncement)) return null;

  return (
    <div
      ref={announcementRef}
      id="g-announcement"
      className="bg-blue-1 relative z-(--z-announcement) flex w-full flex-wrap justify-center gap-1 p-2 text-center text-sm text-pretty text-white"
    >
      {currentAnnouncement.map((item) => {
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
