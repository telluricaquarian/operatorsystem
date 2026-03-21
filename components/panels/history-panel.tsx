'use client'

import { History, RotateCcw, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockHistory } from '@/lib/mock-data'

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays === 1) return 'Yesterday'
  return `${diffDays}d ago`
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'proposal': 'Proposal',
    'landing-page': 'Landing Page',
    'offer-stack': 'Offer Stack',
    'client-brief': 'Client Brief',
    'follow-up-email': 'Email',
  }
  return labels[type] || 'Generic'
}

interface HistoryPanelProps {
  onRerun?: (command: string) => void
}

export function HistoryPanel({ onRerun }: HistoryPanelProps) {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">History</h1>
          <p className="text-muted-foreground">
            View and re-run previous terminal commands
          </p>
        </div>
        <Button variant="outline" className="gap-1.5">
          <Trash2 className="size-4" />
          Clear History
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-2">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between rounded-lg border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/30 hover:bg-card/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/50">
                  <History className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-mono text-sm">{item.command}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {getTypeLabel(item.type)}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(item.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                onClick={() => onRerun?.(item.command)}
              >
                <RotateCcw className="size-3.5" />
                Re-run
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
