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

const quotes = [
  {
    quote:
      "We stopped living in our inboxes. The pilot paid for itself in week three—our office manager finally had time for vendor negotiations.",
    name: "Jordan Lee",
    role: "Owner",
    company: "Harborline Supply Co.",
    initials: "JL",
    image: "",
  },
  {
    quote:
      "I was skeptical about ‘AI consultants.’ This was different: concrete workflows, clear limits on what automation should touch, and training my staff could follow.",
    name: "Priya Desai",
    role: "Operations Director",
    company: "Brightfield Clinics",
    initials: "PD",
    image: "",
  },
  {
    quote:
      "Our weekly revenue snapshot used to be a Friday fire drill. Now it is one email everyone trusts—and we catch issues on Monday instead of month‑end.",
    name: "Marcus Nguyen",
    role: "GM",
    company: "Northwind Logistics",
    initials: "MN",
    image: "",
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Teams that wanted leverage—not hype
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Placeholder quotes and personas for layout. Replace with real
            customers when you have them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <Avatar>
                    {t.image ? (
                      <AvatarImage src={t.image} alt="" />
                    ) : null}
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <CardDescription>
                      {t.role}, {t.company}
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
          ))}
        </div>
      </div>
    </section>
  )
}
