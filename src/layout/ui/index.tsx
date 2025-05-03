'use client';

// Hooks & Lib
// Components
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
import { Footer } from '@/src/layout/ui/footer';
import { Header } from '@/src/layout/ui/header';

const RootLayoutProgressBar = dynamic(() => import('@/src/layout/ui/progress-bar'));

export function RootLayout({
  headerContent,
  children,
}: {
  headerContent: TypeGlobalHeaderContent;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return children;

  return (
    <>
      <Suspense>
        <RootLayoutProgressBar />
      </Suspense>
      <Header headerContent={headerContent} />
      <main id="main" className="pt-(--header-height) transition-all duration-200 ease-linear">
        {children}
      </main>
      <Footer />
    </>
  );
}
