'use client';

// Hooks & Libs
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { GlobalSettingsProvider } from '../../_context/globalSettings';
// Type
import { TypeGlobalHeaderContent } from '@/src/types/typeGlobalHeader';
// Components
import { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const ProgressBar = dynamic(() => import('@/src/shared/ui/ProgressBar'));

export default function SiteLayout({
  headerContent,
  children,
}: {
  headerContent: TypeGlobalHeaderContent;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname.startsWith('/studio')) return children;

  return (
    <GlobalSettingsProvider>
      <Suspense>
        <ProgressBar />
      </Suspense>
      <Header headerContent={headerContent} />
      <main id="main" className="pt-header">
        {children}
      </main>
      <Footer />
    </GlobalSettingsProvider>
  );
}
