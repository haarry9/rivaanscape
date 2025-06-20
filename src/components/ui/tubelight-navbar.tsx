'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, FolderOpen, BookOpen } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from '../Icons/Logo'
import ThemeSwitch from '../shared/ThemeSwitch'

interface NavItem {
  name: string
  href: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

// Define nav items with icons inside the client component (excluding Home since logo will be separate)
const navItems: NavItem[] = [
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  // { name: 'About', href: '/about', icon: User }, // Hidden as requested
]

export function NavBar({ className }: NavBarProps) {
  const pathname = usePathname()

  // Find the active tab based on current pathname
  const allItems = useMemo(
    () => [{ name: 'Home', href: '/', icon: Home }, ...navItems],
    []
  )
  const activeItem =
    allItems.find((item) => pathname === item.href) || allItems[0]
  const [activeTab, setActiveTab] = useState(activeItem.name)

  // Update active tab when pathname changes
  useEffect(() => {
    const currentItem =
      allItems.find((item) => pathname === item.href) || allItems[0]
    setActiveTab(currentItem.name)
  }, [pathname, allItems])

  return (
    <div className={cn('fixed left-0 top-0 z-50 w-full pt-4', className)}>
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="flex items-center justify-between rounded-full border border-border/30 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-lg md:px-4 md:py-2.5">
          {/* Logo on the left */}
          <Link
            href="/"
            onClick={() => setActiveTab('Home')}
            className="flex items-center gap-2 text-foreground/80 opacity-70 transition-opacity hover:opacity-100"
          >
            <Logo className="h-10 w-20 dark:invert md:h-14 md:w-28" />
          </Link>

          {/* Navigation items in the center */}
          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    'relative cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold transition-colors md:px-4 md:py-2',
                    'text-foreground/80 hover:text-primary',
                    isActive && 'bg-muted text-primary'
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={16} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 -z-10 w-full rounded-full bg-primary/5"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-1.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-t-full bg-primary md:-top-2 md:h-1 md:w-8">
                        <div className="absolute -left-1.5 -top-1.5 h-4 w-9 rounded-full bg-primary/20 blur-sm md:-left-2 md:-top-2 md:h-6 md:w-12 md:blur-md" />
                        <div className="absolute -top-0.5 h-4 w-6 rounded-full bg-primary/20 blur-sm md:-top-1 md:h-6 md:w-8 md:blur-md" />
                        <div className="absolute left-1.5 top-0 size-3 rounded-full bg-primary/20 blur-sm md:left-2 md:size-4" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Theme Switch on the right */}
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}
