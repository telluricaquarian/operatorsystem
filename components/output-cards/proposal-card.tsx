'use client'

import { Copy, Download, FileText, Clock, DollarSign } from 'lucide-react'
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { OutputItem, ProposalData } from '@/lib/types'

interface ProposalCardProps {
  output: OutputItem
}

export function ProposalCard({ output }: ProposalCardProps) {
  const data = output.data as ProposalData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="size-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{data.title}</CardTitle>
              <CardDescription className="mt-1">
                Client: {data.client}
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Proposal
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="single" collapsible defaultValue="scope" className="w-full">
          <AccordionItem value="scope" className="border-border/50">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Scope of Work</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {data.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="deliverables" className="border-border/50">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Deliverables</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {data.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing" className="border-border/50">
            <AccordionTrigger className="hover:no-underline">
              <span className="text-sm font-medium">Pricing Breakdown</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {data.pricing.breakdown.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="font-medium">{item.price}</span>
                  </div>
                ))}
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total Investment</span>
                  <span className="text-lg font-semibold text-primary">
                    {data.pricing.total}
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex gap-4 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            <span>Timeline: {data.timeline}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <DollarSign className="size-4" />
            <span>{data.pricing.total}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-border/50 pt-4">
        <Button size="sm" className="gap-1.5">
          <Download className="size-3.5" />
          Download PDF
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Copy className="size-3.5" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
}
