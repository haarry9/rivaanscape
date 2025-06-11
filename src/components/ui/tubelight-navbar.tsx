"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, FolderOpen, BookOpen, User } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "../Icons/Logo"

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
  const [isMobile, setIsMobile] = useState(false)
  
  // Find the active tab based on current pathname
  const activeItem = navItems.find(item => pathname === item.href) || navItems[0]
  const [activeTab, setActiveTab] = useState(activeItem.name)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab when pathname changes
  useEffect(() => {
    const currentItem = navItems.find(item => pathname === item.href) || navItems[0]
    setActiveTab(currentItem.name)
  }, [pathname])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-6 bg-background/3 border border-border/30 backdrop-blur-lg py-3 px-3 rounded-full shadow-lg md:gap-8 md:py-4 md:px-6">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors md:px-6 md:py-3",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
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
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
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