'use client';

import { useEffect, useState } from 'react';

export function AnnouncementCountdown({
  targetTime, // ISO 8601 format: '2024-12-23T15:59:00.000Z'
}: {
  targetTime: string;
}) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(() => calculateTimeLeft(targetTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetTime]);

  return (
    <p>
      {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分 {timeLeft.seconds} 秒
    </p>
  );
}

export function calculateTimeLeft(targetTime: string) {
  const targetDate = new Date(targetTime);

  if (isNaN(targetDate.getTime())) {
    console.warn(`Invalid targetTime provided: ${targetTime}`);
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

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
}
