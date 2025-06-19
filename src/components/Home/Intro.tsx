import Link from 'next/link'

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-5 text-left">
        <p>
          👋 Hi there! I&apos;m Harishankar P V, an AI Engineer from India, who
          loves{' '}
          <span className="bg-gradient-to-l from-purple-400 to-yellow-400 bg-clip-text text-transparent">
            building and shipping AI products!
          </span>{' '}
        </p>

        <p>
          As you know when it comes to building AI products, you need Engineers!
          I can manage the entire AI development process, be it integrating
          frontend and backend with AI APIs, RAGs or AI Agents and the part that
          excites me the most about AI Engineering is working with tools like
          CursorAI and seeing the vision of the product come alive.
        </p>
        <p>
          My goal is to create AI-driven solutions that are natural and
          intuitive, letting the technology work its magic behind the scenes.
        </p>
        <p>
          I enjoy riding the AI wave and exploring new technologies to enhance
          my skills 🚀
        </p>

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
            href={'https://x.com/rivaanscape'}
            className="wavvy underline-offset-2"
          >
            x.com
          </Link>{' '}
          or drop a{' '}
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
