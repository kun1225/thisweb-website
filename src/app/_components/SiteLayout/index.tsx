'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { GlobalSettingsProvider } from '../../_context/globalSettings';
import Header from '../Header';
import Footer from '../Footer';
import ProgressBar from '../ProgressBar';

export default function SiteLayout({
  headerContent,
  children,
}: {
  headerContent: any;
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
      <main className="transition duration-[0.6s]" id="g-main">
        {children}
      </main>
      <Footer />
    </GlobalSettingsProvider>
  );
}
