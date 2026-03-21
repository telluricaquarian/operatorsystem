export type OutputType =
  | 'proposal'
  | 'landing-page'
  | 'offer-stack'
  | 'client-brief'
  | 'follow-up-email'
  | 'generic'

export interface OutputItem {
  id: string
  type: OutputType
  command: string
  timestamp: Date
  data: ProposalData | LandingPageData | OfferStackData | ClientBriefData | EmailData | GenericData
}

export interface ProposalData {
  title: string
  client: string
  scope: string[]
  deliverables: string[]
  timeline: string
  pricing: {
    total: string
    breakdown: { item: string; price: string }[]
  }
}

export interface LandingPageData {
  title: string
  sections: {
    name: string
    description: string
    elements: string[]
  }[]
}

export interface OfferStackData {
  title: string
  tagline: string
  mainOffer: {
    name: string
    value: string
    price: string
  }
  bonuses: {
    name: string
    value: string
    tag?: string
  }[]
  totalValue: string
  price: string
  guarantee: string
}

export interface ClientBriefData {
  projectName: string
  client: string
  objective: string
  targetAudience: string
  keyMessages: string[]
  deliverables: string[]
  timeline: string
  budget: string
}

export interface EmailData {
  subject: string
  greeting: string
  body: string[]
  callToAction: string
  signature: string
}

export interface GenericData {
  title: string
  content: string
}

export interface Project {
  id: string
  name: string
  type: OutputType
  lastUpdated: Date
  outputs: OutputItem[]
}

export interface HistoryItem {
  id: string
  command: string
  type: OutputType
  timestamp: Date
}

export interface Template {
  id: string
  name: string
  type: OutputType
  description: string
}
