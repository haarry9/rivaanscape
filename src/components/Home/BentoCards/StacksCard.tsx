import { Marquee } from '../Marquee'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Html } from '@/components/Icons/StackIcons/Html'
import { Css } from '@/components/Icons/StackIcons/css'
import { Docker } from '@/components/Icons/StackIcons/docker'
import { Express } from '@/components/Icons/StackIcons/express'
import { Figma } from '@/components/Icons/StackIcons/figma'
import { FramerMotion } from '@/components/Icons/StackIcons/FramerMotion'
import { Git } from '@/components/Icons/StackIcons/git'
import { Github } from '@/components/Icons/StackIcons/github'
import { GithubActions } from '@/components/Icons/StackIcons/githubactions'
import { Graphql } from '@/components/Icons/StackIcons/graphql'
import { Java } from '@/components/Icons/StackIcons/java'
import { JS } from '@/components/Icons/StackIcons/javascript'
import { Mongodb } from '@/components/Icons/StackIcons/mongodb'
import { Postgresql } from '@/components/Icons/StackIcons/postgresql'
import { Postman } from '@/components/Icons/StackIcons/postman'
import { Prisma } from '@/components/Icons/StackIcons/prisma'
import { ReactIcon } from '@/components/Icons/StackIcons/react'
import { Redis } from '@/components/Icons/StackIcons/redis'
import { Sass } from '@/components/Icons/StackIcons/sass'
import { Shadcn } from '@/components/Icons/StackIcons/Shadcn'
import { Sql } from '@/components/Icons/StackIcons/sql'
import { Tailwind } from '@/components/Icons/StackIcons/tailwindcss'
import { Typescript } from '@/components/Icons/StackIcons/typescript'
import { VsCode } from '@/components/Icons/StackIcons/VS'
import { Webpack } from '@/components/Icons/StackIcons/webpack'
import { WebSocket } from '@/components/Icons/StackIcons/Websocket'
import { Cloudflare } from '@/components/Icons/StackIcons/Cloudflare'
import React from 'react'
import { NodejsIcon } from '@/components/Icons/StackIcons/nodejsIcon'
import Stack from '@/components/Icons/Stack'
import BentoCard from './BentoCard'
import Vite from '@/components/Icons/StackIcons/vite'
import { Tooltip } from '@/components/ui/tooltip'

interface TechItem {
  component: React.FC<React.SVGProps<SVGSVGElement>>
  name: string
}

const frontendTech: TechItem[] = [
  { component: Html, name: 'HTML' },
  { component: Css, name: 'CSS' },
  { component: JS, name: 'JavaScript' },
  { component: Typescript, name: 'TypeScript' },
  { component: ReactIcon, name: 'React' },
  { component: Nextjs, name: 'Next.js' },
  { component: Tailwind, name: 'Tailwind CSS' },
  { component: Sass, name: 'Sass' },
  { component: FramerMotion, name: 'Framer Motion' },
  { component: Figma, name: 'Figma' },
  { component: Sql, name: 'SQL' },
  { component: Shadcn, name: 'shadcn/ui' },
  { component: Vite, name: 'Vite' },
  { component: Webpack, name: 'Webpack' },
]

const backendAndTools: TechItem[] = [
  { component: NodejsIcon, name: 'Node.js' },
  { component: Express, name: 'Express.js' },
  { component: Docker, name: 'Docker' },
  { component: Prisma, name: 'Prisma' },
  { component: Postgresql, name: 'PostgreSQL' },
  { component: Mongodb, name: 'MongoDB' },
  { component: Redis, name: 'Redis' },
  { component: Graphql, name: 'GraphQL' },
  { component: Postman, name: 'Postman' },
  { component: VsCode, name: 'VS Code' },
  { component: Git, name: 'Git' },
  { component: Github, name: 'GitHub' },
  { component: GithubActions, name: 'GitHub Actions' },
  { component: WebSocket, name: 'WebSocket' },
  { component: Cloudflare, name: 'Cloudflare' },
  { component: Java, name: 'Java' },
]

const StacksCard = ({ isForSmall = false }: { isForSmall?: boolean }) => {
  return (
    <BentoCard className="group/stack h-64 w-full p-4 lg:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Stack className="size-4" />
        <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
          Stacks
        </h2>
      </div>
      <Marquee gap="24px" className="py-4" fade pauseOnHover>
        {frontendTech.map((tech, index) => {
          const TechComponent = tech.component
          return (
            <Tooltip key={index} content={tech.name}>
              <TechComponent
                id={isForSmall ? `s-${index}` : `${index}`}
                className="size-12 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
              />
            </Tooltip>
          )
        })}
      </Marquee>
      <Marquee gap="24px" className="py-4" reverse fade pauseOnHover>
        {backendAndTools.map((tech, index) => {
          const TechComponent = tech.component
          return (
            <Tooltip key={index} content={tech.name}>
              <TechComponent
                id={isForSmall ? `s2-${index}` : `${index}2`}
                className="size-12 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
              />
            </Tooltip>
          )
        })}
      </Marquee>
    </BentoCard>
  )
}

export default StacksCard
