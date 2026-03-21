'use client'

const nodes = [
  { id: 'start',    label: 'START',    sub: 'Lead Intake',      detail: 'Inbound / Outbound' },
  { id: 'qualify',  label: 'QUALIFY',  sub: 'Qualification',    detail: 'Fit & Budget Check' },
  { id: 'proposal', label: 'PROPOSAL', sub: 'Proposal Logic',   detail: 'Scope & Pricing' },
  { id: 'output',   label: 'OUTPUT',   sub: 'Structure Output', detail: 'Asset Delivery' },
]

export function AgenticFlowsHero() {
  return (
    <div
      className="relative mb-6 rounded-2xl border border-border/50 overflow-hidden"
      style={{ background: 'oklch(0.09 0 0)', minHeight: '260px' }}
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, oklch(0.32 0 0 / 0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.75 0.15 45 / 0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top/bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.09 0 0) 0%, transparent 18%, transparent 82%, oklch(0.09 0 0) 100%)',
        }}
      />

      <div className="relative flex flex-col h-full px-8 pt-7 pb-8" style={{ minHeight: '260px' }}>
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1.5">
              System Overview
            </p>
            <h2 className="text-base font-semibold tracking-tight text-foreground">
              Agentic Workflow Overview
            </h2>
            <p className="mt-1 text-xs text-muted-foreground/70 leading-relaxed max-w-sm">
              A high-level execution chain showing how inputs are transformed into structured business assets.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 mt-0.5">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Live</span>
          </div>
        </div>

        {/* Node chain */}
        <div className="flex-1 flex items-center">
          {/*
            Position-relative wrapper.
            The continuous line and moving dot are absolute children that span
            the full width. Node cards sit on top (z-index 1) and naturally
            mask the line where it passes beneath them — giving the appearance
            of a single connected system path.
          */}
          <div className="relative flex w-full" style={{ alignItems: 'flex-start' }}>

            {/* ── Continuous background line ── */}
            <div
              className="pointer-events-none"
              style={{
                position: 'absolute',
                /* Align with the vertical center of the cards.
                   Cards are py-4 + ~54px content ≈ 86px tall.
                   Card center ≈ 43px from top of node column. */
                top: '43px',
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                background:
                  'linear-gradient(to right, transparent 0%, oklch(0.75 0.15 45 / 0.3) 8%, oklch(0.75 0.15 45 / 0.3) 92%, transparent 100%)',
                zIndex: 0,
              }}
            />

            {/* ── Single traveling orange dot ── */}
            <div
              className="animate-dot-flow pointer-events-none"
              style={{
                position: 'absolute',
                top: '43px',
                marginTop: '-3.5px',  /* vertically center the 7px dot on the 2px line */
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'oklch(0.75 0.15 45)',
                boxShadow: '0 0 8px 3px oklch(0.75 0.15 45 / 0.55)',
                zIndex: 10,
              }}
            />

            {/* ── Node cards ── */}
            {nodes.map((node, i) => (
              <div
                key={node.id}
                className="flex flex-col items-center"
                style={{ flex: 1, position: 'relative', zIndex: 1 }}
              >
                {/* Card — static, no animation */}
                <div
                  className="w-full max-w-[140px] rounded-xl border border-primary/25 px-4 py-4 flex flex-col items-center gap-1"
                  style={{
                    background: 'oklch(0.13 0 0)',
                    boxShadow: 'inset 0 1px 0 oklch(0.75 0.15 45 / 0.06)',
                  }}
                >
                  <span className="text-[11px] font-bold tracking-[0.18em] text-primary">
                    {node.label}
                  </span>
                  <div className="h-px w-8 bg-border/60 my-0.5" />
                  <span className="text-[11px] font-medium text-foreground/80 text-center">
                    {node.sub}
                  </span>
                  <span className="text-[10px] text-muted-foreground/50 text-center">
                    {node.detail}
                  </span>
                </div>
                {/* Step index below card */}
                <span className="mt-2 text-[9px] text-muted-foreground/35 tracking-widest uppercase">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chronology strip */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/25" />
          <div className="flex items-center gap-2">
            {['Lead Intake', 'Qualification', 'Proposal Logic', 'Structure Output'].map((label, i, arr) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground/40 whitespace-nowrap tracking-wide">
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-muted-foreground/25 text-[10px]">→</span>
                )}
              </div>
            ))}
          </div>
          <div className="h-px flex-1 bg-border/25" />
        </div>
      </div>
    </div>
  )
}
