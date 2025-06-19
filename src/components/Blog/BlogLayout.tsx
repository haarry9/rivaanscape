import { ReactNode } from 'react'
import { format } from 'date-fns'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TableOfContents } from './TableOfContents'

// Update to match Velite's actual TOC structure
interface TocItem {
  title: string
  url: string
  items: TocItem[]
}

interface BlogLayoutProps {
  title: string
  description?: string
  date: string
  author: string
  tags: string[]
  readingTime: number
  children: ReactNode
  image?: string
  toc: TocItem[]
}

export function BlogLayout({
  title,
  description,
  date,
  author,
  tags,
  readingTime,
  children,
  image,
  toc,
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog" className="mb-8 block">
          <Button variant="ghost" size="sm" className="-ml-2">
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <header className="mb-12">
              {image && (
                <div className="mb-8 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={`/images/blogs/${image}`}
                    alt={title}
                    width={1200}
                    height={675}
                    className="size-full object-cover"
                    priority
                  />
                </div>
              )}
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {title}
              </h1>

              {description && (
                <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
                  {description}
                </p>
              )}

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 size-4" />
                  {format(new Date(date), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <User className="mr-2 size-4" />
                  {author}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 size-4" />
                  {readingTime} min read
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>
            <article className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
              {children}
            </article>
          </div>
          <aside className="hidden lg:col-span-4 lg:block">
            <TableOfContents toc={toc} />
          </aside>
        </div>
      </div>
      <footer className="mt-16 border-t border-border/40">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <hr className="mb-6 border-border" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Published on {format(new Date(date), 'MMMM dd, yyyy')} by{' '}
                {author}
              </p>
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 size-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
