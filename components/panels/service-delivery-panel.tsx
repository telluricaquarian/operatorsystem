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

// Methodology grid — 3-col layout matching Figma
// Logo-heavy cells sit in col-1 of each row; text-heavy cells fill cols 2–3
const methodGrid = [
  // Row 1
  {
    id: 'mg-1',
    title: 'Web Scraping & Client Acquisition',
    logos: ['Apify_logo-white-safe_1 1.png', 'logo-light 1.png'],
    body: null,
    bullets: null,
  },
  {
    id: 'mg-2',
    title: 'Web Scraping: Data Collection',
    logos: [],
    body: 'The simplest definition (accurate)\nWeb scraping = automated data extraction from web pages.\nInstead of manually copying:',
    bullets: ['names', 'emails', 'prices', 'listings', '...a script or tool does it for you at scale.'],
  },
  {
    id: 'mg-3',
    title: 'Client Acquisition | Existing Datasets',
    logos: [],
    body: 'Client acquisition = using the collected data to contact prospects and move them from lead → paying customer.\n\nA service or brand like Apollo.io has existing customer data — all you need to do is be specific about what and whom you are targeting, then configure and interact with their site.',
    bullets: null,
  },
  // Row 2
  {
    id: 'mg-4',
    title: 'Sourcing Templates & Components for Projects',
    logos: ['v0-logo-dark 1.png', '21stdev 1.png', 'reactflowxyflow 1.png', 'logo.adddd611 1.png'],
    body: null,
    bullets: null,
  },
  {
    id: 'mg-5',
    title: 'UI Libraries & Components',
    logos: [],
    body: 'UI Libraries and Templates using higher-ended coding language enable us both inspiration and speed-to-market when building out a prototype or project.',
    bullets: null,
  },
  {
    id: 'mg-6',
    title: 'Prototyping + Lead Magnet',
    logos: [],
    body: 'With templates and AI, drafting up a significantly high quality site or project to act as a lead magnet or "bait" is easy to do — and thus acts as the lead magnet marketing/advertising asset to share with the prospect to get them captivated and intrigued.',
    bullets: null,
  },
  // Row 3
  {
    id: 'mg-7',
    title: 'Iteration & Refinement of Design',
    logos: ['claude-color 1.png', 'cursor-2 1.png', 'gemini-color 1.png', 'v0-logo-dark 2.png'],
    body: null,
    bullets: null,
  },
  {
    id: 'mg-8',
    title: 'Agentic Coding Tools',
    logos: [],
    body: 'Claude, Codex, and Gemini are coding-capable AI models that can be integrated into IDEs, CLIs, or custom systems. They become truly agentic when given access to tools like the filesystem, terminal, and multi-step workflows — not merely by being embedded in an editor.',
    bullets: null,
  },
  {
    id: 'mg-9',
    title: 'UI Generation Systems',
    logos: [],
    body: 'v0 Dev is also a UI generation system that can build things based off the prompt fed into it — as is Google Gemini.\n\nA workflow utilised to achieve this is often utilising an LLM to generate the prompt, then subsequently taking that prompt and feeding it into a UI generation system to build out what the prompt indicates.',
    bullets: null,
  },
  // Row 4
  {
    id: 'mg-10',
    title: 'Webhooks, Automation, Workflows & Functionality',
    logos: ['zed-logo-wordmark-brand-blue-1348dc-&-white 2.png', 'icons8-visual-studio-code-480 1.png'],
    body: null,
    bullets: null,
  },
  {
    id: 'mg-11',
    title: 'Determinism via self annealment',
    logos: [],
    body: "Inside of IDEs we are afforded the ability to self-correct and self-anneal by way of a system prompt in the form of markdown files that tell the specific LLM we are getting to inspect and function based off of that specifically — direct through natural language; for instance \"do not create sites with dark mode\" can be one of the postulates or directives we input into the system prompt md file that the LLM reads whenever we give it a prompt.\n\nSo essentially any time you prompt the LLM inside of an IDE it is also reading the larger system prompt file in tandem with the say \"smaller\" prompt you provide it.\n\nThe larger system prompt md file is also contributed towards by the LLM over time — adding things to omit and or to consider/add when committing and or fulfilling its function/functions.",
    bullets: null,
  },
  {
    id: 'mg-12',
    title: 'Saved Time & Top of Mind',
    logos: [],
    body: 'With the correct infrastructure in place we are afforded both more deterministic & faster outcomes, and in regards to customer correspondence and the customer journey they are granted a more pleasant experience.',
    bullets: null,
  },
]

export function ServiceDeliveryPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold tracking-tight">Service Delivery - Workflow</h1>
        <p className="text-sm text-muted-foreground">A - Z Meticulous Detail</p>
      </div>

      <ScrollArea className="flex-1">

        {/* ── Quote blocks ─────────────────────────────────────────────── */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {/* Left quote — solid yellow block */}
          <div>
            <div
              className="text-sm font-medium leading-snug text-black px-3 py-2.5"
              style={{ background: '#F5F501' }}
            >
              &ldquo;Research is seeing what everybody else has seen and thinking what nobody else has thought.&rdquo;
            </div>
            <p className="text-xs text-muted-foreground/60 mt-2 pl-0.5">— Albert Szent-Györgyi</p>
          </div>

          {/* Right quote — solid yellow block */}
          <div>
            <div
              className="text-sm font-medium leading-snug text-black px-3 py-2.5"
              style={{ background: '#F5F501' }}
            >
              &ldquo;advertising people who ignore research are as dangerous as generals who ignore decodes of enemy signals&rdquo;.
            </div>
            <p className="text-xs text-muted-foreground/60 mt-2 pl-0.5">— David Ogilvy</p>
          </div>
        </div>

        {/* ── Occam's Razor intro ──────────────────────────────────────── */}
        <div className="mb-10 space-y-3">
          <p className="text-xs text-muted-foreground/50">
            (What Areculateir does for their customers in as simple explanatory manner as possible)
          </p>
          <p className="text-sm font-semibold text-foreground">Occams Razor:</p>

          <p className="text-sm text-foreground/80 leading-relaxed">
            We build sites that look significantly more premium for customers, businesses and brands using UI library components that have higher ended appearance and increase the perceived value of the brand and or ensure said brand is perceived in the light it should be viewed in. This increase and or enhanced design should as result do a few things:
          </p>

          <ul className="space-y-1 pl-1">
            <li className="text-sm font-semibold italic text-foreground/90">
              • Reduce and or completely remove any and all attempts and consideration to haggle from the user due to perceived austerity, professionalism and competence.
            </li>
            <li className="text-sm font-semibold italic text-foreground/90">
              • Increase Unconscious Trust, Compliance and intent to engage with CTAs.
            </li>
            <li className="text-sm font-semibold italic text-foreground/90">
              • Reduce Friction &amp; Latency and as a result Increase rate and speed to conversion from lead to paying customer.
            </li>
          </ul>

          <p className="text-sm text-foreground/80 leading-relaxed">
            We build and strategically produce automations that improve efficiency of operations, creating deterministic reliability of results &amp; reduced cognitive load thus liberating mental bandwidth to be allocated towards higher leverage activities or more important matters.
          </p>
        </div>

        {/* ── Methodology grid — 3 columns, open canvas, no card borders ─ */}
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {methodGrid.map((cell) => (
            <div key={cell.id} className="space-y-3">
              {/* Heading */}
              <h3 className="text-sm font-semibold text-foreground leading-snug">
                {cell.title}
              </h3>

              {/* Logo row — dominant visual element when present */}
              {cell.logos.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 py-1">
                  {cell.logos.map((img) => (
                    <img
                      key={img}
                      src={`/${img}`}
                      alt=""
                      className="h-9 object-contain opacity-90"
                    />
                  ))}
                </div>
              )}

              {/* Body copy */}
              {cell.body && (
                <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                  {cell.body}
                </p>
              )}

              {/* Bullet list */}
              {cell.bullets && (
                <ul className="space-y-0.5 pl-0.5">
                  {cell.bullets.map((b) => (
                    <li key={b} className="text-xs text-muted-foreground leading-relaxed flex gap-1.5">
                      <span className="mt-0.5 text-muted-foreground/40">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ── Workflow cards ────────────────────────────────────────────── */}
        <div className="border-t border-border/30 pt-8 mb-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-5">
            Workflow Sequence
          </p>
        </div>

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
