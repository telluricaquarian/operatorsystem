'use client'

import {
  FileText,
  Layout,
  Gift,
  UserCheck,
  Mail,
  ArrowRight,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockTemplates } from '@/lib/mock-data'
import type { OutputType } from '@/lib/types'

const iconMap: Record<OutputType, typeof FileText> = {
  'proposal': FileText,
  'landing-page': Layout,
  'offer-stack': Gift,
  'client-brief': UserCheck,
  'follow-up-email': Mail,
  'generic': FileText,
}

interface TemplatesPanelProps {
  onSelectTemplate?: (type: OutputType) => void
}

export function TemplatesPanel({ onSelectTemplate }: TemplatesPanelProps) {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Templates</h1>
        <p className="text-muted-foreground">
          Start with a pre-built template to generate content faster
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 md:grid-cols-2">
          {mockTemplates.map((template) => {
            const Icon = iconMap[template.type] || FileText
            return (
              <Card
                key={template.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
                onClick={() => onSelectTemplate?.(template.type)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{template.name}</CardTitle>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 rounded-lg border border-dashed border-border/50 bg-card/20 p-6 text-center">
          <h3 className="mb-2 font-medium">Need a custom template?</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Create your own reusable templates to speed up your workflow
          </p>
          <Button variant="outline">Create Custom Template</Button>
        </div>
      </ScrollArea>
    </div>
  )
}
