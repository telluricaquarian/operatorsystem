'use client'

import {
  Terminal,
  FolderKanban,
  History,
  LayoutTemplate,
  BookOpen,
  Workflow,
  Settings,
  ChevronLeft,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
  {
    title: 'Terminal',
    icon: Terminal,
    id: 'terminal',
  },
  {
    title: 'Projects',
    icon: FolderKanban,
    id: 'projects',
  },
  {
    title: 'History',
    icon: History,
    id: 'history',
  },
  {
    title: 'Templates',
    icon: LayoutTemplate,
    id: 'templates',
  },
  {
    title: 'SOPs',
    icon: BookOpen,
    id: 'sops',
  },
  {
    title: 'Agentic Flows',
    icon: Workflow,
    id: 'agentic-flows',
  },
]

interface AppSidebarProps {
  activePanel: string
  onPanelChange: (panel: string) => void
}

export function AppSidebar({ activePanel, onPanelChange }: AppSidebarProps) {
  const { state, toggleSidebar } = useSidebar()

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
            <Terminal className="size-4 text-primary" />
          </div>
          <span
            className={cn(
              'font-semibold text-sm tracking-tight transition-opacity',
              state === 'collapsed' && 'opacity-0',
            )}
          >
            Operator
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground/70 uppercase text-[10px] tracking-widest">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activePanel === item.id}
                    onClick={() => onPanelChange(item.id)}
                    tooltip={item.title}
                    className={cn(
                      'transition-all',
                      activePanel === item.id &&
                        'bg-sidebar-accent text-sidebar-accent-foreground',
                    )}
                  >
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Settings">
              <Settings className="size-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            'size-7 transition-transform',
            state === 'collapsed' && 'rotate-180',
          )}
        >
          <ChevronLeft className="size-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
