'use client'

import { useState } from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { TopBar } from '@/components/top-bar'
import { TerminalPanel } from '@/components/terminal/terminal-panel'
import { ProjectsPanel } from '@/components/panels/projects-panel'
import { HistoryPanel } from '@/components/panels/history-panel'
import { TemplatesPanel } from '@/components/panels/templates-panel'
import { HomePanel } from '@/components/panels/home-panel'
import { SopsPanel } from '@/components/panels/sops-panel'
import { AgenticFlowsPanel } from '@/components/panels/agentic-flows-panel'

export default function Home() {
  const [activePanel, setActivePanel] = useState('terminal')

  const handlePanelChange = (panel: string) => {
    setActivePanel(panel)
  }

  const renderPanel = () => {
    switch (activePanel) {
      case 'home':
        return <HomePanel />
      case 'terminal':
        return <TerminalPanel />
      case 'projects':
        return <ProjectsPanel />
      case 'history':
        return <HistoryPanel onRerun={() => setActivePanel('terminal')} />
      case 'templates':
        return <TemplatesPanel onSelectTemplate={() => setActivePanel('terminal')} />
      case 'sops':
        return <SopsPanel />
      case 'agentic-flows':
        return <AgenticFlowsPanel />
      default:
        return <TerminalPanel />
    }
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar activePanel={activePanel} onPanelChange={handlePanelChange} />
      <SidebarInset className="flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-hidden">
          {renderPanel()}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
