'use client'

import { useState, useEffect, useRef } from 'react'

export function useActiveToc(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string>('')
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '-20% 0% -35% 0px',
    })

    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    elements.forEach((elem) => observer.current?.observe(elem))

    return () => observer.current?.disconnect()
  }, [itemIds])

  return activeId
}
