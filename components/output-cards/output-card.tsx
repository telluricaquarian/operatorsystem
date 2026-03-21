'use client'

import type { OutputItem } from '@/lib/types'
import { ProposalCard } from './proposal-card'
import { LandingPageCard } from './landing-page-card'
import { OfferStackCard } from './offer-stack-card'
import { ClientBriefCard } from './client-brief-card'
import { EmailCard } from './email-card'
import { GenericCard } from './generic-card'

interface OutputCardProps {
  output: OutputItem
}

export function OutputCard({ output }: OutputCardProps) {
  switch (output.type) {
    case 'proposal':
      return <ProposalCard output={output} />
    case 'landing-page':
      return <LandingPageCard output={output} />
    case 'offer-stack':
      return <OfferStackCard output={output} />
    case 'client-brief':
      return <ClientBriefCard output={output} />
    case 'follow-up-email':
      return <EmailCard output={output} />
    default:
      return <GenericCard output={output} />
  }
}
