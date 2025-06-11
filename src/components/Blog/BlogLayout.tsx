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
  toc
}: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog" className="mb-8 block">
          <Button variant="ghost" size="sm" className="-ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <header className="mb-12">
              {image && (
                <div className="mb-8 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src={`/images/blogs/${image}`}
                    alt={title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                {title}
              </h1>

              {description && (
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {format(new Date(date), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
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
            <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              {children}
            </article>
          </div>
          <aside className="hidden lg:block lg:col-span-4">
            <TableOfContents toc={toc} />
          </aside>
        </div>
      </div>
      <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <hr className="mb-6 border-border" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Published on {format(new Date(date), 'MMMM dd, yyyy')} by {author}
              </p>
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
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