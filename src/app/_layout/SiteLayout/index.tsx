'use client';

// Hooks & Libs
import { usePathname } from 'next/navigation';
import { GlobalSettingsProvider } from '../../_context/globalSettings';
// Components
import { Suspense } from 'react';
import GHeader from '../Header';
import Footer from '../Footer';
import ProgressBar from '../../_components/ProgressBar';
// Type
import { TypeGlobalHeaderContent } from '@/src/libs/sanity/type/typeGlobalHeader';

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
      <GHeader headerContent={headerContent} />
      <main className="transition duration-[0.6s]" id="g-main">
        {children}
      </main>
      <Footer />
    </GlobalSettingsProvider>
  );
}
