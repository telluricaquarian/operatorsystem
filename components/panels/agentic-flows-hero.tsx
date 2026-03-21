'use client'

const nodes = [
  { id: 'start',    label: 'START',    sub: 'Lead Intake' },
  { id: 'qualify',  label: 'QUALIFY',  sub: 'Qualification' },
  { id: 'proposal', label: 'PROPOSAL', sub: 'Proposal Logic' },
  { id: 'output',   label: 'OUTPUT',   sub: 'Structure Output' },
]

export function AgenticFlowsHero() {
  return (
    <div className="mb-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
      {/* dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, oklch(0.3 0 0 / 0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative px-6 pt-5 pb-6">
        {/* Header */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 mb-1">
            Overview
          </p>
          <h2 className="text-sm font-semibold tracking-tight text-foreground">
            Agentic Workflow Overview
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed max-w-lg">
            A high-level execution chain showing how inputs are transformed into structured business assets.
          </p>
        </div>

        {/* Node chain */}
        <div className="flex items-center gap-0 overflow-x-auto pb-1 scrollbar-hide">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex items-center shrink-0">
              {/* Node */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="animate-node-breathe flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 min-w-[88px]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <span className="text-[11px] font-bold tracking-widest text-primary">
                    {node.label}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground/70 whitespace-nowrap">
                  {node.sub}
                </span>
              </div>

              {/* Connector — not after last node */}
              {i < nodes.length - 1 && (
                <div className="flex items-center mx-2 mb-4">
                  <div
                    className="animate-flow-pulse h-px w-10 bg-gradient-to-r from-primary/60 to-primary/20 rounded-full"
                    style={{ animationDelay: `${i * 0.6 + 0.3}s` }}
                  />
                  <svg
                    width="6"
                    height="8"
                    viewBox="0 0 6 8"
                    fill="none"
                    className="shrink-0 -ml-px"
                    style={{ opacity: 0.5 }}
                  >
                    <path d="M0 0L6 4L0 8" fill="oklch(0.75 0.15 45)" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chronology label strip */}
        <div className="mt-4 flex items-center gap-1.5">
          <div className="h-px flex-1 bg-border/40" />
          <span className="text-[10px] text-muted-foreground/50 tracking-wide whitespace-nowrap">
            Lead Intake → Qualification → Proposal Logic → Structure Output
          </span>
          <div className="h-px flex-1 bg-border/40" />
        </div>
      </div>
    </div>
  )
}
