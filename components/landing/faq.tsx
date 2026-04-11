import { ChevronDownIcon } from "lucide-react"

import { Reveal } from "@/components/landing/reveal"

const faqs = [
  {
    q: "How much does this cost?",
    a: "Most engagements mix a short discovery sprint with a scoped pilot. We will quote a fixed pilot after we map workflows—placeholder copy until you publish real pricing.",
  },
  {
    q: "Will AI replace my staff?",
    a: "No. The goal is to remove repetitive glue work so people do judgment-heavy tasks: talking to customers, quality control, and exceptions only humans should own.",
  },
  {
    q: "What about data privacy?",
    a: "We start with least-privilege access, clear retention rules, and your existing tools where possible. For regulated industries we align to your policies—details go here when ready.",
  },
  {
    q: "How fast can we go live?",
    a: "Many pilots land in a few weeks once we have system access and a point person for decisions. Complexity grows with integrations and compliance—timeline is always explicit in the proposal.",
  },
  {
    q: "What if we already tried ChatGPT and it fizzled?",
    a: "Ad-hoc prompts rarely change operations. We build repeatable workflows with owners, metrics, and fallbacks—so the win survives after the first demo.",
  },
] as const

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-primary">FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Straight answers for busy owners
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Swap these for your legal and commercial language when you are ready
            to publish.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-xl border border-border/80 bg-card px-4 py-3 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDownIcon
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
