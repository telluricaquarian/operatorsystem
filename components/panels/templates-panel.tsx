'use client'

import {
  FileText,
  Layout,
  Gift,
  UserCheck,
  Mail,
  FileOutput,
  Eye,
  Code2,
  MessageSquare,
  LayoutGrid,
  Send,
  Home,
  Layers,
  Target,
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

const socialMediaTemplates = [
  { id: 'sm-1', name: 'Social Post Template',    icon: MessageSquare, description: 'Reusable post structure for promotional and educational content' },
  { id: 'sm-2', name: 'Carousel Template',       icon: LayoutGrid,    description: 'Multi-slide content structure for social storytelling and offers' },
  { id: 'sm-3', name: 'Outreach DM Template',    icon: Send,          description: 'Short-form direct message templates for lead generation and follow-up' },
]

const webDesignTemplates = [
  { id: 'wd-1', name: 'Homepage Template',       icon: Home,   description: 'Hero-first homepage structure with conversion-focused sections' },
  { id: 'wd-2', name: 'Service Page Template',   icon: Layers, description: 'Structured service page layout with offer clarity and CTA flow' },
  { id: 'wd-3', name: 'Landing Page Template',   icon: Target, description: 'Single-goal page template optimized for conversion and lead capture' },
]

function handleGenerateDocument(templateName: string) {
  console.log(`[System Template] Generate Document: ${templateName}`)
}

function handleViewStructure(templateName: string) {
  console.log(`[System Template] View Structure: ${templateName}`)
}

function handleOpenScript(templateName: string) {
  console.log(`[System Template] Open Script: ${templateName}`)
}

interface TemplatesPanelProps {
  onSelectTemplate?: (type: OutputType) => void
}

export function TemplatesPanel({ onSelectTemplate }: TemplatesPanelProps) {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">System Templates</h1>
        <p className="text-muted-foreground">
          Entry points into document generation workflows
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-4 md:grid-cols-2">
          {mockTemplates.map((template) => {
            const Icon = iconMap[template.type] || FileText
            return (
              <Card
                key={template.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{template.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 border-t border-border/40 pt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 gap-1.5 text-xs border-border/50 hover:border-primary/40"
                      onClick={() => {
                        handleGenerateDocument(template.name)
                        onSelectTemplate?.(template.type)
                      }}
                    >
                      <FileOutput className="size-3" />
                      Generate
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                      onClick={() => handleViewStructure(template.name)}
                    >
                      <Eye className="size-3" />
                      Structure
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground ml-auto"
                      onClick={() => handleOpenScript(template.name)}
                    >
                      <Code2 className="size-3" />
                      Automation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Social Media Templates */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight mb-1">Social Media Templates</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Reusable templates for outreach, posts, and promotional content
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {socialMediaTemplates.map((template) => (
              <Card
                key={template.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <template.icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{template.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <CardDescription className="text-sm">{template.description}</CardDescription>
                  <div className="flex items-center gap-2 border-t border-border/40 pt-3">
                    <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs border-border/50 hover:border-primary/40" onClick={() => handleGenerateDocument(template.name)}>
                      <FileOutput className="size-3" />Generate
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground" onClick={() => handleViewStructure(template.name)}>
                      <Eye className="size-3" />Structure
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground ml-auto" onClick={() => handleOpenScript(template.name)}>
                      <Code2 className="size-3" />Automation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Web Design Templates */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight mb-1">Web Design Templates</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Reusable layouts and structures for client-facing web experiences
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {webDesignTemplates.map((template) => (
              <Card
                key={template.id}
                className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <template.icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{template.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <CardDescription className="text-sm">{template.description}</CardDescription>
                  <div className="flex items-center gap-2 border-t border-border/40 pt-3">
                    <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs border-border/50 hover:border-primary/40" onClick={() => handleGenerateDocument(template.name)}>
                      <FileOutput className="size-3" />Generate
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground" onClick={() => handleViewStructure(template.name)}>
                      <Eye className="size-3" />Structure
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground ml-auto" onClick={() => handleOpenScript(template.name)}>
                      <Code2 className="size-3" />Automation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
