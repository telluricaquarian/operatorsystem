'use client'

import { ArrowRight } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ─── Metric Card ─────────────────────────────────────────────────────────────

function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3 space-y-1">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">{label}</p>
      <p className="text-2xl font-semibold text-foreground tabular-nums">{value}</p>
    </div>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

function Section({ title, description, children }: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/50 p-5 space-y-4">
      <div className="space-y-0.5">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

// ─── Mini inner card ─────────────────────────────────────────────────────────

function InnerCard({ title, description, status }: {
  title: string
  description: string
  status?: string
}) {
  return (
    <div className="rounded-md border border-border/40 bg-background/40 px-3 py-2.5 space-y-1.5">
      <p className="text-xs font-medium text-foreground">{title}</p>
      <p className="text-[11px] text-muted-foreground leading-relaxed">{description}</p>
      {status && (
        <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">{status}</p>
      )}
    </div>
  )
}

// ─── Pipeline stage ───────────────────────────────────────────────────────────

function PipelineStage({ label, count, last }: { label: string; count: number; last?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-center space-y-0.5">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">{label}</p>
        <p className="text-lg font-semibold text-foreground tabular-nums">{count}</p>
      </div>
      {!last && <ArrowRight className="size-3 text-muted-foreground/30 shrink-0" />}
    </div>
  )
}

// ─── Automation rule ──────────────────────────────────────────────────────────

function AutomationRule({ condition, action }: { condition: string; action: string }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-border/40 bg-background/40 px-3 py-2.5">
      <span className="mt-0.5 rounded bg-orange-500/10 border border-orange-500/20 px-1.5 py-0.5 text-[10px] font-medium text-orange-400 uppercase tracking-wide shrink-0">
        If
      </span>
      <p className="text-[11px] text-muted-foreground leading-relaxed">
        <span className="text-foreground/80 font-medium">{condition}</span>
        {' → '}
        {action}
      </p>
    </div>
  )
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export function ClientAcquisitionPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight">Client Acquisition</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Lead generation, qualification, outreach, and conversion infrastructure.
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-5 pb-10">

          {/* ── Metrics ───────────────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <MetricCard label="Total Leads" value={312} />
            <MetricCard label="Qualified" value={42} />
            <MetricCard label="Outreach Active" value={18} />
            <MetricCard label="Proposals Sent" value={7} />
          </div>

          {/* ── Lead Engine ───────────────────────────────────────────── */}
          <Section
            title="Lead Engine"
            description="Generate, import, and organize lead sources for outbound acquisition."
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <InnerCard
                title="Scraped Leads"
                description="Apify datasets, directories, and structured prospect extraction"
              />
              <InnerCard
                title="Imported Lists"
                description="CSV uploads, curated spreadsheets, and external lead sources"
              />
              <InnerCard
                title="Live Capture"
                description="Forms, waitlists, and inbound capture across owned channels"
              />
            </div>
            <div className="pt-1">
              <Button size="sm" variant="outline" className="h-7 text-xs border-border/50 hover:border-primary/40">
                Generate Leads
              </Button>
            </div>
          </Section>

          {/* ── Qualification Layer ───────────────────────────────────── */}
          <Section
            title="Qualification Layer"
            description="Filter raw leads into high-intent opportunities based on fit, readiness, and commercial potential."
          >
            <div className="flex flex-wrap gap-2">
              {['ICP Match', 'Budget Signal', 'Website Quality', 'Automation Readiness'].map((pill) => (
                <Badge
                  key={pill}
                  variant="outline"
                  className="rounded-full border-border/50 text-muted-foreground text-xs"
                >
                  {pill}
                </Badge>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'High Intent', value: 11 },
                { label: 'Warm', value: 23 },
                { label: 'Low Priority', value: 278 },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-md border border-border/40 bg-background/40 px-3 py-2 text-center space-y-0.5">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">{label}</p>
                  <p className="text-base font-semibold text-foreground tabular-nums">{value}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Outreach System ───────────────────────────────────────── */}
          <Section
            title="Outreach System"
            description="Activate lead contact across multiple channels with reusable messaging systems and follow-up logic."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <InnerCard
                title="Email Outreach"
                description="Sequences, follow-ups, and conversion messaging"
                status="Active"
              />
              <InnerCard
                title="Social Outreach"
                description="DM scripts, contact angles, and platform-specific outreach"
                status="Ready"
              />
              <InnerCard
                title="Loom Outreach"
                description="Video-first personalized outreach for higher response rates"
                status="Draft"
              />
              <InnerCard
                title="Calls"
                description="Direct contact, logging, and call outcome tracking"
                status="Tracking"
              />
            </div>
          </Section>

          {/* ── Offer Matching ────────────────────────────────────────── */}
          <Section
            title="Offer Matching"
            description="Map each qualified lead to the most relevant Areculateir offer based on business need and conversion context."
          >
            <div className="flex flex-wrap gap-2">
              {['Web Design', 'Automation Systems', 'Education Platform', 'Hybrid Build'].map((offer) => (
                <span
                  key={offer}
                  className="rounded-full border border-orange-500/30 bg-orange-500/8 px-3 py-1 text-xs text-orange-400"
                >
                  {offer}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground/60 italic">
              The right offer reduces friction and increases conversion clarity.
            </p>
          </Section>

          {/* ── Pipeline Overview ─────────────────────────────────────── */}
          <Section title="Pipeline Overview">
            <div className="flex flex-wrap items-center gap-2">
              <PipelineStage label="Lead" count={312} />
              <PipelineStage label="Qualified" count={42} />
              <PipelineStage label="Contacted" count={18} />
              <PipelineStage label="Responded" count={9} />
              <PipelineStage label="Proposal" count={7} />
              <PipelineStage label="Closed" count={2} last />
            </div>
          </Section>

          {/* ── Automation Layer ──────────────────────────────────────── */}
          <Section
            title="Automation Layer"
            description="Trigger actions automatically as leads move through qualification, outreach, and proposal stages."
          >
            <div className="space-y-2">
              <AutomationRule
                condition="qualified"
                action="create outreach sequence"
              />
              <AutomationRule
                condition="no reply"
                action="trigger follow-up"
              />
              <AutomationRule
                condition="responded"
                action="prepare proposal draft"
              />
            </div>
          </Section>

        </div>
      </ScrollArea>
    </div>
  )
}
