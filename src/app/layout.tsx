import type { Metadata } from 'next'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'
import { Providers } from './Providers'
import { cath, lombok, neu } from '@/lib/font'
import { Analytics } from '@/components/shared/Analytics'

const info = {
  name: 'Harishankar P V',
  twitter: '@Spacing_Whale',
  description:
    'Full-Stack Developer, Next.js Buff, Freelancer, Always Evolving. Crafting web apps to ignite ideas.',
  url: 'https://rohitsinghrawat.tech',
  image: '/images/RohitSinghRawat.png',
}

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: { default: info.name, template: `%s - ${info.name}` },
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: 'website',
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: 'summary_large_image',
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
}

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neu.variable} ${cath.variable} ${lombok.variable} font-sans`}
      >
        <Providers>
          <div className="relative dark:bg-black">{children}</div>
          <Toaster />
        </Providers>
      </body>
      <Analytics />
    </html>
  )
}
