import Link from 'next/link'

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left">
        <p>👋 Hi there! I&apos;m Harishankar P V, an AI Engineer from India.</p>
        <p>
          <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            tl;dr: building and shipping AI products!
          </span>{' '}
        </p>

        <p>
          When it comes to building AI products, you need Engineers---and
          that&apos;s where I come in. Whether it&apos;s integrating frontends
          and backends with AI APIs, or designing Retrieval-Augmented Generation
          (RAG) systems and AI Agents, I love turning ideas into reality.
        </p>
        <p>
          What excites me most about AI Engineering is working with powerful
          tools like CursorAI and watching a product&apos;s vision come to life.
          My goal is to create AI-driven solutions that are natural and
          intuitive, while letting the technology work its magic behind the
          scenes.
        </p>
        <p>
          I&apos;m always diving into new tools and tech to sharpen my skills
          and stay on the cutting edge of AI.
        </p>
        <p>Ready to build something amazing together? 🚀</p>

        {/* <p>
          I enjoy browsing the web and crafting components. You can find my{' '}
          <Link href="https://www.rsrcraft.me/" target="_blank">
            <span className="wavvy underline-offset-2">crafts</span>
          </Link>{' '}
          here. Currently, I&apos;m exploring Web3 and backend technologies.
        </p>

        <div className="flex">
          A Snapshot of my
          <Link href={'/work'} className="group ml-1 flex">
            {' '}
            work exp .
            <div className="relative size-5 -translate-x-px translate-y-[-2px] overflow-hidden">
              <ArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-4 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
        </div>
        <div className="flex w-full items-center justify-center">
          <Separator className="w-14 bg-[#888]/40" />
        </div> */}
        <p>
          Find me on twitter at{' '}
          <Link
            href={'https://x.com/hspv_'}
            className="wavvy underline-offset-2"
          >
            x.com
          </Link>{' '}
          or drop an{' '}
          <Link
            href={'mailto:hspv99@gmail.com'}
            className="wavvy underline-offset-2"
          >
            email
          </Link>
        </p>
      </div>
    </section>
  )
}
