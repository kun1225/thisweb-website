// Next
import type { Metadata } from 'next';
import { JetBrains_Mono, Noto_Sans_TC, Inter } from 'next/font/google';

// Style
import '../style/globals.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import PageTransitionLayout from './components/effect/PageTransitionLayout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '請網這邊走 ThisWeb - 幫助你自學前端 ',
  description: '',
  creator: 'thisweb',
  keywords: ['thisweb', '請網這邊走', 'js 教學'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      className={`${inter.className} ${jetBrainsMono.className} ${notoSansTC.className} `}
    >
      <body>
        <ProgressBar />
        <Header />
        <PageTransitionLayout className="px-4 md:px-8 lg:px-20 xl:px-32">
          {children}
        </PageTransitionLayout>
        <Footer />
      </body>
    </html>
  );
}
