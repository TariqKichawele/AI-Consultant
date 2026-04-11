import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Reveal } from "@/components/landing/reveal"

const examples = [
  {
    title: "Quote requests → structured intake + draft reply",
    before:
      "Leads email vague asks; someone retypes the same questions and misses follow‑ups.",
    after:
      "A guided intake captures scope, timeline, and budget; your team gets a ready‑to‑edit reply and a CRM task.",
    tag: "Sales",
  },
  {
    title: "Weekly KPIs → one email from scattered sheets",
    before:
      "Managers chase numbers across tabs; the “real” version lives in someone’s inbox.",
    after:
      "Scheduled roll‑up pulls agreed sources, flags anomalies, and lands in leadership’s inbox every Monday.",
    tag: "Reporting",
  },
  {
    title: "Scheduling ping‑pong → fewer threads",
    before:
      "Twelve messages to book a 20‑minute call; no‑shows when confirmations slip.",
    after:
      "Assistant suggests slots from your rules, sends confirmations, and reschedules without losing context.",
    tag: "Operations",
  },
] as const

export function Examples() {
  return (
    <section id="examples" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Example workflows</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Before / after snapshots
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Placeholder scenarios you can swap for your industry. The pattern is
            the same: less manual glue, clearer handoffs, and audit‑friendly
            steps.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {examples.map((ex, i) => (
            <Reveal key={ex.title} delay={i * 0.08}>
              <Card className="h-full">
                <CardHeader className="gap-3">
                  <Badge variant="secondary">{ex.tag}</Badge>
                  <CardTitle className="text-lg leading-snug">{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm">
                  <div>
                    <CardDescription className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Before
                    </CardDescription>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">
                      {ex.before}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <CardDescription className="text-xs font-semibold uppercase tracking-wide text-primary">
                      After
                    </CardDescription>
                    <p className="mt-1.5 leading-relaxed text-foreground">
                      {ex.after}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
