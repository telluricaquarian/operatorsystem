'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

const sections = [
  {
    id: 's1',
    title: 'What is Claude Code?',
    body: 'Claude Code is an AI-powered coding system that can read, understand, and modify your codebase.\n\nIt allows you to:',
    bullets: [
      'build features',
      'fix bugs',
      'restructure systems',
      'generate components',
    ],
    footer: 'All through natural language instructions.',
  },
  {
    id: 's2',
    title: 'How it works',
    body: 'You describe what you want.\n\nClaude Code:',
    bullets: [
      'reads your existing code',
      'understands structure and dependencies',
      'makes precise changes',
      'outputs working code',
    ],
    footer: 'This removes the need to manually write or navigate large amounts of code.',
  },
  {
    id: 's3',
    title: 'Why it matters',
    body: 'Claude Code dramatically reduces:',
    bullets: [
      'development time',
      'cognitive load',
      'context switching',
    ],
    footer: null,
    secondBody: 'It enables:',
    secondBullets: [
      'faster iteration',
      'higher quality output',
      'consistent system architecture',
    ],
  },
  {
    id: 's4',
    title: 'Claude Code inside Operator System',
    body: 'Claude Code is the execution layer of the system.\n\nIt is used to:',
    bullets: [
      'build and refine interfaces',
      'implement workflows',
      'connect MCPs',
      'maintain system integrity',
    ],
    footer: 'It turns ideas into production-ready systems.',
  },
]

export function ClaudeCodePanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight">Claude Code — Execution Engine</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Translate intent into working systems, interfaces, and logic.
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-10 pb-10">
          {sections.map((section) => (
            <div key={section.id} className="space-y-3">
              <h2 className="text-sm font-semibold text-foreground">{section.title}</h2>

              {section.body && (
                <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              )}

              {section.bullets && (
                <ul className="space-y-1 pl-0.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-0.5 text-muted-foreground/40">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {'secondBody' in section && section.secondBody && (
                <>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {section.secondBody}
                  </p>
                  <ul className="space-y-1 pl-0.5">
                    {section.secondBullets?.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-0.5 text-muted-foreground/40">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {section.footer && (
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
