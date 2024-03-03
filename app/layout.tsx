// Next
import type { Metadata } from 'next';

// Style
import '../style/globals.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import { Suspense } from 'react';

// Metadata
export const metadata: Metadata = {
  title: '請網這邊走 ThisWeb - 幫助你自學前端 ',
  description:
    '提供完整入門教學、JS 核心觀念，讓你快速上手網頁程式，學會核心技能，轉職更順利。',
  creator: 'thisweb',
  keywords: ['thisweb', '請網這邊走', 'js 教學'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
          <Header />
          {/* <PageTransitionLayout className="px-4 md:px-8 lg:px-20 xl:px-32">
          {children}
        </PageTransitionLayout> */}
          <main className="px-4 md:px-8 lg:px-16 xl:px-20">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
