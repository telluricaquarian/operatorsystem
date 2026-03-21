'use client'

import { useState, type FormEvent } from 'react'
import { Send, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface TerminalInputProps {
  onSubmit: (command: string) => void
  isProcessing: boolean
}

export function TerminalInput({ onSubmit, isProcessing }: TerminalInputProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isProcessing) {
      onSubmit(input.trim())
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card/50 p-2 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:glow-sm">
        <ChevronRight className="size-4 text-primary" />
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command or describe what you want to generate..."
          disabled={isProcessing}
          className="flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/60"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!input.trim() || isProcessing}
          className="size-8 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Send className="size-4" />
          <span className="sr-only">Send command</span>
        </Button>
      </div>
    </form>
  )
}
