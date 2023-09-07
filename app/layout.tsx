// Next
import type { Metadata } from 'next';

// Style
import './../style/globals.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import PageTransitionLayout from './components/effect/PageTransitionLayout';

export const metadata: Metadata = {
  title: '請網這邊走 ThisWeb - 幫助你自學前端 ',
  description: '',
  creator: 'thisweb',
  keywords: ['thisweb', '請網這邊走', 'js 教學'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-TW">
      <body className={`bg-gray-50 min-h-screen font-bold`}>
        <ProgressBar />
        <Header></Header>
        <PageTransitionLayout className='px-4 md:px-16 lg:px-32 overflow-x-hidden'>
          {children}
        </PageTransitionLayout>
        <Footer></Footer>
      </body>
    </html>
  )
}