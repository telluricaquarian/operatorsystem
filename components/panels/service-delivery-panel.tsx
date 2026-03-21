'use client'

import { Briefcase, ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

const workflows = [
  {
    id: 'wf-1',
    title: 'Strategy → ICP Definition → Client Acquisition',
    description:
      "Defines Areculateir's ideal client profile (ICP), identifies high-leverage acquisition channels, and establishes a repeatable outreach system for securing aligned, high-quality clients.",
    steps: ['Market Research', 'ICP Segmentation', 'Channel Selection', 'Outreach System'],
    tags: ['Strategy', 'Acquisition'],
  },
]

export function ServiceDeliveryPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Service Delivery - Workflow</h1>
        <p className="text-muted-foreground">A - Z Meticulous Detail</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <Card
              key={workflow.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">{workflow.title}</CardTitle>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {workflow.steps.length} steps
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <CardDescription className="text-sm leading-relaxed">
                  {workflow.description}
                </CardDescription>

                <div className="flex flex-wrap items-center gap-1">
                  {workflow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="rounded bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {step}
                      </span>
                      {i < workflow.steps.length - 1 && (
                        <ArrowRight className="size-3 text-muted-foreground/50 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {workflow.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
