'use client'

import { Briefcase, ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

const workflows = [
  {
    id: 'wf-1',
    title: 'Strategy → ICP Definition → Client Acquisition',
    description:
      "Defines Areculateir's ideal client profile (ICP), identifies high-leverage acquisition channels, and establishes a repeatable outreach system for securing aligned, high-quality clients.",
    steps: ['Market Research', 'ICP Segmentation', 'Channel Selection', 'Outreach System'],
    tags: ['Strategy', 'Acquisition'],
  },
  {
    id: 'wf-2',
    title: 'Lead Capture → Qualification → Fit Assessment',
    description:
      'Filters inbound and outbound leads for alignment, budget, urgency, and execution fit before any proposal work begins.',
    steps: ['Lead Intake', 'Qualification', 'Need Assessment', 'Fit Decision'],
    tags: ['Sales', 'Qualification'],
  },
  {
    id: 'wf-3',
    title: 'Discovery → Problem Framing → Opportunity Mapping',
    description:
      "Clarifies the client's actual bottlenecks, evaluates existing assets, and maps the highest-leverage opportunities for intervention.",
    steps: ['Discovery Call', 'Problem Framing', 'Asset Audit', 'Opportunity Mapping'],
    tags: ['Discovery', 'Strategy'],
  },
  {
    id: 'wf-4',
    title: 'Offer Architecture → Scope Definition → Pricing Logic',
    description:
      'Converts insights into a clearly structured offer with defined deliverables, boundaries, pricing, and expansion opportunities.',
    steps: ['Offer Design', 'Scope Extraction', 'Deliverables Mapping', 'Pricing Logic'],
    tags: ['Offer', 'Scoping'],
  },
  {
    id: 'wf-5',
    title: 'Client Brief → Proposal Draft → Approval Flow',
    description:
      'Transforms the scoped opportunity into a client-facing proposal with rationale, timeline, pricing, and approval mechanics.',
    steps: ['Client Brief', 'Proposal Draft', 'Revision Pass', 'Approval Flow'],
    tags: ['Proposal', 'Conversion'],
  },
  {
    id: 'wf-6',
    title: 'Onboarding → Asset Collection → Project Initialization',
    description:
      'Moves the engagement from approval into execution by securing assets, access, project details, and operational readiness.',
    steps: ['Client Confirmation', 'Asset Collection', 'Access Setup', 'Project Initialization'],
    tags: ['Onboarding', 'Operations'],
  },
  {
    id: 'wf-7',
    title: 'Research → References → Strategic Direction',
    description:
      'Establishes aesthetic, structural, and strategic direction through references, competitor review, and creative alignment.',
    steps: ['Reference Gathering', 'Competitor Review', 'Direction Setting', 'Creative Alignment'],
    tags: ['Research', 'Direction'],
  },
  {
    id: 'wf-8',
    title: 'Information Architecture → Messaging → Page Structure',
    description:
      'Defines what the system says, how it flows, and how the user moves through the experience.',
    steps: ['Information Architecture', 'Messaging Stack', 'Section Planning', 'CTA Structure'],
    tags: ['Messaging', 'Architecture'],
  },
  {
    id: 'wf-9',
    title: 'Design Execution → Interface Build → Atelier Quality',
    description:
      'Translates direction into premium, production-ready interface design with strong hierarchy, rhythm, and polish.',
    steps: ['Wireframe Translation', 'UI Composition', 'Responsive Refinement', 'Visual Polish'],
    tags: ['Design', 'Execution'],
  },
  {
    id: 'wf-10',
    title: 'Frontend Build → Component System → Responsive QA',
    description:
      'Builds the interface in a modular, reusable, responsive, and deployment-ready way.',
    steps: ['Component Build', 'Layout Assembly', 'Responsive QA', 'Code Cleanup'],
    tags: ['Frontend', 'Build'],
  },
  {
    id: 'wf-11',
    title: 'Automation Layer → Integrations → Workflow Enablement',
    description:
      'Connects the build to practical business operations such as lead routing, document generation, email actions, and automation logic.',
    steps: ['Input Capture', 'Integration Setup', 'Automation Logic', 'Workflow Testing'],
    tags: ['Automation', 'Systems'],
  },
  {
    id: 'wf-12',
    title: 'Review → Refinement → Stakeholder Feedback',
    description:
      'Improves the system through internal QA, stakeholder review, iteration, and final refinement before launch.',
    steps: ['Internal Review', 'Client Feedback', 'Revision Pass', 'Final Refinement'],
    tags: ['Review', 'Refinement'],
  },
  {
    id: 'wf-13',
    title: 'Deployment → Launch → Live Validation',
    description:
      'Ships the system to production, validates live behavior, and confirms readiness across domain, forms, and user experience.',
    steps: ['Deploy Preview', 'Domain Connect', 'Production QA', 'Launch Validation'],
    tags: ['Launch', 'Deployment'],
  },
  {
    id: 'wf-14',
    title: 'Documentation → Handover → Client Enablement',
    description:
      'Packages the completed work into a usable handover system with guidance, access, and enablement materials.',
    steps: ['Documentation', 'Handover Pack', 'Walkthrough', 'Client Enablement'],
    tags: ['Handover', 'Enablement'],
  },
  {
    id: 'wf-15',
    title: 'Follow-Up → Retention → Expansion Path',
    description:
      'Turns delivery into continuity through post-launch support, testimonials, upsells, and retainer-path expansion.',
    steps: ['Post-Launch Check-In', 'Feedback Capture', 'Testimonial Request', 'Expansion Offer'],
    tags: ['Retention', 'Growth'],
  },
]

export function ServiceDeliveryPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Service Delivery - Workflow</h1>
        <p className="text-muted-foreground">A - Z Meticulous Detail</p>
      </div>

      <ScrollArea className="flex-1">

        {/* ── Explanatory block ──────────────────────────────────────── */}
        <div className="mb-10 space-y-8">

          {/* Quote callouts */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left quote */}
            <div className="space-y-3">
              <div
                className="text-sm font-medium leading-relaxed text-black px-2 py-0.5"
                style={{ background: '#F5F501', display: 'inline' }}
              >
                &ldquo;Research is seeing what everybody else has seen and thinking what nobody else has thought.&rdquo;
              </div>
              <p className="text-xs text-muted-foreground/60 tracking-wide mt-2">— Albert Szent-Györgyi</p>
            </div>

            {/* Right quote */}
            <div className="space-y-3">
              <div
                className="text-sm font-medium leading-relaxed text-black px-2 py-0.5"
                style={{ background: '#F5F501', display: 'inline' }}
              >
                &ldquo;Advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals.&rdquo;
              </div>
              <p className="text-xs text-muted-foreground/60 tracking-wide mt-2">— David Ogilvy</p>
            </div>
          </div>

          {/* Occam's Razor copy block */}
          <div className="space-y-4 border-l-2 border-primary/30 pl-5">
            <p className="text-xs text-muted-foreground/50 uppercase tracking-widest">
              (What Areculateir does for their customers in as simple explanatory manner as possible)
            </p>

            <h3 className="text-base font-semibold tracking-tight">Occams Razor:</h3>

            <p
              className="text-sm font-medium leading-relaxed text-black px-2 py-1"
              style={{ background: '#F5F501' }}
            >
              We build sites that look significantly more premium for customers, businesses and brands using UI library components that have higher ended appearance and increase the perceived value of the brand — and or ensure said brand is perceived in the light it should be viewed in. This increase and or enhanced design should as result do a few things:
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                Reduce and or completely remove any and all attempts and consideration to haggle from the user due to perceived austerity, professionalism and competence.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                Increase unconscious trust, compliance and intent to engage with CTAs.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                Reduce friction &amp; latency and as a result increase rate and speed to conversion from lead to paying customer.
              </li>
            </ul>

            <p
              className="text-sm font-medium leading-relaxed text-black px-2 py-1"
              style={{ background: '#F5F501' }}
            >
              We build and strategically produce automations that improve efficiency of operations, creating deterministic reliability of results &amp; reduced cognitive load thus liberating mental bandwidth to be allocated towards higher leverage activities or more important matters.
            </p>
          </div>
        </div>
        {/* ── End explanatory block ──────────────────────────────────── */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <Card
              key={workflow.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Briefcase className="size-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">{workflow.title}</CardTitle>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {workflow.steps.length} steps
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <CardDescription className="text-sm leading-relaxed">
                  {workflow.description}
                </CardDescription>

                <div className="flex flex-wrap items-center gap-1">
                  {workflow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="rounded bg-secondary/60 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {step}
                      </span>
                      {i < workflow.steps.length - 1 && (
                        <ArrowRight className="size-3 text-muted-foreground/50 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {workflow.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
