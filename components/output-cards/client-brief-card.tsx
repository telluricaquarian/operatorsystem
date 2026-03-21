'use client'

import { Copy, Download, UserCheck, Target, MessageSquare } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { OutputItem, ClientBriefData } from '@/lib/types'

interface ClientBriefCardProps {
  output: OutputItem
}

export function ClientBriefCard({ output }: ClientBriefCardProps) {
  const data = output.data as ClientBriefData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <UserCheck className="size-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{data.projectName}</CardTitle>
              <CardDescription className="mt-1">
                Client: {data.client}
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Client Brief
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Objective */}
        <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Target className="size-4 text-primary" />
            <h4 className="font-medium">Objective</h4>
          </div>
          <p className="text-sm text-muted-foreground">{data.objective}</p>
        </div>

        {/* Target Audience */}
        <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
          <h4 className="mb-2 font-medium">Target Audience</h4>
          <p className="text-sm text-muted-foreground">{data.targetAudience}</p>
        </div>

        {/* Key Messages */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <MessageSquare className="size-4 text-primary" />
            <h4 className="font-medium">Key Messages</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.keyMessages.map((message, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {message}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Deliverables */}
        <div>
          <h4 className="mb-2 font-medium">Deliverables</h4>
          <ul className="space-y-1.5">
            {data.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline & Budget */}
        <div className="flex gap-4">
          <div className="flex-1 rounded-lg bg-secondary/30 p-3">
            <p className="text-xs text-muted-foreground">Timeline</p>
            <p className="font-medium">{data.timeline}</p>
          </div>
          <div className="flex-1 rounded-lg bg-secondary/30 p-3">
            <p className="text-xs text-muted-foreground">Budget</p>
            <p className="font-medium">{data.budget}</p>
          </div>
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
