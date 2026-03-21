'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

const phases = [
  {
    id: '01',
    title: 'Digital Literacy',
    objective: 'Remove friction with tools and environment.',
    understand: [
      'Domains, hosting, and DNS',
      'Git vs GitHub',
      'IDE basics and terminal basics',
      'File and folder structure',
    ],
    implement: [
      'Clone a repo and run a project locally',
      'Push changes to GitHub',
      'Deploy to Vercel',
    ],
  },
  {
    id: '02',
    title: 'Frontend Systems',
    objective: 'Build visually precise, responsive interfaces.',
    understand: [
      'HTML and CSS fundamentals',
      'Layout, Flexbox, and Grid',
      'Tailwind CSS',
      'Responsive design principles',
    ],
    implement: [
      'Recreate a design accurately from reference',
      'Build responsive sections',
      'Manage spacing, typography, and visual hierarchy',
    ],
  },
  {
    id: '03',
    title: 'React + Next.js',
    objective: 'Move from static pages to reusable systems.',
    understand: [
      'Components, props, and state',
      'Routing and layouts',
      'App structure and file conventions',
      'Client vs server concepts at a practical level',
    ],
    implement: [
      'Build multi-page applications',
      'Create reusable UI components',
      'Structure a production-ready app',
    ],
  },
  {
    id: '04',
    title: 'Design Execution',
    objective: 'Develop atelier-quality taste and implementation.',
    understand: [
      'Typography hierarchy and spacing rhythm',
      'Visual consistency and color systems',
      'Premium UI composition',
    ],
    implement: [
      'Translate designs into production with precision',
      'Identify and improve weak design decisions',
      'Create polished, premium-feeling interfaces',
    ],
  },
  {
    id: '05',
    title: 'Component Systems',
    objective: 'Increase build speed and consistency.',
    understand: [
      'Reusable components and UI systems',
      'Consistency across pages',
      'Modular build thinking',
    ],
    implement: [
      'Build reusable cards, sections, navbars, and layouts',
      'Create scalable component systems',
    ],
  },
  {
    id: '06',
    title: 'AI Leverage',
    objective: 'Use AI as force multiplication.',
    understand: [
      'Prompting as an operational skill',
      'AI-assisted coding and debugging',
      'Scaffolding with AI tools',
    ],
    implement: [
      'Use Claude, Gemini, or similar tools effectively',
      'Generate, refine, debug, and accelerate implementation',
    ],
  },
  {
    id: '07',
    title: 'Agentic Workflows',
    objective: 'Move from single tools to connected systems.',
    understand: [
      'Workflow design and multi-step automations',
      'Input to output pipelines',
      'Structured generation flows',
    ],
    implement: [
      'Create repeatable, automated workflows',
      'Automate parts of the build and delivery process',
      'Think in systems rather than isolated tasks',
    ],
  },
  {
    id: '08',
    title: 'Deployment + Infrastructure',
    objective: 'Ship reliably.',
    understand: [
      'Vercel deployment and environment variables',
      'Production debugging',
      'Domain connection basics',
    ],
    implement: [
      'Deploy apps end-to-end',
      'Fix deployment issues',
      'Manage a production environment setup',
    ],
  },
  {
    id: '09',
    title: 'Service Delivery',
    objective: 'Turn skill into a client-facing offer.',
    understand: [
      'Client outcomes and conversion-oriented builds',
      'Productized services',
      'Delivery speed and professional standards',
    ],
    implement: [
      'Take a brief from intake to completion',
      'Build useful, high-quality business assets',
      'Deliver work professionally and on time',
    ],
  },
  {
    id: '10',
    title: 'Operator Thinking',
    objective: 'Become multi-disciplinary and hard to replace.',
    understand: [
      'Design, engineering, and systems thinking together',
      'Distribution, leverage, and entrepreneurial execution',
    ],
    implement: [
      'Think beyond implementation to commercial value',
      'Connect build skill with market outcomes',
      'Operate as a high-agency digital builder',
    ],
  },
]

export function EduMaterialPanel() {
  return (
    <ScrollArea className="h-full">
      <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-14">

        {/* Header */}
        <div className="mb-3">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/50">
            Areculateir Curriculum
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Edu. Material</h1>
        </div>

        {/* Intro */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A linear curriculum for a complete beginner who wants to become capable of delivering
          the full Areculateir service stack. Ten phases. Each phase builds on the last.
          No shortcuts — only compounding leverage.
        </p>

        {/* Quote */}
        <div className="mt-10 border-l-2 border-primary/40 pl-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </p>
          <p className="mt-2 text-xs text-muted-foreground/50">
            — Leonardo di ser Piero da Vinci
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-10 h-px bg-border/40" />

        {/* Syllabus */}
        <div className="space-y-8">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="rounded-xl border border-border/50 bg-card/30 p-6 transition-colors hover:border-border/80"
            >
              {/* Phase header */}
              <div className="mb-4 flex items-baseline gap-4">
                <span
                  className="shrink-0 font-mono text-xs font-medium tracking-widest"
                  style={{ color: '#F5F501' }}
                >
                  [{phase.id}]
                </span>
                <h2 className="text-base font-semibold tracking-tight text-foreground">
                  {phase.title}
                </h2>
              </div>

              {/* Objective */}
              <p className="mb-5 text-sm text-muted-foreground">
                <span className="mr-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
                  Objective —
                </span>
                {phase.objective}
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Must understand */}
                <div>
                  <p className="mb-2.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
                    Must Understand
                  </p>
                  <ul className="space-y-1.5">
                    {phase.understand.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Must implement */}
                <div>
                  <p className="mb-2.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
                    Must Implement
                  </p>
                  <ul className="space-y-1.5">
                    {phase.implement.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 mb-10 h-px bg-border/40" />

        {/* Outcome block */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-7">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-primary/70">
            End State
          </p>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">
            The Areculateir Operator
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            By the end of this curriculum, the learner should be able to design, build,
            deploy, and deliver premium digital systems with taste, speed, and leverage.
            Not a specialist. Not a generalist. A multi-disciplinary operator — capable
            of taking a brief and shipping a result that is commercially credible and
            technically sound.
          </p>
        </div>

        <div className="mt-10" />
      </div>
    </ScrollArea>
  )
}
