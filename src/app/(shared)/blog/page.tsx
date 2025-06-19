import CdBack from '@/components/shared/CdBack'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { posts } from '#velite'
import { BlogListItem } from '@/components/Blog/BlogListItem'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Check out my blogs and explore my journey.',
}

const Blog = () => {
  // Get published posts sorted by date (newest first)
  const publishedPosts = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="space-y-2 py-5 md:mt-8">
      {' '}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">read my blogs</h1>
      </div>{' '}
      <p>
        Exploring topics like AI Engineering, MLOps, and the latest in
        artificial intelligence.
      </p>
      <p>
        Stay updated on my learning journey—follow me on{' '}
        <Link
          href={'https://x.com/Spacing_Whale'}
          className="wavvy underline-offset-2"
        >
          x.com
        </Link>{' '}
        for insights and updates!
      </p>
      {/* Blog Posts List */}
      {publishedPosts.length > 0 && (
        <div className="py-8">
          <div className="space-y-0">
            {publishedPosts.map((post) => (
              <BlogListItem
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                author={post.author}
                tags={post.tags}
                readingTime={post.readingTime}
                featured={post.featured}
                excerpt={post.excerpt}
                image={post.image}
              />
            ))}
          </div>
        </div>
      )}
      {/* More Coming Soon Section */}
      <div className="flex items-center justify-center pt-32">
        {' '}
        <div className="absolute flex size-80 items-center justify-center rounded-full bg-gradient-to-t from-white from-30% to-green-500/80 shadow-[inset_-1px_-90px_100px_30px_#fff] dark:from-black dark:to-green-500/60 dark:shadow-[inset_-1px_-90px_100px_30px_#000]"></div>
        <h1 className="z-10 text-center font-neu text-7xl tracking-widest">
          MORE COMING SOON
        </h1>
      </div>
      <CdBack />
    </section>
  )
}

export default Blog
