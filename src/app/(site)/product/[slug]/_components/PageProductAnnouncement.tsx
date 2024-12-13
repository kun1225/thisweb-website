'use client';
import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import useIsMounted from '@/src/app/_hooks/useIsMounted';
import { hasArrayValue } from '@/src/libs/helpers';
import type { TypePageProductAnnouncement } from '@/src/types/typePageProduct';

export default function PageProductAnnouncement({
  data,
}: {
  data: TypePageProductAnnouncement;
}) {
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      `${announcementRef.current?.clientHeight || 0}px`,
    );
  }, []);

  if (!hasArrayValue(data)) return null;

  return createPortal(
    <div ref={announcementRef} className="m-product__announcement">
      {data.map((item) => {
        switch (item._type) {
          case 'dueDate':
            return (
              <PageProductAnnouncementCountdown
                key={item._key}
                targetTime={item.time}
              />
            );
          case 'paragraph':
            return <p key={item._key}>{item.paragraph}</p>;
          default:
            return null;
        }
      })}
    </div>,
    document.body,
  );
}

export function PageProductAnnouncementCountdown({
  targetTime, // ISO 8601 format: '2024-12-23T15:59:00.000Z'
}: {
  targetTime: string;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>();

  const calculateTimeLeft = () => {
    const targetDate = new Date(targetTime);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  if (!timeLeft) return null;

  return (
    <p>
      {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分{' '}
      {timeLeft.seconds} 秒
    </p>
  );
}
