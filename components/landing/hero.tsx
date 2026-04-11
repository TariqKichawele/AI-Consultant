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
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <motion.div
          className="absolute -left-1/4 top-0 size-112 rounded-full bg-primary/20 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 24, 0],
                  y: [0, 12, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-chart-2/25 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -20, 0],
                  y: [0, -16, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
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
            Small businesses lose hours every week to inbox triage, scheduling
            ping‑pong, copy‑paste reporting, and follow‑ups that slip. We design
            practical AI workflows that save time, reduce errors, and scale
            without forcing you to hire ahead of revenue.
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
              Book discovery call
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

          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:text-sm"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.15 }}
          >
            {[
              "Teams of 1–50",
              "Weeks to pilot, not months",
              "Your tools (email, CRM, sheets)",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border/80 bg-card/80 px-3 py-1"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
