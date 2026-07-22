"use client"

import { ArrowRightIcon, SparklesIcon } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BOOKING_URL } from "@/lib/constants"
export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Soft ops grid */}
        <div
          className="absolute inset-0 opacity-[0.45] dark:opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        {/* Atmospheric mesh */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute -left-[20%] top-[-10%] size-[38rem] rounded-full bg-primary/25 blur-3xl dark:bg-primary/30"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 28, 0],
                    y: [0, 16, 0],
                  }
            }
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-[15%] bottom-[-15%] size-[34rem] rounded-full bg-chart-2/30 blur-3xl dark:bg-chart-2/25"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -24, 0],
                    y: [0, -18, 0],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute left-1/2 top-[42%] size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
        </div>

        {/* Center spotlight behind copy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 42%, color-mix(in oklch, var(--primary) 10%, transparent), transparent 70%)",
          }}
        />

        {/* Edge fade so the grid doesn’t hard-cut */}
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-background/80" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center px-4 py-20 sm:px-6 sm:py-28 lg:min-h-[70vh] lg:px-8 lg:py-40 xl:min-h-[75vh] xl:py-48">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1">
              <SparklesIcon className="size-3.5" aria-hidden />
              AI consulting for growing teams
            </Badge>
          </motion.div>

          <motion.h1
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={{
              hidden: reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Automate the busywork. Keep the human touch.
          </motion.h1>

          <motion.p
            className="mt-5 text-pretty text-lg text-muted-foreground sm:text-xl"
            variants={{
              hidden: reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Missed calls and messy systems cost you revenue. We build the
            automation that answers leads and books appointments—without hiring
            ahead of growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            variants={{
              hidden: reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              size="lg"
              className="w-full min-w-48 sm:w-auto"
              nativeButton={false}
              render={
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Book a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-2 sm:w-auto"
              nativeButton={false}
              render={<a href="#examples" />}
            >
              See example workflows
              <ArrowRightIcon className="size-4" aria-hidden />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
