'use client'

import { Copy, Mail } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { OutputItem, EmailData } from '@/lib/types'

interface EmailCardProps {
  output: OutputItem
}

export function EmailCard({ output }: EmailCardProps) {
  const data = output.data as EmailData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="size-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Follow-up Email</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Email
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Subject Line */}
        <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
          <p className="text-xs text-muted-foreground mb-1">Subject Line</p>
          <p className="font-medium">{data.subject}</p>
        </div>

        <Separator className="bg-border/50" />

        {/* Email Body */}
        <div className="space-y-4 rounded-lg border border-border/50 bg-secondary/10 p-4">
          <p className="font-medium">{data.greeting}</p>
          {data.body.map((paragraph, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="text-sm text-primary font-medium">{data.callToAction}</p>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {data.signature}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-border/50 pt-4">
        <Button size="sm" className="gap-1.5">
          <Mail className="size-3.5" />
          Open in Email
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Copy className="size-3.5" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
}
