import { Examples } from "@/components/landing/examples"
import { Faq } from "@/components/landing/faq"
import { Hero } from "@/components/landing/hero"
import { Process } from "@/components/landing/process"
import { Services } from "@/components/landing/services"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Testimonials } from "@/components/landing/testimonials"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Examples />
        <Process />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
