import {
  LayoutTemplateIcon,
  MessageCircleIcon,
  PhoneMissedIcon,
  WorkflowIcon,
} from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal } from "@/components/landing/reveal"

const items = [
  {
    title: "CRM Automation",
    description:
      "Connect your CRM to the rest of your stack so leads, notes, and next steps update themselves. Automate logging, follow‑ups, and pipeline hygiene so your team sells instead of babysitting records.",
    icon: WorkflowIcon,
  },
  {
    title: "Website and App Design and Development",
    description:
      "Launch a fast, conversion‑focused website or app that matches how you actually sell—clear offers, clean UX, and the forms, booking, and integrations your leads need to take the next step.",
    icon: LayoutTemplateIcon,
  },
  {
    title: "AI Voice and Chat Agents",
    description:
      "AI handles calls and web chat around the clock so no opportunity goes unanswered.",
    icon: MessageCircleIcon,
  },
  {
    title: "Missed Call Recovery",
    description:
      "Miss a call and the AI texts back in 2 seconds, qualifies the lead and books the appointment by SMS before they call someone else.",
    icon: PhoneMissedIcon,
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
          <p className="text-sm font-medium text-primary">What we build</p>
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
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
