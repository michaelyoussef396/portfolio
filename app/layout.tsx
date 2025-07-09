import './globals.css'
import type { Metadata } from 'next'
import { Mona_Sans } from 'next/font/google'

const monaSans = Mona_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Michael Youssef | Melbourne Full-Stack Developer',
    template: '%s | Michael Youssef',
  },
  description:
    'Melbourne-based full-stack developer building modern, scalable web experiences with Next.js, TypeScript, Python, Flask, and SQL. Portfolio of Michael Youssef.',
  keywords: [
    'Michael Youssef',
    'Melbourne developer',
    'full-stack developer Australia',
    'Next.js portfolio',
    'React TypeScript developer',
    'Python Flask developer',
    'freelance developer Melbourne',
    'web developer portfolio',
    'hire developer Australia',
  ],
  metadataBase: new URL('https://michaelyoussefdev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Michael Youssef | Full-Stack Developer in Melbourne',
    description:
      'Explore the portfolio of Melbourne-based full-stack developer Michael Youssef. Specialized in Next.js, TypeScript, Python, and scalable web solutions.',
    url: 'https://michaelyoussefdev.com',
    siteName: 'Michael Youssef Portfolio',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Michael Youssef Developer Portfolio Screenshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael Youssef | Full-Stack Developer in Melbourne',
    description:
      'Hire Melbourne-based full-stack developer Michael Youssef. Clean code. Fast builds. Real results.',
    creator: '@michaelydev', // optional
    images: ['/og-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#0a0a0a',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={monaSans.variable}>
      <body>{children}</body>
    </html>
  )
}
