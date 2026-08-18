import { Instrument_Serif } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'ComicFlow | Your local comics, beautifully curated.',
  description: 'A premium, lightning-fast local comic reader for CBZ and CBR files. Built with Rust and Tauri for 100% privacy.',
  generator: 'ComicFlow',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090909',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}