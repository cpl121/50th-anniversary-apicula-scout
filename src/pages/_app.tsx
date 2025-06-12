// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Playfair_Display } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Grupo Scout Apícula - 50 Años de Aventuras</title>
        <meta name="description" content="Celebra los 50 años del Grupo Scout Apícula con nuestro juego interactivo con Realidad Aumentada." />

        <meta property="og:title" content="Grupo Scout Apícula - 50 Años de Aventuras" />
        <meta property="og:description" content="Juego interactivo scout con realidad aumentada y objetos impresos en 3D." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://50th-anniversary-apicula-scout.vercel.app/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupo Scout Apícula - 50 Años de Aventuras" />
        <meta name="twitter:description" content="Juego interactivo scout con realidad aumentada y objetos impresos en 3D." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        async
        strategy="afterInteractive"
        type="module"
        src="https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js"
      />
      <div className={`${inter.variable} ${playfair.variable} font-sans scroll-smooth`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
