'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { type TypeLayout } from '@/src/types/typeLayout';
import { Footer } from '@/src/layout/ui/footer';
import { Header } from '@/src/layout/ui/header';
import { Announcement } from './Announcement';

const RootLayoutProgressBar = dynamic(() => import('@/src/layout/ui/progress-bar'));

export function RootLayout({ data, children }: { data: TypeLayout; children: React.ReactNode }) {
  const { header, announcement, products } = data;

  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return children;

  return (
    <>
      <Suspense>
        <RootLayoutProgressBar />
      </Suspense>
      <Announcement data={announcement} products={products} />
      <Header headerContent={header} />
      <main id="main" className="pt-(--header-height) transition-all duration-200 ease-linear">
        {children}
      </main>
      <Footer />
    </>
  );
}
