'use client'

import { Fragment, useEffect, useState } from 'react'
import * as mdx from '@mdx-js/mdx'
import { jsx, jsxs } from 'react/jsx-runtime'

// Simple client-side wrapper component for Velite-processed MDX content
interface MDXRendererProps {
  code: string
}

export function MDXRenderer({ code }: MDXRendererProps) {
  const [mdxModule, setMdxModule] = useState<any>()

  useEffect(() => {
    async function run() {
      const mod = await mdx.run(code, { Fragment, jsx, jsxs, baseUrl: import.meta.url })
      setMdxModule(mod)
    }
    run()
  }, [code])

  if (!mdxModule) {
    return null
  }

  return <mdxModule.default />
} 