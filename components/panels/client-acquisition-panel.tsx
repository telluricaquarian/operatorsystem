'use client'

import { ArrowRight } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

// ─── Layout primitives ────────────────────────────────────────────────────────

function SectionCard({ step, title, subtitle, children }: {
  step?: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-4">
      {step && (
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">{step}</p>
      )}
      <div className="space-y-0.5">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground/70">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-foreground/80 leading-relaxed">{children}</p>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-widest mt-2">{children}</p>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 pl-0.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
          <span className="mt-1 shrink-0 size-1 rounded-full bg-muted-foreground/30 mt-[7px]" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-1.5 pl-0.5">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
          <span className="shrink-0 text-[11px] font-semibold text-muted-foreground/40 tabular-nums w-4 pt-0.5">{i + 1}.</span>
          {item}
        </li>
      ))}
    </ol>
  )
}

function HighlightBlock({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-orange-500/20 bg-orange-500/5 px-4 py-3 space-y-1">
      {label && (
        <p className="text-[10px] uppercase tracking-widest text-orange-400/70 font-semibold">{label}</p>
      )}
      <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  )
}

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide">{title}</p>
      {children}
    </div>
  )
}

function Divider() {
  return <div className="border-t border-border/30" />
}

function SequenceRow({ stages }: { stages: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-1">
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-2">
          <span className="rounded-md border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-foreground/80">
            {stage}
          </span>
          {i < stages.length - 1 && (
            <ArrowRight className="size-3 text-muted-foreground/30 shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}

function AlphaBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border/40 bg-background/30 px-4 py-3 space-y-1.5">
      <p className="text-[11px] font-semibold text-muted-foreground/50 uppercase tracking-wide">{label}</p>
      {children}
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
          A chronological step-by-step system for generating leads, capturing interest, qualifying prospects, booking appointments, and increasing client value.
        </p>
        <p className="text-xs text-muted-foreground/40 mt-1.5">
          This page outlines the practical acquisition sequence — from attention to booked conversations to long-term system value.
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-5 pb-10">

          {/* ── System Overview ───────────────────────────────────────── */}
          <SectionCard title="System Overview">
            <Body>
              Client acquisition works as a sequence, not as isolated tactics. Each step feeds the next — traffic creates attention, attention becomes leads, leads become booked conversations, and systems increase value, retention, and defensibility.
            </Body>
            <div className="space-y-2">
              <SubHeading>The process</SubHeading>
              <SequenceRow stages={['Traffic', 'Lead Generation', 'AI Appointment Setting', 'Further AI Systems']} />
            </div>
            <BulletList items={[
              'Traffic creates attention',
              'Attention becomes leads',
              'Leads become booked conversations',
              'Systems increase value, retention, and defensibility',
            ]} />
          </SectionCard>

          {/* ── 01 Traffic ────────────────────────────────────────────── */}
          <SectionCard step="Step 01" title="Traffic" subtitle="Generate attention from the right people.">
            <Body>
              Traffic is the generation of new potential leads. It is the raw attention captured for a client&apos;s business. Without traffic, the system has nothing to work with.
            </Body>
            <Body>
              The purpose of traffic is to drive suitable people into a lead-generation mechanism such as a lead form or landing page.
            </Body>
            <Divider />
            <SubBlock title="Traffic Sources">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wide">Organic</p>
                  <BulletList items={['YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Email marketing', 'SEO', 'AEO', 'Cold email', 'Cold DM', 'Cold calling']} />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wide">Paid</p>
                  <BulletList items={['Google Ads', 'YouTube Ads', 'LinkedIn Ads', 'Meta Ads']} />
                </div>
              </div>
            </SubBlock>
            <HighlightBlock label="Recommended starting point">
              Meta Ads are the easiest place to begin for most beginners because they are fast to launch, easy to test, and offer strong targeting.
            </HighlightBlock>
          </SectionCard>

          {/* ── 02 Offer ──────────────────────────────────────────────── */}
          <SectionCard step="Step 02" title="Offer" subtitle="Give people one clear reason to respond.">
            <Body>
              An offer is what a prospect receives in exchange for their information. It is the hook that makes someone raise their hand.
            </Body>
            <SubBlock title="What makes a strong offer">
              <BulletList items={[
                'Simple and clear',
                'Tied to a real pain or desire',
                'Easy to say yes to',
                'Focused on one objective only',
              ]} />
            </SubBlock>
            <Divider />
            <SubBlock title="How to find winning offers">
              <BulletList items={[
                'Ask the client what has worked in the past',
                'Study competitors already advertising successfully',
                'Look for repeated patterns in proven offers',
                'Do not reinvent the wheel if the market has already validated the offer',
              ]} />
            </SubBlock>
            <HighlightBlock label="Rule">
              Promote one offer in one very clear way. Do not confuse prospects with multiple choices.
            </HighlightBlock>
          </SectionCard>

          {/* ── 03 Copy ───────────────────────────────────────────────── */}
          <SectionCard step="Step 03" title="Copy" subtitle="Stop the scroll and make the next action obvious.">
            <Body>
              The purpose of ad copy is not to explain everything. Its purpose is to stop attention, present the offer clearly, and move the prospect to the next step.
            </Body>
            <SubBlock title="Copy is built in reverse order">
              <NumberedList items={[
                'Call to action',
                'Headline',
                'Description',
                'Primary text',
              ]} />
            </SubBlock>
            <Divider />
            <div className="grid gap-3 sm:grid-cols-2">
              <AlphaBlock label="A) Call to Action">
                <Body>Use the clearest action available.</Body>
                <BulletList items={['Learn More', 'Book Now', 'Sign Up', 'Get Quote']} />
              </AlphaBlock>
              <AlphaBlock label="B) Headline">
                <Body>State the offer in 5–7 words. Keep it concise and obvious.</Body>
              </AlphaBlock>
              <AlphaBlock label="C) Description">
                <Body>Support the headline with one of:</Body>
                <BulletList items={['Scarcity', 'Risk reversal', 'Proof']} />
              </AlphaBlock>
              <AlphaBlock label="D) Primary Text">
                <BulletList items={[
                  'Attention hook',
                  'Offer statement',
                  'Why us / proof',
                  'Direct call to action',
                ]} />
              </AlphaBlock>
            </div>
            <HighlightBlock>
              The best copy is usually short, clear, and direct.
            </HighlightBlock>
          </SectionCard>

          {/* ── 04 Creative ───────────────────────────────────────────── */}
          <SectionCard step="Step 04" title="Creative" subtitle="Make the offer visually obvious.">
            <Body>
              Creative is the image or video that communicates the offer visually. Its role is not to win design awards. Its role is to make the message clear and move people toward action.
            </Body>
            <div className="grid gap-3 sm:grid-cols-2">
              <SubBlock title="What makes strong creative">
                <BulletList items={[
                  'The offer is obvious immediately',
                  'It looks trustworthy',
                  'It works across mobile and desktop',
                  'It is easy to repeat and test',
                ]} />
              </SubBlock>
              <SubBlock title="What weak creative does">
                <BulletList items={[
                  'Tries to compensate for a bad offer',
                  'Looks confusing or careless',
                  'Overloads the viewer with unnecessary complexity',
                ]} />
              </SubBlock>
            </div>
            <Divider />
            <SubBlock title="Recommended creative types">
              <BulletList items={[
                'Static images',
                'Short videos',
                'Simple direct-response creatives',
                'Multiple variations for testing',
              ]} />
            </SubBlock>
            <HighlightBlock>
              Start with simple creatives. Simplicity usually outperforms unnecessary complexity.
            </HighlightBlock>
          </SectionCard>

          {/* ── 05 Lead Generation ────────────────────────────────────── */}
          <SectionCard step="Step 05" title="Lead Generation" subtitle="Turn attention into contact information.">
            <Body>
              Lead generation is the process of capturing prospect information and moving it into a system where it can be tracked and managed.
            </Body>
            <div className="grid gap-3 sm:grid-cols-2">
              <AlphaBlock label="A) Meta Lead Forms">
                <p className="text-[11px] text-muted-foreground/50 mb-1">Best for:</p>
                <BulletList items={['Beginners', 'Speed', 'Lower setup friction', 'Quick wins']} />
              </AlphaBlock>
              <AlphaBlock label="B) Landing Page Funnels">
                <p className="text-[11px] text-muted-foreground/50 mb-1">Best for:</p>
                <BulletList items={[
                  'Higher-ticket services',
                  'Offers that need more explanation',
                  'Industries where trust matters more',
                  'Higher perceived value',
                ]} />
              </AlphaBlock>
            </div>
            <Body>
              Landing pages give more control over messaging, trust, and qualification, while lead forms are faster and easier to launch.
            </Body>
            <Divider />
            <SubBlock title="Recommended funnel structure">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-border/40 bg-background/30 px-4 py-3 space-y-1.5">
                  <p className="text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wide">Page 1 — Opt-in Page</p>
                  <BulletList items={['Headline', 'Subheadline', 'CTA', 'Proof', 'Short form']} />
                </div>
                <div className="rounded-md border border-border/40 bg-background/30 px-4 py-3 space-y-1.5">
                  <p className="text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wide">Page 2 — Thank You Page</p>
                  <BulletList items={['Confirmation', 'Expectation setting', 'Next step']} />
                </div>
              </div>
            </SubBlock>
          </SectionCard>

          {/* ── 06 CRM ────────────────────────────────────────────────── */}
          <SectionCard step="Step 06" title="CRM" subtitle="Store, manage, and track every lead systematically.">
            <Body>
              A CRM is the system that stores lead information, tracks where each lead is in the pipeline, and supports communication and follow-up.
            </Body>
            <Body>
              The purpose of the CRM is to make sure no lead is lost, ignored, or forgotten.
            </Body>
            <Divider />
            <SubBlock title="A CRM should">
              <BulletList items={[
                'Store contact details',
                'Track sales stage',
                'Organise follow-up',
                'Support automation',
                'Keep the acquisition process visible',
              ]} />
            </SubBlock>
            <HighlightBlock>
              Lead generation is not complete when someone opts in. It is complete when that lead is tracked and managed properly.
            </HighlightBlock>
          </SectionCard>

          {/* ── 07 AI Appointment Setting ─────────────────────────────── */}
          <SectionCard step="Step 07" title="AI Appointment Setting" subtitle="Convert new leads into booked calls automatically.">
            <Body>
              AI appointment setting automatically contacts new leads through SMS or WhatsApp, qualifies them, handles common objections, checks availability, and books appointments into the client&apos;s calendar.
            </Body>
            <Body>
              Speed matters. The faster a lead is contacted, the higher the chance of conversion.
            </Body>
            <Divider />
            <SubBlock title="Benefits">
              <BulletList items={[
                'Responds in under a minute',
                'Works 24/7',
                'Handles follow-up consistently',
                'Qualifies leads automatically',
                'Books appointments without manual effort',
              ]} />
            </SubBlock>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border/40 bg-background/30 px-4 py-3 space-y-1">
                <p className="text-[11px] text-muted-foreground/50 font-medium uppercase tracking-wide">Manual follow-up</p>
                <Body>Slower, inconsistent, and expensive.</Body>
              </div>
              <div className="rounded-md border border-orange-500/20 bg-orange-500/5 px-4 py-3 space-y-1">
                <p className="text-[11px] text-orange-400/70 font-medium uppercase tracking-wide">AI appointment setting</p>
                <Body>Faster, cheaper, and more reliable.</Body>
              </div>
            </div>
          </SectionCard>

          {/* ── 08 Further AI Systems ─────────────────────────────────── */}
          <SectionCard step="Step 08" title="Further AI Systems" subtitle="Build deeper infrastructure once the core acquisition system works.">
            <Body>
              Once traffic, lead generation, and appointment setting are working, the next layer is building custom systems that solve recurring client problems.
            </Body>
            <Body>
              These systems go beyond basic lead generation. They improve operations, increase efficiency, reduce cost, and make the agency harder to replace.
            </Body>
            <Divider />
            <SubBlock title="How to identify systems worth building">
              <BulletList items={[
                'Work with clients long enough to understand the business deeply',
                'Notice repeated problems across multiple clients in the same niche',
                'Identify inefficient processes',
                'Identify repeated mistakes',
                'Identify missing data',
                'Build systems that solve those specific problems',
              ]} />
            </SubBlock>
            <HighlightBlock label="Value note">
              This is where agencies become embedded in the client&apos;s business and start building intellectual property instead of only selling labor.
            </HighlightBlock>
          </SectionCard>

          {/* ── Practical Execution Summary ───────────────────────────── */}
          <SectionCard title="Practical Execution Summary">
            <NumberedList items={[
              'Choose the traffic source',
              'Select one clear offer',
              'Write direct-response copy',
              'Create simple, trustworthy creatives',
              'Capture leads via form or landing page',
              'Store and manage every lead in a CRM',
              'Use AI to qualify and book appointments',
              'Build further systems once patterns are clear',
            ]} />
            <HighlightBlock>
              Client acquisition is not a collection of random tactics. It is a sequence. The more clearly each step feeds the next, the more reliable the outcome becomes.
            </HighlightBlock>
          </SectionCard>

        </div>
      </ScrollArea>
    </div>
  )
}
