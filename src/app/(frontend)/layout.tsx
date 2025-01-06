import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
// import { GeistMono } from 'geist/font/mono'
// import { GeistSans } from 'geist/font/sans'
import localFont from 'next/font/local'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const PublicSans = localFont({
  src: [
    {
      path: '../../../public/fonts/PublicSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/PublicSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-public-sans',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  // console.log(PublicSans.className, PublicSansItalic.className)
  return (
    <html className={cn(PublicSans.className)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          {/* <Header /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
  },
}
