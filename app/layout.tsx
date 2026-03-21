import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const redactionItalic = localFont({
  src: '../public/RedactionItalic-lgB8w.otf',
  variable: '--font-redaction',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
  title: 'Operator Terminal',
  description: 'AI-powered business operating system for generating proposals, landing pages, and more',
  generator: 'v0.app',
  icons: {
    icon: '/yellowaafav.png',
    shortcut: '/yellowaafav.png',
    apple: '/yellowaafav.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={redactionItalic.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
