import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { WorkCard } from "@/components/landing/work-card"
import { Reveal } from "@/components/landing/reveal"
import { buttonVariants } from "@/components/ui/button"
import { WORK_PROJECTS } from "@/lib/work"
import { cn } from "@/lib/utils"

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Selected work</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Sites we’ve shipped for local businesses
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Real marketing sites with clear offers and booking paths—built so
            visitors know what you do and can take the next step.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {WORK_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <WorkCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={0.16}>
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View all work
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
