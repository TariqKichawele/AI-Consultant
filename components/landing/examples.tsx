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
    title: "Missed call → SMS recovery in seconds",
    before:
      "A lead rings, nobody picks up, and they call the next business on the list.",
    after:
      "AI texts back in about 2 seconds, qualifies the lead, and books the appointment by SMS before they move on.",
    tag: "Missed Call Recovery",
  },
  {
    title: "After‑hours calls & chat → always covered",
    before:
      "Phones and website chat go quiet when the team is busy or closed—opportunities pile up unanswered.",
    after:
      "AI voice and chat agents handle calls and web chat around the clock, capture intent, and hand off warm leads.",
    tag: "AI Voice and Chat Agents",
  },
  {
    title: "Slow site & clunky forms → conversion‑ready web & apps",
    before:
      "Leads bounce off outdated pages, unclear offers, and forms that don’t connect to how you actually sell.",
    after:
      "A fast website or app with clear offers, clean UX, and booking, forms, and integrations that move prospects to the next step.",
    tag: "Website and App Design and Development",
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
