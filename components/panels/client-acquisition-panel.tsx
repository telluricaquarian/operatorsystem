'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputCls =
  'w-full rounded-md border border-border/50 bg-background/40 px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors'
const selectCls =
  'w-full rounded-md border border-border/50 bg-background/40 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors cursor-pointer'
const textareaCls =
  'w-full rounded-md border border-border/50 bg-background/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none'

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionCard({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/50 p-5 space-y-4">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-0.5">{step}</p>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11px] uppercase tracking-wide text-muted-foreground/50 mb-1">{children}</label>
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      {children}
    </div>
  )
}

function CheckItem({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-3.5 accent-orange-400"
      />
      <span className={`text-xs transition-colors ${checked ? 'text-muted-foreground line-through' : 'text-foreground/80'}`}>
        {label}
      </span>
    </label>
  )
}

function ChecklistGrid({ items, state, onChange }: {
  items: { key: string; label: string }[]
  state: Record<string, boolean>
  onChange: (key: string, val: boolean) => void
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2 border-t border-border/30 pt-4">
      {items.map(({ key, label }) => (
        <CheckItem key={key} label={label} checked={state[key] ?? false} onChange={(v) => onChange(key, v)} />
      ))}
    </div>
  )
}

function Tally({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-border/40 bg-background/40 px-3 py-2 text-center">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">{label}</p>
      <p className="text-base font-semibold text-foreground tabular-nums">{value}</p>
    </div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Lead {
  id: string
  fullName: string
  email: string
  phone: string
  source: string
  dateAdded: string
  qualification: string
  stage: string
  notes: string
}

interface FollowUp {
  id: string
  leadName: string
  channel: string
  actionDate: string
  status: string
  nextActionDate: string
  outcomeNotes: string
  completed: boolean
}

const blankLead = (): Lead => ({
  id: crypto.randomUUID(),
  fullName: '', email: '', phone: '', source: '',
  dateAdded: '', qualification: 'Unreviewed', stage: 'New Lead', notes: '',
})

const blankFollowUp = (): FollowUp => ({
  id: crypto.randomUUID(),
  leadName: '', channel: 'Email', actionDate: '',
  status: 'Not Sent', nextActionDate: '', outcomeNotes: '', completed: false,
})

// ─── Panel ────────────────────────────────────────────────────────────────────

export function ClientAcquisitionPanel() {

  // Section 1 — Traffic
  const [traffic, setTraffic] = useState({
    sourceType: '', platform: '', targetMarket: '',
    geography: '', campaignName: '', dateStarted: '', active: false, notes: '',
  })
  const [trafficChecks, setTrafficChecks] = useState<Record<string, boolean>>({
    audienceDefined: false, platformSelected: false, channelActivated: false,
  })

  // Section 2 — Offer
  const [offer, setOffer] = useState({
    name: '', type: '', promise: '', pain: '', whyConvert: '',
  })
  const [offerChecks, setOfferChecks] = useState<Record<string, boolean>>({
    simple: false, lowFriction: false, matchesPain: false, oneCTA: false,
  })

  // Section 3 — Copy + Creative
  const [copy, setCopy] = useState({
    cta: '', headline: '', description: '', primaryText: '',
    creativeType: '', creativeStatus: 'Not Started', creativeNotes: '',
  })
  const [copyChecks, setCopyChecks] = useState<Record<string, boolean>>({
    hook: false, offerStated: false, proof: false, creative: false, ctaAligned: false,
  })

  // Section 4 — Lead Capture
  const [capture, setCapture] = useState({
    method: '', url: '', formFields: '', qualifyingQuestions: '', thankYou: '',
  })
  const [captureChecks, setCaptureChecks] = useState<Record<string, boolean>>({
    nameCaptured: false, emailCaptured: false, phoneCaptured: false,
    qualifyingQs: false, thankYouDefined: false, nextStepSet: false,
  })

  // Section 5 — CRM + Pipeline
  const [crmSystem, setCrmSystem] = useState('')
  const [pipelineName, setPipelineName] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [newLead, setNewLead] = useState<Lead>(blankLead())
  const [showAddLead, setShowAddLead] = useState(false)

  // Section 6 — Follow-Up
  const [followUps, setFollowUps] = useState<FollowUp[]>([])
  const [newFollowUp, setNewFollowUp] = useState<FollowUp>(blankFollowUp())
  const [showAddFollowUp, setShowAddFollowUp] = useState(false)

  // Section 7 — Execution Checklist
  const [execChecks, setExecChecks] = useState<Record<string, boolean>>({
    trafficSelected: false, offerDefined: false, copyWritten: false,
    creativePrepared: false, captureMechanism: false, crmReady: false,
    leadAdded: false, followUpSent: false, appointmentBooked: false,
  })

  // Section 8 — Notes
  const [notes, setNotes] = useState('')
  const [nextAction, setNextAction] = useState('')
  const [nextActionDate, setNextActionDate] = useState('')

  // ── Derived tallies ───────────────────────────────────────────────────────

  const leadTallies = {
    total: leads.length,
    qualified: leads.filter((l) => l.qualification === 'Qualified').length,
    warm: leads.filter((l) => l.qualification === 'Warm').length,
    lowPriority: leads.filter((l) => l.qualification === 'Low Priority').length,
    booked: leads.filter((l) => l.stage === 'Booked').length,
    proposalSent: leads.filter((l) => l.stage === 'Proposal Sent').length,
    closedWon: leads.filter((l) => l.stage === 'Closed Won').length,
  }

  const followUpTallies = {
    total: followUps.length,
    sent: followUps.filter((f) => ['Sent', 'Replied', 'Booked'].includes(f.status)).length,
    replied: followUps.filter((f) => f.status === 'Replied').length,
    booked: followUps.filter((f) => f.status === 'Booked').length,
    completed: followUps.filter((f) => f.completed).length,
  }

  const execCount = Object.values(execChecks).filter(Boolean).length

  // ── Helpers ───────────────────────────────────────────────────────────────

  function addLead() {
    if (!newLead.fullName.trim()) return
    setLeads((prev) => [...prev, { ...newLead, id: crypto.randomUUID() }])
    setNewLead(blankLead())
    setShowAddLead(false)
  }

  function deleteLead(id: string) {
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  function updateLead(id: string, field: keyof Lead, value: string) {
    setLeads((prev) => prev.map((l) => l.id === id ? { ...l, [field]: value } : l))
  }

  function addFollowUp() {
    if (!newFollowUp.leadName.trim()) return
    setFollowUps((prev) => [...prev, { ...newFollowUp, id: crypto.randomUUID() }])
    setNewFollowUp(blankFollowUp())
    setShowAddFollowUp(false)
  }

  function deleteFollowUp(id: string) {
    setFollowUps((prev) => prev.filter((f) => f.id !== id))
  }

  function updateFollowUp(id: string, field: keyof FollowUp, value: string | boolean) {
    setFollowUps((prev) => prev.map((f) => f.id === id ? { ...f, [field]: value } : f))
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight">Client Acquisition</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Chronological lead-generation workflow for capturing attention, converting interest, qualifying leads, and moving prospects toward booked conversations.
        </p>
        <p className="text-xs text-muted-foreground/40 mt-1.5">
          Use this page to plan, execute, and track each acquisition step without relying on fake dashboard data.
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-5 pb-10">

          {/* ── 01 Traffic Source ─────────────────────────────────────── */}
          <SectionCard step="Step 01" title="Traffic Source">
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="Source Type">
                <select
                  className={selectCls}
                  value={traffic.sourceType}
                  onChange={(e) => setTraffic({ ...traffic, sourceType: e.target.value })}
                >
                  <option value="">Select...</option>
                  {['Meta Ads','Cold Email','Cold DM','Cold Calling','SEO','AEO','YouTube','LinkedIn','Referral','Other'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </FieldGroup>
              <FieldGroup label="Platform / Channel">
                <input className={inputCls} placeholder="e.g. Instagram, Gmail, LinkedIn" value={traffic.platform} onChange={(e) => setTraffic({ ...traffic, platform: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Target Market">
                <input className={inputCls} placeholder="Who are you targeting?" value={traffic.targetMarket} onChange={(e) => setTraffic({ ...traffic, targetMarket: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Geography">
                <input className={inputCls} placeholder="Country, city, region" value={traffic.geography} onChange={(e) => setTraffic({ ...traffic, geography: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Campaign / Outreach Name">
                <input className={inputCls} placeholder="Name this campaign" value={traffic.campaignName} onChange={(e) => setTraffic({ ...traffic, campaignName: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Date Started">
                <input type="date" className={inputCls} value={traffic.dateStarted} onChange={(e) => setTraffic({ ...traffic, dateStarted: e.target.value })} />
              </FieldGroup>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={traffic.active} onChange={(e) => setTraffic({ ...traffic, active: e.target.checked })} className="size-3.5 accent-orange-400" />
              <span className="text-xs text-foreground/80">Active</span>
            </label>
            <FieldGroup label="Traffic Notes">
              <textarea className={textareaCls} rows={3} placeholder="Notes on traffic strategy, observations..." value={traffic.notes} onChange={(e) => setTraffic({ ...traffic, notes: e.target.value })} />
            </FieldGroup>
            <ChecklistGrid
              items={[
                { key: 'audienceDefined', label: 'Audience defined' },
                { key: 'platformSelected', label: 'Platform selected' },
                { key: 'channelActivated', label: 'Channel activated' },
              ]}
              state={trafficChecks}
              onChange={(k, v) => setTrafficChecks({ ...trafficChecks, [k]: v })}
            />
          </SectionCard>

          {/* ── 02 Offer ──────────────────────────────────────────────── */}
          <SectionCard step="Step 02" title="Offer">
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="Offer Name">
                <input className={inputCls} placeholder="Name of the offer" value={offer.name} onChange={(e) => setOffer({ ...offer, name: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Offer Type">
                <select className={selectCls} value={offer.type} onChange={(e) => setOffer({ ...offer, type: e.target.value })}>
                  <option value="">Select...</option>
                  {['Free Trial','Free Audit','Free Consultation','Demo','Lead Magnet','Quote / Estimate','Other'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </FieldGroup>
              <FieldGroup label="Core Promise">
                <input className={inputCls} placeholder="What do you promise to deliver?" value={offer.promise} onChange={(e) => setOffer({ ...offer, promise: e.target.value })} />
              </FieldGroup>
            </div>
            <FieldGroup label="Target Pain / Desire">
              <textarea className={textareaCls} rows={2} placeholder="What pain or desire does this offer address?" value={offer.pain} onChange={(e) => setOffer({ ...offer, pain: e.target.value })} />
            </FieldGroup>
            <FieldGroup label="Why This Offer Should Convert">
              <textarea className={textareaCls} rows={2} placeholder="Why will the audience say yes?" value={offer.whyConvert} onChange={(e) => setOffer({ ...offer, whyConvert: e.target.value })} />
            </FieldGroup>
            <ChecklistGrid
              items={[
                { key: 'simple', label: 'Simple and clear' },
                { key: 'lowFriction', label: 'Low friction' },
                { key: 'matchesPain', label: 'Matches audience pain' },
                { key: 'oneCTA', label: 'One clear CTA only' },
              ]}
              state={offerChecks}
              onChange={(k, v) => setOfferChecks({ ...offerChecks, [k]: v })}
            />
          </SectionCard>

          {/* ── 03 Copy + Creative ────────────────────────────────────── */}
          <SectionCard step="Step 03" title="Copy + Creative">
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="CTA Button Label">
                <input className={inputCls} placeholder="e.g. Book a Free Call" value={copy.cta} onChange={(e) => setCopy({ ...copy, cta: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Headline">
                <input className={inputCls} placeholder="Main headline" value={copy.headline} onChange={(e) => setCopy({ ...copy, headline: e.target.value })} />
              </FieldGroup>
              <FieldGroup label="Description">
                <input className={inputCls} placeholder="Short description line" value={copy.description} onChange={(e) => setCopy({ ...copy, description: e.target.value })} />
              </FieldGroup>
            </div>
            <FieldGroup label="Primary Text">
              <textarea className={textareaCls} rows={4} placeholder="Full ad or outreach body copy..." value={copy.primaryText} onChange={(e) => setCopy({ ...copy, primaryText: e.target.value })} />
            </FieldGroup>
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="Creative Type">
                <select className={selectCls} value={copy.creativeType} onChange={(e) => setCopy({ ...copy, creativeType: e.target.value })}>
                  <option value="">Select...</option>
                  {['Static','Video','Carousel','Loom','Other'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </FieldGroup>
              <FieldGroup label="Creative Status">
                <select className={selectCls} value={copy.creativeStatus} onChange={(e) => setCopy({ ...copy, creativeStatus: e.target.value })}>
                  {['Not Started','Draft','Ready','Live'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </FieldGroup>
            </div>
            <FieldGroup label="Creative Notes">
              <textarea className={textareaCls} rows={2} placeholder="Notes on creative direction, references..." value={copy.creativeNotes} onChange={(e) => setCopy({ ...copy, creativeNotes: e.target.value })} />
            </FieldGroup>
            <ChecklistGrid
              items={[
                { key: 'hook', label: 'Hook defined' },
                { key: 'offerStated', label: 'Offer stated clearly' },
                { key: 'proof', label: 'Proof / scarcity / risk reversal included' },
                { key: 'creative', label: 'Creative prepared' },
                { key: 'ctaAligned', label: 'CTA aligned with offer' },
              ]}
              state={copyChecks}
              onChange={(k, v) => setCopyChecks({ ...copyChecks, [k]: v })}
            />
          </SectionCard>

          {/* ── 04 Lead Capture ───────────────────────────────────────── */}
          <SectionCard step="Step 04" title="Lead Capture">
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="Capture Method">
                <select className={selectCls} value={capture.method} onChange={(e) => setCapture({ ...capture, method: e.target.value })}>
                  <option value="">Select...</option>
                  {['Meta Lead Form','Landing Page Funnel','Website Form','Calendar Form','Manual Capture','Other'].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </FieldGroup>
              <FieldGroup label="Capture URL / Form Link">
                <input className={inputCls} placeholder="https://..." value={capture.url} onChange={(e) => setCapture({ ...capture, url: e.target.value })} />
              </FieldGroup>
            </div>
            <FieldGroup label="Form Fields Included">
              <textarea className={textareaCls} rows={2} placeholder="List the fields on the form" value={capture.formFields} onChange={(e) => setCapture({ ...capture, formFields: e.target.value })} />
            </FieldGroup>
            <FieldGroup label="Qualifying Questions">
              <textarea className={textareaCls} rows={2} placeholder="Questions used to qualify inbound leads" value={capture.qualifyingQuestions} onChange={(e) => setCapture({ ...capture, qualifyingQuestions: e.target.value })} />
            </FieldGroup>
            <FieldGroup label="Thank You / Next Step Message">
              <textarea className={textareaCls} rows={2} placeholder="What happens after they submit?" value={capture.thankYou} onChange={(e) => setCapture({ ...capture, thankYou: e.target.value })} />
            </FieldGroup>
            <ChecklistGrid
              items={[
                { key: 'nameCaptured', label: 'Name captured' },
                { key: 'emailCaptured', label: 'Email captured' },
                { key: 'phoneCaptured', label: 'Phone captured' },
                { key: 'qualifyingQs', label: 'Qualifying questions added' },
                { key: 'thankYouDefined', label: 'Thank-you step defined' },
                { key: 'nextStepSet', label: 'Next-step expectation set' },
              ]}
              state={captureChecks}
              onChange={(k, v) => setCaptureChecks({ ...captureChecks, [k]: v })}
            />
          </SectionCard>

          {/* ── 05 CRM + Pipeline ─────────────────────────────────────── */}
          <SectionCard step="Step 05" title="CRM + Pipeline">
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="CRM / System Used">
                <input className={inputCls} placeholder="e.g. Notion, HubSpot, Sheets" value={crmSystem} onChange={(e) => setCrmSystem(e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Pipeline Name">
                <input className={inputCls} placeholder="Name of this pipeline" value={pipelineName} onChange={(e) => setPipelineName(e.target.value)} />
              </FieldGroup>
            </div>

            {/* Tallies */}
            {leads.length > 0 && (
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                <Tally label="Total" value={leadTallies.total} />
                <Tally label="Qualified" value={leadTallies.qualified} />
                <Tally label="Warm" value={leadTallies.warm} />
                <Tally label="Low Pri." value={leadTallies.lowPriority} />
                <Tally label="Booked" value={leadTallies.booked} />
                <Tally label="Proposal" value={leadTallies.proposalSent} />
                <Tally label="Won" value={leadTallies.closedWon} />
              </div>
            )}

            {/* Lead list */}
            {leads.length > 0 && (
              <div className="space-y-2">
                {leads.map((lead) => (
                  <div key={lead.id} className="rounded-md border border-border/40 bg-background/30 p-3 space-y-2">
                    <div className="grid gap-2 sm:grid-cols-3">
                      <input className={inputCls} placeholder="Full Name" value={lead.fullName} onChange={(e) => updateLead(lead.id, 'fullName', e.target.value)} />
                      <input className={inputCls} placeholder="Email" value={lead.email} onChange={(e) => updateLead(lead.id, 'email', e.target.value)} />
                      <input className={inputCls} placeholder="Phone" value={lead.phone} onChange={(e) => updateLead(lead.id, 'phone', e.target.value)} />
                    </div>
                    <div className="grid gap-2 sm:grid-cols-4">
                      <input className={inputCls} placeholder="Source" value={lead.source} onChange={(e) => updateLead(lead.id, 'source', e.target.value)} />
                      <input type="date" className={inputCls} value={lead.dateAdded} onChange={(e) => updateLead(lead.id, 'dateAdded', e.target.value)} />
                      <select className={selectCls} value={lead.qualification} onChange={(e) => updateLead(lead.id, 'qualification', e.target.value)}>
                        {['Unreviewed','Qualified','Warm','Low Priority','Rejected'].map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <select className={selectCls} value={lead.stage} onChange={(e) => updateLead(lead.id, 'stage', e.target.value)}>
                        {['New Lead','Contacted','Awaiting Reply','Responded','Qualified','Booked','Proposal Sent','Closed Won','Closed Lost'].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <input className={inputCls} placeholder="Notes" value={lead.notes} onChange={(e) => updateLead(lead.id, 'notes', e.target.value)} />
                      <button onClick={() => deleteLead(lead.id)} className="shrink-0 rounded-md border border-border/40 px-2 text-muted-foreground/50 hover:text-red-400 hover:border-red-400/30 transition-colors">
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add lead form */}
            {showAddLead && (
              <div className="rounded-md border border-orange-500/20 bg-orange-500/5 p-3 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-orange-400/70">New Lead</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  <input className={inputCls} placeholder="Full Name *" value={newLead.fullName} onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })} />
                  <input className={inputCls} placeholder="Email" value={newLead.email} onChange={(e) => setNewLead({ ...newLead, email: e.target.value })} />
                  <input className={inputCls} placeholder="Phone" value={newLead.phone} onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })} />
                </div>
                <div className="grid gap-2 sm:grid-cols-4">
                  <input className={inputCls} placeholder="Source" value={newLead.source} onChange={(e) => setNewLead({ ...newLead, source: e.target.value })} />
                  <input type="date" className={inputCls} value={newLead.dateAdded} onChange={(e) => setNewLead({ ...newLead, dateAdded: e.target.value })} />
                  <select className={selectCls} value={newLead.qualification} onChange={(e) => setNewLead({ ...newLead, qualification: e.target.value })}>
                    {['Unreviewed','Qualified','Warm','Low Priority','Rejected'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <select className={selectCls} value={newLead.stage} onChange={(e) => setNewLead({ ...newLead, stage: e.target.value })}>
                    {['New Lead','Contacted','Awaiting Reply','Responded','Qualified','Booked','Proposal Sent','Closed Won','Closed Lost'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <input className={inputCls} placeholder="Notes" value={newLead.notes} onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })} />
                <div className="flex gap-2 pt-1">
                  <Button size="sm" onClick={addLead} className="h-7 text-xs">Save Lead</Button>
                  <Button size="sm" variant="ghost" onClick={() => { setShowAddLead(false); setNewLead(blankLead()) }} className="h-7 text-xs text-muted-foreground">Cancel</Button>
                </div>
              </div>
            )}

            {!showAddLead && (
              <Button size="sm" variant="outline" onClick={() => setShowAddLead(true)} className="h-7 text-xs border-border/50 gap-1.5">
                <Plus className="size-3" /> Add Lead
              </Button>
            )}
          </SectionCard>

          {/* ── 06 Appointment Setting ────────────────────────────────── */}
          <SectionCard step="Step 06" title="Appointment Setting">

            {/* Tallies */}
            {followUps.length > 0 && (
              <div className="grid grid-cols-5 gap-2">
                <Tally label="Total" value={followUpTallies.total} />
                <Tally label="Sent" value={followUpTallies.sent} />
                <Tally label="Replied" value={followUpTallies.replied} />
                <Tally label="Booked" value={followUpTallies.booked} />
                <Tally label="Completed" value={followUpTallies.completed} />
              </div>
            )}

            {/* Follow-up list */}
            {followUps.length > 0 && (
              <div className="space-y-2">
                {followUps.map((fu) => (
                  <div key={fu.id} className="rounded-md border border-border/40 bg-background/30 p-3 space-y-2">
                    <div className="grid gap-2 sm:grid-cols-4">
                      <input className={inputCls} placeholder="Lead Name / Ref" value={fu.leadName} onChange={(e) => updateFollowUp(fu.id, 'leadName', e.target.value)} />
                      <select className={selectCls} value={fu.channel} onChange={(e) => updateFollowUp(fu.id, 'channel', e.target.value)}>
                        {['SMS','WhatsApp','Email','Call','Loom','DM'].map((o) => <option key={o}>{o}</option>)}
                      </select>
                      <input type="date" className={inputCls} value={fu.actionDate} onChange={(e) => updateFollowUp(fu.id, 'actionDate', e.target.value)} />
                      <select className={selectCls} value={fu.status} onChange={(e) => updateFollowUp(fu.id, 'status', e.target.value)}>
                        {['Not Sent','Sent','Replied','Booked','No Response'].map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div>
                        <FieldLabel>Next Action Date</FieldLabel>
                        <input type="date" className={inputCls} value={fu.nextActionDate} onChange={(e) => updateFollowUp(fu.id, 'nextActionDate', e.target.value)} />
                      </div>
                      <div>
                        <FieldLabel>Outcome Notes</FieldLabel>
                        <input className={inputCls} placeholder="What happened?" value={fu.outcomeNotes} onChange={(e) => updateFollowUp(fu.id, 'outcomeNotes', e.target.value)} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={fu.completed} onChange={(e) => updateFollowUp(fu.id, 'completed', e.target.checked)} className="size-3.5 accent-orange-400" />
                        <span className="text-xs text-foreground/70">Completed</span>
                      </label>
                      <button onClick={() => deleteFollowUp(fu.id)} className="rounded-md border border-border/40 px-2 py-1 text-muted-foreground/50 hover:text-red-400 hover:border-red-400/30 transition-colors">
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add follow-up form */}
            {showAddFollowUp && (
              <div className="rounded-md border border-orange-500/20 bg-orange-500/5 p-3 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-orange-400/70">New Follow-Up</p>
                <div className="grid gap-2 sm:grid-cols-4">
                  <input className={inputCls} placeholder="Lead Name *" value={newFollowUp.leadName} onChange={(e) => setNewFollowUp({ ...newFollowUp, leadName: e.target.value })} />
                  <select className={selectCls} value={newFollowUp.channel} onChange={(e) => setNewFollowUp({ ...newFollowUp, channel: e.target.value })}>
                    {['SMS','WhatsApp','Email','Call','Loom','DM'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <input type="date" className={inputCls} value={newFollowUp.actionDate} onChange={(e) => setNewFollowUp({ ...newFollowUp, actionDate: e.target.value })} />
                  <select className={selectCls} value={newFollowUp.status} onChange={(e) => setNewFollowUp({ ...newFollowUp, status: e.target.value })}>
                    {['Not Sent','Sent','Replied','Booked','No Response'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button size="sm" onClick={addFollowUp} className="h-7 text-xs">Save Follow-Up</Button>
                  <Button size="sm" variant="ghost" onClick={() => { setShowAddFollowUp(false); setNewFollowUp(blankFollowUp()) }} className="h-7 text-xs text-muted-foreground">Cancel</Button>
                </div>
              </div>
            )}

            {!showAddFollowUp && (
              <Button size="sm" variant="outline" onClick={() => setShowAddFollowUp(true)} className="h-7 text-xs border-border/50 gap-1.5">
                <Plus className="size-3" /> Add Follow-Up
              </Button>
            )}
          </SectionCard>

          {/* ── 07 Execution Checklist ────────────────────────────────── */}
          <SectionCard step="Step 07" title="Execution Checklist">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground/60">Top-level operator checklist for the whole process.</p>
              <span className="rounded-full border border-border/50 bg-background/40 px-2.5 py-0.5 text-xs text-foreground tabular-nums">
                {execCount} / 9 complete
              </span>
            </div>
            <ChecklistGrid
              items={[
                { key: 'trafficSelected', label: 'Traffic source selected' },
                { key: 'offerDefined', label: 'Offer defined' },
                { key: 'copyWritten', label: 'Copy written' },
                { key: 'creativePrepared', label: 'Creative prepared' },
                { key: 'captureMechanism', label: 'Capture mechanism built' },
                { key: 'crmReady', label: 'CRM ready' },
                { key: 'leadAdded', label: 'Lead added' },
                { key: 'followUpSent', label: 'Follow-up sent' },
                { key: 'appointmentBooked', label: 'Appointment booked' },
              ]}
              state={execChecks}
              onChange={(k, v) => setExecChecks({ ...execChecks, [k]: v })}
            />
          </SectionCard>

          {/* ── 08 Notes & Next Actions ───────────────────────────────── */}
          <SectionCard step="Step 08" title="Notes & Next Actions">
            <FieldGroup label="Working Notes">
              <textarea className={textareaCls} rows={5} placeholder="Ongoing notes, observations, decisions..." value={notes} onChange={(e) => setNotes(e.target.value)} />
            </FieldGroup>
            <div className="grid gap-3 sm:grid-cols-2">
              <FieldGroup label="Next Immediate Action">
                <input className={inputCls} placeholder="What needs to happen next?" value={nextAction} onChange={(e) => setNextAction(e.target.value)} />
              </FieldGroup>
              <FieldGroup label="Next Action Date">
                <input type="date" className={inputCls} value={nextActionDate} onChange={(e) => setNextActionDate(e.target.value)} />
              </FieldGroup>
            </div>
          </SectionCard>

        </div>
      </ScrollArea>
    </div>
  )
}
