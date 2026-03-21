'use client'

import { Copy, Download, Layout } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { OutputItem, LandingPageData } from '@/lib/types'

interface LandingPageCardProps {
  output: OutputItem
}

export function LandingPageCard({ output }: LandingPageCardProps) {
  const data = output.data as LandingPageData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Layout className="size-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{data.title}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Landing Page
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.sections.map((section, i) => (
            <div
              key={i}
              className="rounded-lg border border-border/50 bg-secondary/20 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-medium">{section.name}</h4>
                <Badge variant="outline" className="text-xs">
                  Section {i + 1}
                </Badge>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {section.elements.map((element, j) => (
                  <span
                    key={j}
                    className="rounded-md bg-secondary/50 px-2 py-0.5 text-xs text-secondary-foreground"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-border/50 pt-4">
        <Button size="sm" className="gap-1.5">
          <Download className="size-3.5" />
          Export
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Copy className="size-3.5" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
}
