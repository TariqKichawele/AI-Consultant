import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal } from "@/components/landing/reveal"
import { WORK_PROJECTS, type WorkProject } from "@/lib/work"

const quotes: {
  slug: WorkProject["slug"]
  quote: string
  initials: string
}[] = [
  {
    slug: "headlights",
    quote:
      "We went from a generic shop vibe and unclear booking to a site that actually looks like us—clear services, reviews up front, and book‑now CTAs. Guests can book without calling around.",
    initials: "HH",
  },
  {
    slug: "gentle-dental",
    quote:
      "Patients used to stall on price, insurance, and anxiety. Now services are jargon‑free, pricing is transparent, and they can book online in under two minutes—including same‑day emergencies.",
    initials: "GD",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Local businesses we’ve already shipped for
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Outcomes from the marketing sites in our selected work—clearer
            offers, stronger trust, and booking paths that convert.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {quotes.map((t, i) => {
            const project = WORK_PROJECTS.find((p) => p.slug === t.slug)
            if (!project) return null

            return (
              <Reveal key={project.slug} delay={i * 0.07}>
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <Avatar>
                      <AvatarImage src={project.image} alt="" />
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <CardDescription>
                        {project.industry} · {project.type}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
