import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BOOKING_URL } from "@/lib/constants"
import type { WorkProject } from "@/lib/work"
import { cn } from "@/lib/utils"

type WorkCardProps = {
  project: WorkProject
  /** Show the longer description under the summary */
  detailed?: boolean
}

export function WorkCard({ project, detailed = false }: WorkCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/9] overflow-hidden bg-muted"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
        />
      </a>
      <CardHeader className="gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{project.type}</Badge>
          <span className="text-xs text-muted-foreground">{project.industry}</span>
        </div>
        <CardTitle className="text-lg">{project.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {project.summary}
        </CardDescription>
        {detailed ? (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        ) : null}
      </CardHeader>
      <CardFooter className="mt-auto flex flex-wrap gap-2 border-t-0 bg-transparent px-4 pb-4 pt-0">
        <Button
          size="lg"
          nativeButton={false}
          render={
            <a href={project.href} target="_blank" rel="noopener noreferrer" />
          }
        >
          Visit site
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Book a call
        </a>
      </CardFooter>
    </Card>
  )
}
