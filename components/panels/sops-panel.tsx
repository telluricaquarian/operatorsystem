'use client'

import { BookOpen, Plus, Upload, FileCheck, Users, Megaphone, RotateCcw } from 'lucide-react'
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

const sops = [
  {
    id: 'sop-1',
    title: 'Client Onboarding SOP',
    description:
      'Step-by-step intake process for new clients — from signed contract through kickoff call and project setup.',
    category: 'Client Management',
    icon: Users,
    steps: 8,
    status: 'Active',
  },
  {
    id: 'sop-2',
    title: 'Proposal Delivery SOP',
    description:
      'Standard process for packaging, reviewing, and delivering proposals — including approval checkpoints and follow-up cadence.',
    category: 'Sales',
    icon: FileCheck,
    steps: 6,
    status: 'Active',
  },
  {
    id: 'sop-3',
    title: 'Landing Page Build SOP',
    description:
      'Repeatable workflow for scoping, copywriting, designing, and launching a client landing page end-to-end.',
    category: 'Delivery',
    icon: BookOpen,
    steps: 10,
    status: 'Active',
  },
  {
    id: 'sop-4',
    title: 'Follow-up & Retention SOP',
    description:
      'Systematic outreach cadence for post-delivery follow-up, testimonial collection, and upsell opportunities.',
    category: 'Retention',
    icon: RotateCcw,
    steps: 5,
    status: 'Draft',
  },
  {
    id: 'sop-5',
    title: 'Offer Announcement SOP',
    description:
      'Process for launching a new offer — covering internal alignment, audience segmentation, and channel rollout.',
    category: 'Marketing',
    icon: Megaphone,
    steps: 7,
    status: 'Active',
  },
]

export function SopsPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">SOPs</h1>
          <p className="text-muted-foreground">
            Standard operating procedures, repeatable processes, and internal execution docs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1.5">
            <Upload className="size-4" />
            Import SOP
          </Button>
          <Button className="gap-1.5">
            <Plus className="size-4" />
            Create SOP
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sops.map((sop) => (
            <Card
              key={sop.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <sop.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base leading-snug">{sop.title}</CardTitle>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {sop.steps} steps
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      sop.status === 'Active'
                        ? 'border-primary/30 text-primary text-xs'
                        : 'text-xs'
                    }
                  >
                    {sop.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <CardDescription className="text-sm leading-relaxed">
                  {sop.description}
                </CardDescription>
                <Badge variant="secondary" className="text-xs">
                  {sop.category}
                </Badge>
              </CardContent>
            </Card>
          ))}

          {/* Add New SOP Card */}
          <Card className="border-dashed border-border/50 bg-transparent cursor-pointer transition-all hover:border-primary/50 hover:bg-card/30">
            <CardContent className="flex h-full min-h-[160px] flex-col items-center justify-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50">
                <Plus className="size-5 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Create new SOP</span>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}
