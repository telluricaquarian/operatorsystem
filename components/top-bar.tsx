'use client'

import { Circle } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function TopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold tracking-tight">
          Operator Terminal
        </h1>
        <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1">
          <Circle className="size-2 fill-primary text-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Ready</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="size-8 border border-border">
          <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
            OP
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
