import './globals.css';
import type { Metadata } from 'next'

import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: '請網這邊走 ThisWeb - 幫助你自學前端 ',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-TW">
      <body className={`bg-gray-50 min-h-screen`}>
        <Header></Header>
        <main className='px-4 md:px-16  lg:px-32'>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
