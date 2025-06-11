import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { topProjects } from '@/lib/constants'
import FeaturedProjectCard from './FeaturedProjectCard'
import BlurFade from '@/components/ui/BlurFade'

const FeaturedProjects = () => {
  const featuredProjects = topProjects.filter(project => project.featured)

  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <BlurFade delay={0.3}>
          <h2 className="text-center text-3xl font-bold tracking-tight dark:text-white md:text-4xl lg:text-5xl">
            Selected Projects
          </h2>
        </BlurFade>
        
        <BlurFade delay={0.4}>
          <p className="mx-auto max-w-2xl text-center text-sm text-gray-600 dark:text-gray-300 md:text-base">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </BlurFade>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <BlurFade key={project.title} delay={0.5 + index * 0.1}>
            <FeaturedProjectCard
              imageSrc={project.imageSrc}
              videoSrc={project.videoSrc}
              title={project.title}
              tags={project.tags}
              timeline={project.timeline}
              tagline={project.tagline}
              liveDemoHref={project.liveDemoHref}
              sourceCodeHref={project.sourceCodeHref}
            />
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.7}>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
          >
            See all projects
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </BlurFade>
    </div>
  )
}

export default FeaturedProjects 