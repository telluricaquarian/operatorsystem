'use client'

import { FolderKanban, Plus, MoreVertical } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockProjects } from '@/lib/mock-data'

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)
  
  if (diffHours < 1) return 'Just now'
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays === 1) return 'Yesterday'
  return `${diffDays}d ago`
}

function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'proposal': 'Proposal',
    'landing-page': 'Landing Page',
    'offer-stack': 'Offer Stack',
    'client-brief': 'Client Brief',
    'follow-up-email': 'Email',
  }
  return labels[type] || 'Project'
}

export function ProjectsPanel() {
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => (
            <Card
              key={project.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <FolderKanban className="size-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <CardDescription className="text-xs">
                        {formatTimeAgo(project.lastUpdated)}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreVertical className="size-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Badge variant="outline" className="text-xs">
                  {getTypeLabel(project.type)}
                </Badge>
              </CardContent>
            </Card>
          ))}
          
          {/* Add New Project Card */}
          <Card className="border-dashed border-border/50 bg-transparent cursor-pointer transition-all hover:border-primary/50 hover:bg-card/30">
            <CardContent className="flex h-full min-h-[140px] flex-col items-center justify-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50">
                <Plus className="size-5 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Create new project</span>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}
