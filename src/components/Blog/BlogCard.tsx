import Link from 'next/link'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
  excerpt,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
        <CardHeader className="pb-3">
          <div className="mb-2 flex items-center justify-between">
            {featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 size-3" />
              {format(new Date(date), 'MMM dd, yyyy')}
            </div>
          </div>
          <CardTitle className="text-lg leading-tight transition-colors duration-200 group-hover:text-primary">
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
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {excerpt}
            </p>
          )}

          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-2 py-0.5 text-xs hover:bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="px-2 py-0.5 text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="mr-1 size-3" />
              {author}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 size-3" />
              {readingTime} min read
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
