import DynamicHead from '@/components/DynamicHead';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Mulish } from 'next/font/google';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const inter = Mulish({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <DynamicHead />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
