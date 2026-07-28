import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { WorkCard } from "@/components/landing/work-card"
import { Reveal } from "@/components/landing/reveal"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Button, buttonVariants } from "@/components/ui/button"
import { BOOKING_URL, SITE_NAME } from "@/lib/constants"
import { WORK_PROJECTS } from "@/lib/work"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `Work — ${SITE_NAME}`,
  description:
    "Selected marketing websites we’ve shipped for local businesses—barbershops, dental practices, and more.",
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                href="/#work"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "-ml-2 mb-6"
                )}
              >
                <ArrowLeftIcon data-icon="inline-start" />
                Back to home
              </Link>
              <p className="text-sm font-medium text-primary">Work</p>
              <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Marketing sites that make booking the obvious next step
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground sm:text-lg">
                Browse live builds for local service businesses. Visit a site
                that feels like yours—or book a call to talk through a similar
                build.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {WORK_PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.08}>
                  <WorkCard project={project} detailed />
                </Reveal>
              ))}
            </div>

            <Reveal
              className="mt-16 flex flex-col items-start gap-4 rounded-xl bg-muted/40 p-8 ring-1 ring-foreground/10 sm:flex-row sm:items-center sm:justify-between"
              delay={0.12}
            >
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Want something like this for your business?
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us what you sell and how leads book today—we’ll map a
                  clear site and conversion path.
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0"
                nativeButton={false}
                render={
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Book a call
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
