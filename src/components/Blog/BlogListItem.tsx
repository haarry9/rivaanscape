import Link from 'next/link'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar } from 'lucide-react'
import Image from 'next/image'

interface BlogListItemProps {
  slug: string
  title: string
  description?: string
  date: string
  author: string
  tags: string[]
  readingTime: number
  featured: boolean
  excerpt?: string
  image?: string
}

export function BlogListItem({
  slug,
  title,
  description,
  date,
  author,
  tags,
  readingTime,
  featured,
  excerpt,
  image
}: BlogListItemProps) {
  return (
    <div className="group border-b border-border/20 py-8 last:border-b-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* Left Column - Date and Tags */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(date), 'MMM dd, yyyy')}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
            {tags.slice(0, 2).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            {readingTime} min read
          </div>
        </div>

        {/* Middle Column - Content (Title and Read More only) */}
        <div className="md:col-span-6 space-y-4">
          <Link href={`/blog/${slug}`} className="group/title block">
            <h2 className="text-xl md:text-2xl font-bold leading-tight group-hover/title:text-primary transition-colors duration-200">
              {title}
            </h2>
          </Link>
          
          <Link 
            href={`/blog/${slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Read more
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="md:col-span-3">
          <Link href={`/blog/${slug}`} className="block">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
              {image ? (
                <Image
                  src={`/images/blogs/${image}`}
                  alt={title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 mx-auto bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground">Image placeholder</p>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 