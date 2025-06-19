'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-8"></div>
  }

  function switchTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  function onThemeChange() {
    if (!document.startViewTransition) {
      switchTheme()
    } else {
      document.startViewTransition(switchTheme)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        aria-label="Switch theme"
        type="button"
        onClick={onThemeChange}
        className="flex size-8 items-center justify-center rounded-full bg-muted/50 transition-colors duration-200 ease-in-out hover:bg-muted md:size-9"
      >
        {resolvedTheme === 'light' && (
          <Moon size={14} className="text-foreground/70" />
        )}
        {resolvedTheme === 'dark' && (
          <Sun size={14} className="text-foreground/70" />
        )}
      </button>
    </div>
  )
}
