'use client'

import { Copy, MessageSquare } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { OutputItem, GenericData } from '@/lib/types'

interface GenericCardProps {
  output: OutputItem
}

export function GenericCard({ output }: GenericCardProps) {
  const data = output.data as GenericData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <MessageSquare className="size-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{data.title}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            Response
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{data.content}</p>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          Command: <code className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono">{output.command}</code>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-border/50 pt-4">
        <Button variant="outline" size="sm" className="gap-1.5">
          <Copy className="size-3.5" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
}
