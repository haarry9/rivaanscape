'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitch from '../shared/ThemeSwitch'
import MobileNavBar from '../shared/MobileNavbar'
import HamburgerMenu from '../shared/HamburgerMenu'
import Logo from '../Icons/Logo'

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  // { name: 'About', href: '/about' }, // Hidden as requested
]

const NavBar = () => {
  const path = usePathname()

  return (
    <div className="flex w-full flex-col items-end justify-between p-4 md:px-10">
      <div className="flex flex-row-reverse items-center justify-between md:flex-row">
        {/* Logo */}
        <Link
          href="/"
          className="border-none bg-transparent opacity-70 outline-none transition-opacity hover:opacity-100"
        >
          <span className="font-mono text-sm">{'>'}_</span>
          <Logo className="size-6" />
        </Link>

        <nav className="hidden gap-1 px-1 py-5 md:flex">
          {navItems.map(({ name, href }) => (
            <div key={name + href}>
              <Link
                className={`relative w-fit overflow-hidden rounded-full px-3 py-2 opacity-50 transition-all ${
                  path === href
                    ? 'bg-white/10 opacity-100'
                    : 'hover:opacity-100'
                }`}
                href={href}
              >
                <span className="relative z-10">{name}</span>
              </Link>
            </div>
          ))}
        </nav>
        <HamburgerMenu />

        <ThemeSwitch />
      </div>
      <MobileNavBar />
    </div>
  )
}

export default NavBar
