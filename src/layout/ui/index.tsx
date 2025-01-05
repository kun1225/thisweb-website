'use client';

// Hooks & Lib
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
// Components
import { Suspense } from 'react';
import { Header } from '@/src/layout/ui/header';
import { Footer } from '@/src/layout/ui/footer';

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
      <main id="main" className="pt-header">
        {children}
      </main>
      <Footer />
    </>
  );
}
