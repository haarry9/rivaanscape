import MdxIcon from '@/components/Home/MdxIcon'
import VercelLogoIcon from '@/components/Home/VercelIcon'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { Github } from '@/components/Icons/StackIcons/github'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import Umami from '@/components/Icons/Umami'

import type React from 'react'

// Simple nav items without icons for server components that need basic nav structure
export const simpleNavItems = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  // { name: 'About', href: '/about' }, // Hidden as requested
]

interface IconData {
  Component: React.FC<{ className?: string }>
  href: string
  className: string
  label: string
}
export const iconData: IconData[] = [
  {
    Component: Nextjs,
    href: 'https://nextjs.org',
    className: 'size-12 dark:invert',
    label: 'Framework',
  },
  {
    Component: Tailwind,
    href: 'https://tailwindcss.com',
    className: 'size-12 grayscale invert dark:invert-0',
    label: 'Utility',
  },
  {
    Component: Shadcn,
    href: 'https://shadcn.dev',
    className: 'size-12',
    label: 'UI lib',
  },
  {
    Component: FramerMotion,
    href: 'https://motion.dev/docs/animate',
    className: 'size-12 dark:invert',
    label: 'Animation',
  },
  {
    Component: MdxIcon,
    href: 'https://mdxjs.com',
    className: 'size-12',
    label: 'Markdown',
  },
  {
    Component: Umami,
    href: 'https://umami.is',
    className: 'size-12 dark:invert',
    label: 'Analytics',
  },
  {
    Component: Github,
    href: 'https://github.com',
    className: 'size-12 dark:invert',
    label: 'Version',
  },
  {
    Component: VercelLogoIcon,
    href: 'https://vercel.com',
    className: 'size-12',
    label: 'Deploy',
  },
]
export const inspirationWebsites = [
  { name: 'antfu.me', url: 'https://antfu.me/' },
  { name: 'beta.vimfn.in', url: 'https://beta.vimfn.in' },
  { name: 'honghong.me', url: 'https://honghong.me' },
  { name: 'leerob.io', url: 'https://leerob.io' },
  { name: 'manuarora.in', url: 'https://manuarora.in/' },
  { name: 'canvas.hrcd.fr', url: 'https://canvas.hrcd.fr/' },
  { name: 'marcbouchenoire.com', url: 'https://marcbouchenoire.com' },
  { name: 'magicui.design', url: 'https://magicui.design/' },
  { name: 'augen.pro', url: 'https://augen.pro/' },
  { name: 'ui.aceternity.com', url: 'https://ui.aceternity.com/' },
]
export const topProjects = [
  {
    imageSrc: '/images/project/kazehire.png',
    title: 'KazeHireAI',
    tags: [
      'Nextjs',
      'TypeScript',
      'Supabase',
      'Google Gemini AI',
      'TailwindCSS',
      'Shadcn UI',
      'React Hook Form',
    ],
    timeline: 'May 2025 - Jun 2025',
    tagline:
      'AI-powered recruitment platform with intelligent candidate matching',
    sourceCodeHref: 'https://github.com/haarry9/KazeHireAI',
    liveDemoHref: 'https://kaze-hire-ai.vercel.app/',
    featured: true,
  },
]
