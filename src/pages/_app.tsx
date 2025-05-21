import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Apicula - 50 Años de Aventuras',
  description: 'Celebra los 50 años del Grupo Scout Apicula con nuestro juego interactivo',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <html lang="es" />
      </Head>
      <Script
        async
        strategy='afterInteractive'
        type='module'
        src='https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js'
      />
      <div className={`${inter.variable} ${playfair.variable} font-sans scroll-smooth`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
