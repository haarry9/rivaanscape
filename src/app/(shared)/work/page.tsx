import CdBack from '@/components/shared/CdBack'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work',
  description: 'A Snapshot of my work and contributions.',
}

export default function WorkPage() {
  return (
    <section className="py-5 dark:text-zinc-200 md:mt-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">my work</h1>

        <Link
          href="https://drive.google.com/file/d/1hic59eIaicNxL2beaVPp_y1U28Ah0Ccg/view?usp=drive_link"
          target="_blank"
          className="flex items-center justify-around gap-3 rounded-xl border-2 border-dashed border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-black dark:text-gray-400 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-400" />
        </Link>
      </div>
      <div className="space-y-5">
        {' '}
        <p>
          I enjoy riding the AI wave and exploring new technologies to enhance
          my skills while continuously learning and growing as an AI Engineer 🚀
        </p>
        <p>Here &apos;s a snapshot of my journey so far.</p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="space-y-8 text-sm">
        <div className="space-y-2">
          <Link
            href={'https://misogiai.com/'}
            target="_blank"
            className="group flex items-center justify-start gap-3 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold">
              Misogi AI by Masai School .
            </h2>

            <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
              <ArrowUpRight className="size-5 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            AI Engineer | June &apos;2 - September &apos;8
          </p>
        </div>

        <p className="leading-relaxed">
          Selected into Misogi AI, a rigorous 14-week AI Engineering sprint
          blending remote and onsite training (80–100 hrs/week), focused on
          mastering LLMs, agentic architectures, and full-stack AI-first
          applications.:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-relaxed">
          <li>
            Engineered end-to-end AI systems: from building LLM-based apps with
            OpenAI APIs to integrating agentic workflows using LangChain,
            LangGraph, and OpenAI Assistants.
          </li>
          <li>
            Developed RAG (Retrieval Augmented Generation) pipelines using
            GraphRAG, vector databases (e.g., Chroma, Weaviate), chunking
            strategies, and semantic search evaluation metrics.
          </li>
          <li>
            Created and deployed multi-agent systems with CrewAI, Swarm, and
            MCP, showcasing real-world mobile-first AI apps on iOS/Android.
          </li>
          <li>
            Hands-on with open-source models via HuggingFace, Ollama, and local
            inference setups. Built performant pipelines leveraging lightweight
            models like LLaMA, Mistral, and finetuned via QLoRA, PEFT, and LoRA.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed">
          This experience significantly strengthened my command over GenAI
          workflows, stateful agent architectures, LLM internals, and AI product
          development, aligning me with the future of AI engineering.
        </p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <p className="mt-6 leading-relaxed">
        I&apos;m constantly learning and experimenting with new technologies.
        Stay tuned for more exciting projects and experiences coming soon...
      </p>

      <CdBack />
    </section>
  )
}
