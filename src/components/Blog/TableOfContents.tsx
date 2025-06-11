'use client'

import { useActiveToc } from '@/hooks/useActiveToc'

// Velite TOC structure
interface VeliteTocItem {
  title: string
  url: string
  items: VeliteTocItem[]
}

// Flattened structure for our component
interface FlatTocItem {
  url: string
  text: string
  depth: number
}

interface TableOfContentsProps {
  toc: VeliteTocItem[]
}

// Function to flatten the hierarchical TOC structure
function flattenToc(items: VeliteTocItem[], depth = 1): FlatTocItem[] {
  const flattened: FlatTocItem[] = []
  
  for (const item of items) {
    flattened.push({
      url: item.url,
      text: item.title,
      depth: depth
    })
    
    if (item.items && item.items.length > 0) {
      flattened.push(...flattenToc(item.items, depth + 1))
    }
  }
  
  return flattened
}

function getIds(items: FlatTocItem[]) {
  return items.reduce((acc: string[], item) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    return acc
  }, [])
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  // Flatten the hierarchical TOC structure
  const flatToc = flattenToc(toc)
  const itemIds = getIds(flatToc)
  const activeId = useActiveToc(itemIds)

  if (!toc?.length) {
    return null
  }

  return (
    <div className="toc">
      <h3 className="font-semibold mb-4 text-foreground">On this page</h3>
      <ul className="space-y-2">
        {flatToc.map((item) => {
          const href = item.url
          const text = item.text
          const isActive = activeId === href.slice(1)
          return (
            <li key={text}>
              <a
                href={href}
                className={`block text-sm transition-colors hover:text-foreground ${
                  isActive 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground'
                }`}
                style={{ marginLeft: `${(item.depth - 1) * 1}rem` }}
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
} 