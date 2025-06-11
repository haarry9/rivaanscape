import Link from 'next/link'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, Calendar, User } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  description?: string
  date: string
  author: string
  tags: string[]
  readingTime: number
  featured: boolean
  excerpt?: string
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  author,
  tags,
  readingTime,
  featured,
  excerpt
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20 bg-background/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            {featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {format(new Date(date), 'MMM dd, yyyy')}
            </div>
          </div>
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-200">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="text-sm leading-relaxed">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="pt-0">
          {excerpt && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {excerpt}
            </p>
          )}
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs px-2 py-0.5 hover:bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {readingTime} min read
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 