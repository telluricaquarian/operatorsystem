'use client'

import {
  FileText,
  Layout,
  Gift,
  UserCheck,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickCommands = [
  {
    id: 'proposal',
    label: 'Generate Proposal',
    icon: FileText,
    command: 'generate proposal',
  },
  {
    id: 'landing',
    label: 'Generate Landing Page',
    icon: Layout,
    command: 'generate landing page',
  },
  {
    id: 'offer',
    label: 'Generate Offer Stack',
    icon: Gift,
    command: 'generate offer stack',
  },
  {
    id: 'brief',
    label: 'Generate Client Brief',
    icon: UserCheck,
    command: 'generate client brief',
  },
  {
    id: 'email',
    label: 'Generate Follow-up Email',
    icon: Mail,
    command: 'generate follow-up email',
  },
]

interface CommandButtonsProps {
  onCommand: (command: string) => void
  disabled?: boolean
}

export function CommandButtons({ onCommand, disabled }: CommandButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {quickCommands.map((cmd) => (
        <Button
          key={cmd.id}
          variant="outline"
          size="sm"
          onClick={() => onCommand(cmd.command)}
          disabled={disabled}
          className="gap-1.5 border-border/50 bg-secondary/30 text-secondary-foreground hover:border-primary/30 hover:bg-secondary/50 transition-all"
        >
          <cmd.icon className="size-3.5" />
          {cmd.label}
        </Button>
      ))}
    </div>
  )
}
