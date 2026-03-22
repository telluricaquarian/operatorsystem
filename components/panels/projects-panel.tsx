'use client'

import { useState } from 'react'
import { FolderKanban, Plus, MoreVertical, X } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogClose,
} from '@/components/ui/dialog'
import { mockProjects } from '@/lib/mock-data'

// ─── Rich modal data ────────────────────────────────────────────────────────

interface ProjectDetail {
  id: string
  name: string
  subtitle: string
  image: string
  description: string
  status: string
  stack: string[]
  frameworks: string[]
  uiLibraries: string[]
  tooling: string[]
  siteUrl?: string
}

const projectDetails: Record<string, ProjectDetail> = {
  '7': {
    id: '7',
    name: 'Areculateir',
    subtitle: 'Agentic Infrastructure',
    image: '/aclr77.png',
    description:
      'Agentic systems, workflow infrastructure, and high-leverage automation architecture for modern digital operations.',
    status: 'Active',
    stack: ['TypeScript'],
    frameworks: ['Next.js', 'React'],
    uiLibraries: ['shadcn/ui', 'Tailwind CSS'],
    tooling: ['Claude', 'V0', 'Vercel'],
    siteUrl: 'https://www.areculateir.com',
  },
  '8': {
    id: '8',
    name: 'SD with Kenneth',
    subtitle: 'Personal Brand',
    image: '/sdwithkennethbackground.png',
    description:
      'A personal brand and education platform designed to package mindset, learning, and self-development into a high-trust digital experience.',
    status: 'Active',
    stack: ['TypeScript'],
    frameworks: ['Next.js', 'React'],
    uiLibraries: ['shadcn/ui', 'Tailwind CSS'],
    tooling: ['Claude', 'V0', 'Vercel'],
    siteUrl: 'https://sdwithkenneth.vercel.app',
  },
  '4': {
    id: '4',
    name: 'IdeationStation',
    subtitle: 'Research Terminal',
    image: '/ideationstationbackground.png',
    description:
      'A research environment for ideation, market analysis, and strategic input gathering. Built to accelerate early-stage thinking and structure raw insights into actionable intelligence. IdeationStation acts as the upstream layer of the Areculateir system — where problems are defined before solutions are built.',
    status: 'Active',
    stack: ['TypeScript'],
    frameworks: ['Next.js', 'React'],
    uiLibraries: ['shadcn/ui', 'Tailwind CSS'],
    tooling: ['Claude', 'V0', 'Vercel'],
  },
  '5': {
    id: '5',
    name: 'AvantSavant',
    subtitle: 'Education Platform',
    image: '/avantbackground.png',
    description:
      'A premium education and curriculum platform designed to communicate complex ideas with clarity and elevated visual design. Focuses on perceived value, learning architecture, and brand authority. AvantSavant translates expertise into structured, high-converting educational experiences.',
    status: 'Active',
    stack: ['TypeScript'],
    frameworks: ['Next.js', 'React'],
    uiLibraries: ['shadcn/ui', 'Tailwind CSS'],
    tooling: ['Claude', 'Gemini', 'V0', 'Vercel'],
  },
  '6': {
    id: '6',
    name: 'Negentropic Workflows',
    subtitle: 'Agentic System',
    image: '/negentropicbackground.png',
    description:
      'An agentic workflow automation system designed to reduce operational entropy. Converts high-friction manual processes into deterministic, reliable execution pipelines. Negentropic Workflows is the infrastructure layer — turning repeatable tasks into systems that run without cognitive overhead.',
    status: 'Active',
    stack: ['TypeScript'],
    frameworks: ['Next.js', 'React'],
    uiLibraries: ['shadcn/ui', 'Tailwind CSS', 'React Flow'],
    tooling: ['Claude', 'V0', 'Vercel', 'Apify'],
  },
}

// ─── Pill group ──────────────────────────────────────────────────────────────

function PillGroup({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-orange-500/30 bg-orange-500/8 px-2.5 py-0.5 text-xs text-orange-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Panel ───────────────────────────────────────────────────────────────────

export function ProjectsPanel() {
  const [openId, setOpenId] = useState<string | null>(null)

  const activeDetail = openId ? projectDetails[openId] ?? null : null

  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Manage and organize your generated assets
          </p>
        </div>
        <Button className="gap-1.5">
          <Plus className="size-4" />
          New Project
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setOpenId(project.id)}
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer min-h-[240px]"
            >
              {project.name === 'Areculateir' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/aclr77.png"
                      alt="Areculateir background"
                      className="w-full h-full object-cover object-center blur-[1.5px] scale-[1.08] brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/40" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              {project.name === 'SD with Kenneth' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/sdwithkennethbackground.png"
                      alt="SD with Kenneth background"
                      className="w-full h-full object-cover object-center blur-[1.5px] scale-[1.08] brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/40" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              {project.name === 'IdeationStation' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/ideationstationbackground.png"
                      alt="IdeationStation background"
                      className="w-full h-full object-cover object-center blur-[1.5px] scale-[1.08] brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/40" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              {project.name === 'AvantSavant' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/avantbackground.png"
                      alt="AvantSavant background"
                      className="w-full h-full object-cover object-center blur-[1.5px] scale-[1.08] brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/40" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              {project.name === 'Negentropic Workflows' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/negentropicbackground.png"
                      alt="Negentropic background"
                      className="w-full h-full object-cover object-center blur-[1.5px] scale-[1.08] brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/40" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              <div className="relative z-20">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                        <FolderKanban className="size-5 text-primary" />
                      </div>
                      <CardTitle
                        className="text-base"
                        style={project.name === 'AvantSavant' ? { filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' } : undefined}
                      >
                        {project.name}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical className="size-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </div>
                </CardHeader>
                {project.tags.length > 0 && (
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs rounded-full border-orange-500/40 text-orange-400 bg-orange-500/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </div>
            </Card>
          ))}

          {/* Add New Project Card */}
          <Card className="border-dashed border-border/50 bg-transparent cursor-pointer transition-all hover:border-primary/50 hover:bg-card/30">
            <CardContent className="flex h-full min-h-[240px] flex-col items-center justify-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50">
                <Plus className="size-5 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Create new project</span>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      {/* ── Project detail modal ─────────────────────────────────────────── */}
      <Dialog open={openId !== null} onOpenChange={(open) => { if (!open) setOpenId(null) }}>
        <DialogPortal>
          <DialogOverlay className="bg-black/70 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {activeDetail && (
              <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-border/60 bg-[#0a0a0a] shadow-2xl">

                {/* Close button */}
                <DialogClose className="absolute top-4 right-4 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white/70 transition-colors hover:bg-black/80 hover:text-white">
                  <X className="size-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>

                {/* Hero image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-xl sm:h-72">
                  <img
                    src={activeDetail.image}
                    alt={activeDetail.name}
                    className="h-full w-full object-cover object-center scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
                  {/* Title overlaid on image bottom */}
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-xs uppercase tracking-widest text-white/50 mb-1">{activeDetail.subtitle}</p>
                    <h2 className="text-2xl font-semibold text-white leading-tight">{activeDetail.name}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-xs text-muted-foreground">{activeDetail.status}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {activeDetail.description}
                  </p>

                  {/* External site link — rendered when siteUrl is present */}
                  {activeDetail.siteUrl && (
                    <a
                      href={activeDetail.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border/50 bg-background/40 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      Visit Site
                      <span className="text-muted-foreground/40">↗</span>
                    </a>
                  )}

                  {/* Metadata pill groups */}
                  <div className="space-y-4 border-t border-border/30 pt-5">
                    <PillGroup label="Stack" items={activeDetail.stack} />
                    <PillGroup label="Framework" items={activeDetail.frameworks} />
                    <PillGroup label="UI Libraries" items={activeDetail.uiLibraries} />
                    <PillGroup label="Tooling" items={activeDetail.tooling} />
                  </div>

                </div>
              </div>
            )}
          </div>
        </DialogPortal>
      </Dialog>
    </div>
  )
}
