'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

const sections = [
  {
    id: 's1',
    title: 'What is an MCP?',
    body: 'An MCP (Modular Capability Protocol) is a structured way to connect your system to external tools, data sources, and services.\n\nInstead of building everything from scratch, MCPs allow you to plug into existing capabilities such as:',
    bullets: [
      'data scraping tools',
      'APIs',
      'automation services',
      'internal databases',
    ],
    footer: 'Think of MCPs as connectors that give your system new abilities instantly.',
  },
  {
    id: 's2',
    title: 'Why MCPs matter',
    body: 'Without MCPs, your system is limited to what is built inside it.\n\nWith MCPs:',
    bullets: [
      'you can access external data',
      'automate workflows across platforms',
      'scale capabilities without increasing complexity',
    ],
    footer: 'MCPs turn your system from a static application into a dynamic, extensible operating environment.',
  },
  {
    id: 's3',
    title: 'Examples of MCP usage',
    body: null,
    bullets: [
      'pulling lead data from directories',
      'enriching client information via APIs',
      'triggering automations across tools',
      'syncing data between systems',
    ],
    footer: null,
  },
  {
    id: 's4',
    title: 'How MCPs fit into Operator System',
    body: 'MCPs sit between your system and the outside world.\n\nThey enable:',
    bullets: [
      'input expansion — more data sources',
      'output execution — actions across tools',
      'system intelligence — better decisions from better data',
    ],
    footer: null,
  },
]

export function McpsPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight">MCPs — Modular Capability Protocols</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Extend the system with external tools, data sources, and automation layers.
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
