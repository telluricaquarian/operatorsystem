'use client'

const nodes = [
  { id: 'start',    label: 'START',    sub: 'Lead Intake',      detail: 'Inbound / Outbound' },
  { id: 'qualify',  label: 'QUALIFY',  sub: 'Qualification',    detail: 'Fit & Budget Check' },
  { id: 'proposal', label: 'PROPOSAL', sub: 'Proposal Logic',   detail: 'Scope & Pricing' },
  { id: 'output',   label: 'OUTPUT',   sub: 'Structure Output', detail: 'Asset Delivery' },
]

/*
  Layout strategy:
  - Flex row: [node] [connector-zone] [node] [connector-zone] [node] [connector-zone] [node]
  - Connector zones are 56px wide flex items rendered BETWEEN cards.
    The dot therefore only ever travels within the inter-card gap — never
    through a card's interior.
  - A separate full-width absolute line (z-index 0, behind cards) provides the
    visual "continuous path" feeling. Cards (z-index 1) mask the line where it
    passes beneath them, giving the circuit-board-trace effect.
  - Three dots with delays of 0s / 2s / 4s on a 6s cycle create a sequential
    single-dot-at-a-time animation.
*/

const CONNECTOR_W     = 56  // px — gap between card edges
const DOT_SIZE        = 7   // px
const CARD_CENTER_TOP = 43  // px — card center from top of node column

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
          <div className="relative flex w-full items-start">

            {/*
              Full-width background line — purely visual, sits at z-index 0.
              Cards (z-index 1) cover the portion of the line that runs beneath
              them, so it reads as a connected path entering/exiting each card.
              The animated dot is NOT on this absolute element; it lives inside
              each connector zone below.
            */}
            <div
              className="pointer-events-none"
              style={{
                position: 'absolute',
                top: `${CARD_CENTER_TOP}px`,
                left: 0,
                right: 0,
                height: '2px',
                background:
                  'linear-gradient(to right, transparent 0%, oklch(0.75 0.15 45 / 0.28) 6%, oklch(0.75 0.15 45 / 0.28) 94%, transparent 100%)',
                zIndex: 0,
              }}
            />

            {/* Interleaved nodes and connector zones */}
            {nodes.flatMap((node, i) => {
              const nodeEl = (
                <div
                  key={node.id}
                  className="flex flex-col items-center"
                  style={{ flex: 1, position: 'relative', zIndex: 1 }}
                >
                  {/* Static card */}
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
                  <span className="mt-2 text-[9px] text-muted-foreground/35 tracking-widest uppercase">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              )

              if (i >= nodes.length - 1) return [nodeEl]

              /*
                Connector zone — a fixed-width flex item that lives entirely
                in the gap between two cards. The dot is position:absolute
                inside this zone so it can never overlap a card.
              */
              const connectorEl = (
                <div
                  key={`c-${i}`}
                  style={{
                    position: 'relative',
                    width: `${CONNECTOR_W}px`,
                    flexShrink: 0,
                    /* Align this zone's vertical center with the card center */
                    alignSelf: 'flex-start',
                    marginTop: `${CARD_CENTER_TOP}px`,
                    height: '2px',
                    zIndex: 2,
                  }}
                >
                  {/* Traveling dot — confined strictly to this connector zone */}
                  <div
                    className="animate-dot-flow"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      marginTop: `-${DOT_SIZE / 2}px`,
                      left: '0px',
                      width: `${DOT_SIZE}px`,
                      height: `${DOT_SIZE}px`,
                      borderRadius: '50%',
                      background: 'oklch(0.75 0.15 45)',
                      boxShadow: '0 0 8px 3px oklch(0.75 0.15 45 / 0.55)',
                      /* Each connector's dot fires 2s after the previous */
                      animationDelay: `${i * 2}s`,
                    }}
                  />
                </div>
              )

              return [nodeEl, connectorEl]
            })}
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
