import { CompassIcon, RocketIcon, TestTube2Icon } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"

const steps = [
  {
    step: "01",
    title: "Discover",
    body: "We shadow the real work: tools, edge cases, and who owns each step. You leave with a shortlist of high‑ROI automations—no science fair projects.",
    icon: CompassIcon,
  },
  {
    step: "02",
    title: "Pilot",
    body: "We build a narrow workflow end‑to‑end, with guardrails and human checkpoints. Your team validates outputs before anything touches customers.",
    icon: TestTube2Icon,
  },
  {
    step: "03",
    title: "Scale",
    body: "We harden what works: monitoring, playbooks, and training. Then we stack the next workflow so wins compound instead of stalling in one-off scripts.",
    icon: RocketIcon,
  },
] as const

export function Process() {
  return (
    <section
      id="process"
      className="border-b border-border/60 bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From first call to compounding wins
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            No open‑ended “transformation.” Just disciplined pilots that earn the
            right to expand.
          </p>
        </Reveal>

        <ol className="mt-16 grid list-none gap-10 p-0 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.step} className="list-none">
              <Reveal delay={i * 0.08}>
                <div className="relative flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm">
                  <span className="text-xs font-semibold tracking-widest text-primary">
                    {s.step}
                  </span>
                  <div className="mt-3 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
