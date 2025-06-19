'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, FolderOpen, BookOpen } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from '../Icons/Logo'

interface NavItem {
  name: string
  href: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

// Define nav items with icons inside the client component
const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Work', href: '/work', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  // { name: 'About', href: '/about', icon: User }, // Hidden as requested
]

export function NavBar({ className }: NavBarProps) {
  const pathname = usePathname()

  // Find the active tab based on current pathname
  const activeItem =
    navItems.find((item) => pathname === item.href) || navItems[0]
  const [activeTab, setActiveTab] = useState(activeItem.name)

  // Update active tab when pathname changes
  useEffect(() => {
    const currentItem =
      navItems.find((item) => pathname === item.href) || navItems[0]
    setActiveTab(currentItem.name)
  }, [pathname])

  return (
    <div
      className={cn(
        'fixed left-1/2 top-0 z-50 -translate-x-1/2 pt-6',
        className
      )}
    >
      <div className="bg-background/3 flex items-center gap-6 rounded-full border border-border/30 p-3 shadow-lg backdrop-blur-lg md:gap-8 md:px-6 md:py-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                'relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-6 md:py-3',
                'text-foreground/80 hover:text-primary',
                isActive && 'bg-muted text-primary'
              )}
            >
              {item.name === 'Home' ? (
                <Logo className="h-5 w-8 dark:invert md:h-6 md:w-10" />
              ) : (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </>
              )}
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
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute left-2 top-0 size-4 rounded-full bg-primary/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
