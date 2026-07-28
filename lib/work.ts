export type WorkProject = {
  slug: string
  name: string
  industry: string
  type: string
  summary: string
  description: string
  href: string
  image: string
  imageAlt: string
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "headlights",
    name: "Headlights Haircuts + Grooming",
    industry: "Men’s barbershop",
    type: "Marketing website",
    summary:
      "Generic shop vibe and unclear booking → a premium brand site with clear services, reviews, and book‑now CTAs.",
    description:
      "A conversion‑focused marketing site for a Morrisville, NC barber studio—hero booking CTAs, tiered grooming services, artist bio, Google reviews, visit details, and chat so guests can book without calling around.",
    href: "https://barbershop-prototype-phi.vercel.app/",
    image: "/work/headlights.png",
    imageAlt: "Headlights Haircuts homepage hero with book appointment CTA",
  },
  {
    slug: "gentle-dental",
    name: "Gentle Dental Care",
    industry: "Family dental practice",
    type: "Marketing website",
    summary:
      "Patients stall on price, insurance, and anxiety → jargon‑free services, transparent pricing, and online booking in under 2 minutes.",
    description:
      "A patient‑first dental marketing site with emergency same‑day booking, preventative/restorative/cosmetic services, anxiety‑free messaging, insurance trust logos, transparent pricing, and real‑time online scheduling.",
    href: "https://dentist-prototype.vercel.app/",
    image: "/work/gentle-dental.png",
    imageAlt: "Gentle Dental Care homepage with book online CTA",
  },
]
