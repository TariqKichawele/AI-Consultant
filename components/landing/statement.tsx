import { Reveal } from "@/components/landing/reveal"

export function Statement() {
  return (
    <section
      id="why"
      className="border-b border-border/60 bg-muted/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Most businesses are leaving{" "}
            <span className="bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">
              revenue
            </span>{" "}
            on the table
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            The tools exist. The systems work. The problem is implementation.
            Most operators are too busy running the business to build the
            infrastructure that would actually scale it. That&apos;s what we
            do.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
