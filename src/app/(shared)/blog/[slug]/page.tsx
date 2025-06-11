import { notFound } from 'next/navigation'
import { posts } from '#velite'
import { BlogLayout } from '@/components/Blog/BlogLayout'
import { MDXRenderer } from '@/components/Blog/MDXComponents'
import 'katex/dist/katex.min.css'
import '@/app/blog-styles.css'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      date={post.date}
      author={post.author}
      tags={post.tags}
      readingTime={post.readingTime}
      image={post.image}
      toc={post.toc}
    >
      <MDXRenderer code={post.content} />
    </BlogLayout>
  )
} 