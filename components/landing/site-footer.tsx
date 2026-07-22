import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants"
import { NAV_LINKS } from "@/lib/nav"

export function SiteFooter() {
  return (
    <footer className="bg-card py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo.png"
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-lg"
              />
              <p className="text-sm font-semibold text-foreground">{SITE_NAME}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              CRM automation, websites and apps, AI voice and chat agents, and
              missed‑call recovery—built so small businesses never miss a lead.
            </p>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-2"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <a
            className="font-medium text-foreground underline-offset-4 hover:underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
