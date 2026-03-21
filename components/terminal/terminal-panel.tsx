'use client'

import { useState, useRef, useEffect } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TerminalInput } from './terminal-input'
import { CommandButtons } from './command-buttons'
import { OutputCard } from '../output-cards/output-card'
import type { OutputItem } from '@/lib/types'
import { generateMockOutput } from '@/lib/mock-data'

export function TerminalPanel() {
  const [outputs, setOutputs] = useState<OutputItem[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleCommand = async (command: string) => {
    setIsProcessing(true)
    
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    const newOutput = generateMockOutput(command)
    setOutputs((prev) => [...prev, newOutput])
    setIsProcessing(false)
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [outputs])

  return (
    <div className="flex h-full flex-col">
      {/* Output Area */}
      <ScrollArea className="flex-1 p-6" ref={scrollRef}>
        <div className="flex flex-col gap-6">
          {outputs.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-secondary/50">
                <span className="text-2xl font-mono text-primary">{'>_'}</span>
              </div>
              <h2 className="mb-2 text-xl font-semibold">
                Welcome to Operator Terminal
              </h2>
              <p className="max-w-md text-muted-foreground">
                Generate business assets with AI. Use the quick commands below
                or type a custom prompt to get started.
              </p>
            </div>
          ) : (
            outputs.map((output) => (
              <OutputCard key={output.id} output={output} />
            ))
          )}
          {isProcessing && (
            <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/30 p-4">
              <div className="flex gap-1">
                <span className="size-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                <span className="size-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                <span className="size-2 animate-bounce rounded-full bg-primary" />
              </div>
              <span className="text-sm text-muted-foreground">
                Generating response...
              </span>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-card/30 p-4">
        <div className="flex flex-col gap-4">
          <CommandButtons onCommand={handleCommand} disabled={isProcessing} />
          <TerminalInput onSubmit={handleCommand} isProcessing={isProcessing} />
        </div>
      </div>
    </div>
  )
}
