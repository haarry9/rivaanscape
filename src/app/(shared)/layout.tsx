'use client'

import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import ScrollToTopButton from '@/components/shared/ScrollToTop'
import React from 'react'
import { usePathname } from 'next/navigation'

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  const pathname = usePathname()

  // Use smaller max width for home and work pages for better centering
  const isHomeOrWork = pathname === '/' || pathname === '/work'
  const containerClasses = isHomeOrWork
    ? 'container mx-auto flex min-h-screen max-w-[90vw] sm:max-w-[80vw] md:max-w-[65vw] lg:max-w-[60vw] flex-col px-6 py-5 pt-24 md:px-20 md:pt-28'
    : 'container mx-auto flex min-h-screen max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] flex-col px-4 py-5 pt-24 md:px-16 md:pt-28'

  return (
    <>
      <Header />
      <div className={containerClasses}>{children}</div>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}
