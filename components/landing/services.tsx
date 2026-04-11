import {
  BarChart3Icon,
  InboxIcon,
  MessageSquareIcon,
  UsersIcon,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal } from "@/components/landing/reveal"

const items = [
  {
    title: "Operations & admin",
    description:
      "Turn recurring internal tasks into reliable flows: intake forms, approvals, file routing, and reminders that run whether you are on the floor or in a meeting.",
    icon: InboxIcon,
  },
  {
    title: "Customer communication",
    description:
      "Draft faster, stay on‑brand, and never ghost a lead. AI assists with first responses, FAQs, and handoffs so your team spends time on relationships, not templates.",
    icon: MessageSquareIcon,
  },
  {
    title: "Sales & CRM hygiene",
    description:
      "Keep pipelines honest with automated logging, next‑step nudges, and clean data entry from emails and calls—so forecasts reflect reality.",
    icon: UsersIcon,
  },
  {
    title: "Reporting & visibility",
    description:
      "Pull numbers from scattered spreadsheets and tools into one weekly snapshot your whole team can trust—without another late‑night copy‑paste session.",
    icon: BarChart3Icon,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-border/60 bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary">Outcomes first</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Where small teams win back time
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Every engagement starts with the work that already frustrates you.
            We prioritize quick wins, clear ownership, and measurable hours
            returned to the business.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Typical starting point: map the workflow, pick one pilot, then
                  iterate with your team in the loop.
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
