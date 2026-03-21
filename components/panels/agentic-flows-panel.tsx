'use client'

import { Workflow, Plus, Copy, ArrowRight } from 'lucide-react'
import { AgenticFlowsHero } from './agentic-flows-hero'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

const agenticFlows = [
  {
    id: 'flow-1',
    title: 'Lead Intake → Offer Generation',
    description:
      'Automatically processes inbound lead data, qualifies fit, and generates a tailored offer stack ready for review.',
    steps: ['Lead Intake', 'Qualification', 'Offer Matching', 'Offer Draft'],
    stepCount: 4,
    category: 'Sales',
  },
  {
    id: 'flow-2',
    title: 'Client Brief → Proposal Draft',
    description:
      'Takes a completed client brief and produces a scoped, priced proposal with deliverables and timeline automatically populated.',
    steps: ['Brief Parse', 'Scope Extraction', 'Pricing Logic', 'Proposal Output'],
    stepCount: 4,
    category: 'Delivery',
  },
  {
    id: 'flow-3',
    title: 'Proposal → Landing Page Structure',
    description:
      'Converts an approved proposal into a structured landing page outline including headline, offer blocks, and CTA copy.',
    steps: ['Proposal Parse', 'Section Mapping', 'Copy Generation', 'Structure Export'],
    stepCount: 4,
    category: 'Marketing',
  },
  {
    id: 'flow-4',
    title: 'Follow-up Email Sequence',
    description:
      'Generates a multi-touch follow-up sequence triggered post-delivery — covering check-in, testimonial request, and upsell.',
    steps: ['Trigger', 'Email 1 — Check-in', 'Email 2 — Testimonial', 'Email 3 — Upsell'],
    stepCount: 4,
    category: 'Retention',
  },
  {
    id: 'flow-5',
    title: 'Offer Launch Sequence',
    description:
      'End-to-end launch flow — from offer finalization through audience targeting, channel copy, and post-launch follow-up.',
    steps: ['Offer Finalization', 'Audience Segmentation', 'Channel Copy', 'Launch', 'Follow-up'],
    stepCount: 5,
    category: 'Marketing',
  },
]

export function AgenticFlowsPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Agentic Flows</h1>
          <p className="text-muted-foreground">
            Reusable multi-step workflow chains for execution and automation
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1.5">
            <Copy className="size-4" />
            Duplicate Flow
          </Button>
          <Button className="gap-1.5">
            <Plus className="size-4" />
            Create Flow
          </Button>
        </div>
      </div>

      <AgenticFlowsHero />

      <ScrollArea className="flex-1">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agenticFlows.map((flow) => (
            <Card
              key={flow.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Workflow className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">{flow.title}</CardTitle>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {flow.stepCount} steps
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <CardDescription className="text-sm leading-relaxed">
                  {flow.description}
                </CardDescription>

                {/* Step chain */}
                <div className="flex flex-wrap items-center gap-1">
                  {flow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="rounded bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {step}
                      </span>
                      {i < flow.steps.length - 1 && (
                        <ArrowRight className="size-3 text-muted-foreground/50 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <Badge variant="secondary" className="text-xs">
                  {flow.category}
                </Badge>
              </CardContent>
            </Card>
          ))}

          {/* Add New Flow Card */}
          <Card className="border-dashed border-border/50 bg-transparent cursor-pointer transition-all hover:border-primary/50 hover:bg-card/30">
            <CardContent className="flex h-full min-h-[160px] flex-col items-center justify-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50">
                <Plus className="size-5 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Create new flow</span>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}
