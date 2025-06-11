import { defineCollection, defineConfig, s } from 'velite'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const computedFields = <T extends Record<string, any>>(data: T) => ({
  ...data,
  slug: data.slug || data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
  slugAsParams: data.slug || data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
  readingTime: Math.ceil(data.content.split(' ').length / 200) // Assume 200 words per minute
})

// Define blog posts collection
const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.{md,mdx}',
  schema: s
    .object({
      title: s.string().max(99), // title of the post
      slug: s.slug('posts'), // slug of the post
      date: s.isodate(), // date of the post
      updated: s.isodate().optional(), // updated date of the post
      description: s.string().max(999).optional(), // description of the post
      author: s.string().default('Harishan P V'), // author of the post
      tags: s.array(s.string()).default([]), // tags of the post
      category: s.string().default('AI Engineering'), // category of the post
      published: s.boolean().default(true), // whether the post is published
      featured: s.boolean().default(false), // whether the post is featured
      draft: s.boolean().default(false), // whether the post is a draft
      excerpt: s.string().optional(), // excerpt of the post
      image: s.string().optional(), // cover image of the post
      toc: s.toc(), // table of contents
      content: s.mdx(), // content of the post
    })
    .transform(computedFields)
})

export default defineConfig({
  root: './content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light'
          },
          keepBackground: false
        }
      ],
      rehypeKatex,
      rehypeAccessibleEmojis
    ]
  }
}) 