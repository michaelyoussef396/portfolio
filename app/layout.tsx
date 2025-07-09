// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'

// OPTIONAL: load Mona Sans from Google Fonts
const monaSans = Mona_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Michael Youssef | Portfolio',
  description: 'Developer. Builder. Creator.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={monaSans.variable}>
      <body>{children}</body>
    </html>
  )
}
