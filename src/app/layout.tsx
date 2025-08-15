import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/common/SmoothScrollProvider';
import Header from '@/components/common/Header';
import Contact from '@/components/common/Contact';
import localFont from 'next/font/local';
import GlobalModal from '@/components/modal/Global';
import OrientationGuide from '@/components/common/OrientationGuide';

const pretendard = localFont({
  src: '../../public/fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700'],
});
export const metadata: Metadata = {
  title: '강민승 포트폴리오',
  description: '프론트엔드 개발자 강민승의 포트폴리오 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} ${orbitron.variable} antialiased`}>
        <Header />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Contact />
        <GlobalModal />
        <OrientationGuide />
      </body>
    </html>
  );
}
