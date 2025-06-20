import { cn } from '@/lib/utils'
import { Github } from '../Icons/StackIcons/github'
import { Linkedin } from '../Icons/socials/Linkedin'
import { Twitter } from '../Icons/socials/Twitter'
import { Separator } from '../ui/separator'

function Footer({ footerWidth = 'max-w-[75vw]' }: { footerWidth?: string }) {
  const year = String(new Date().getFullYear())

  return (
    <footer
      className={cn(
        'container mx-auto flex flex-col py-5 md:px-16',
        footerWidth
      )}
    >
      <Separator className="h-[0.5px] bg-emerald-900/60" />
      <div className="flex items-center py-3 text-sm font-semibold text-[#4B4B4B]">
        <time className="hidden sm:inline" dateTime={String(year)}>
          {year}{' '}
        </time>{' '}
        ©<p>Harishankar P V</p>
        <div className="ml-auto flex items-center gap-3">
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            href="https://www.linkedin.com/in/harishankarpv"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            href="https://x.com/hspv_"
            rel="noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <Twitter className="size-5" />
          </a>
          <a
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
            href="https://github.com/haarry9"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="size-5 dark:invert" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
