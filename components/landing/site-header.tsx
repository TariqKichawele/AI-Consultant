"use client"

import Image from "next/image"
import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { BOOKING_URL, SITE_NAME } from "@/lib/constants"
import { NAV_LINKS } from "@/lib/nav"
import { cn } from "@/lib/utils"

function BookCallButton({ className }: { className?: string }) {
  return (
    <Button
      size="lg"
      className={cn("shrink-0", className)}
      nativeButton={false}
      render={
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" />
      }
    >
      Book discovery call
    </Button>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={36}
            height={36}
            className="size-8 rounded-lg sm:size-9"
            priority
          />
          <span>{SITE_NAME}</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <BookCallButton className="hidden sm:inline-flex" />
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "md:hidden"
              )}
            >
              <MenuIcon className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2 pb-6" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  className="mt-4 block w-full"
                  render={
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full text-center"
                      )}
                    />
                  }
                >
                  Book discovery call
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
