'use client'

import { useState } from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { TopBar } from '@/components/top-bar'
import { TerminalPanel } from '@/components/terminal/terminal-panel'
import { ProjectsPanel } from '@/components/panels/projects-panel'
import { TemplatesPanel } from '@/components/panels/templates-panel'
import { HomePanel } from '@/components/panels/home-panel'
import { SopsPanel } from '@/components/panels/sops-panel'
import { AgenticFlowsPanel } from '@/components/panels/agentic-flows-panel'
import { ServiceDeliveryPanel } from '@/components/panels/service-delivery-panel'
import { EduMaterialPanel } from '@/components/panels/edu-material-panel'
import { McpsPanel } from '@/components/panels/mcps-panel'
import { ClaudeCodePanel } from '@/components/panels/claude-code-panel'

export default function Home() {
  const [activePanel, setActivePanel] = useState('home')

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
      case 'templates':
        return <TemplatesPanel onSelectTemplate={() => setActivePanel('terminal')} />
      case 'sops':
        return <SopsPanel />
      case 'agentic-flows':
        return <AgenticFlowsPanel />
      case 'service-delivery':
        return <ServiceDeliveryPanel />
      case 'mcps':
        return <McpsPanel />
      case 'claude-code':
        return <ClaudeCodePanel />
      case 'edu-material':
        return <EduMaterialPanel />
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
