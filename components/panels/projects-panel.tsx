'use client'

import { FolderKanban, Plus, MoreVertical } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockProjects } from '@/lib/mock-data'

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
              className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 cursor-pointer"
            >
              {project.name === 'AvantSavant' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/avantbackground.png"
                      alt="AvantSavant background"
                      className="w-full h-full object-cover blur-[1.5px] scale-105 brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/20" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                </>
              )}
              {project.name === 'Negentropic Workflows' && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/negentropicbackground.png"
                      alt="Negentropic background"
                      className="w-full h-full object-cover blur-[1.5px] scale-105 brightness-75 contrast-110 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 z-10 bg-black/20" />
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
                    <Button variant="ghost" size="icon" className="size-8 shrink-0">
                      <MoreVertical className="size-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </div>
                </CardHeader>
                {project.tags.length > 0 && (
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={
                            project.name === 'AvantSavant'
                              ? 'text-xs rounded-full border-orange-500/40 text-orange-400 bg-orange-500/5'
                              : 'text-xs rounded-full border-border/60 text-muted-foreground'
                          }
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
