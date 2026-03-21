import type {
  OutputItem,
  OutputType,
  ProposalData,
  LandingPageData,
  OfferStackData,
  ClientBriefData,
  EmailData,
  GenericData,
  Project,
  HistoryItem,
  Template,
} from './types'

function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

function getOutputType(command: string): OutputType {
  const lowerCommand = command.toLowerCase()
  if (lowerCommand.includes('proposal')) return 'proposal'
  if (lowerCommand.includes('landing')) return 'landing-page'
  if (lowerCommand.includes('offer')) return 'offer-stack'
  if (lowerCommand.includes('brief')) return 'client-brief'
  if (lowerCommand.includes('email') || lowerCommand.includes('follow')) return 'follow-up-email'
  return 'generic'
}

const mockProposal: ProposalData = {
  title: 'Website Redesign Proposal',
  client: 'Acme Corporation',
  scope: [
    'Complete UI/UX redesign of existing website',
    'Mobile-responsive implementation',
    'Integration with existing CRM system',
    'SEO optimization and performance tuning',
  ],
  deliverables: [
    'Design mockups (Desktop + Mobile)',
    'Fully coded website (Next.js)',
    'CMS integration',
    'Documentation and training',
  ],
  timeline: '8 weeks',
  pricing: {
    total: '$24,500',
    breakdown: [
      { item: 'Discovery & Strategy', price: '$3,500' },
      { item: 'UI/UX Design', price: '$7,000' },
      { item: 'Development', price: '$11,000' },
      { item: 'Testing & Launch', price: '$3,000' },
    ],
  },
}

const mockLandingPage: LandingPageData = {
  title: 'SaaS Product Landing Page',
  sections: [
    {
      name: 'Hero',
      description: 'Main headline with value proposition and CTA',
      elements: ['Headline', 'Subheadline', 'CTA Button', 'Hero Image/Video'],
    },
    {
      name: 'Features',
      description: 'Key product features with icons and descriptions',
      elements: ['Feature Grid (3x2)', 'Icon illustrations', 'Feature descriptions'],
    },
    {
      name: 'Social Proof',
      description: 'Testimonials and trust indicators',
      elements: ['Customer testimonials', 'Logo bar', 'Case study highlights'],
    },
    {
      name: 'Pricing',
      description: 'Pricing tiers with feature comparison',
      elements: ['Pricing cards', 'Feature checklist', 'CTA buttons'],
    },
    {
      name: 'CTA Section',
      description: 'Final call-to-action with urgency',
      elements: ['Headline', 'Email capture', 'Social proof snippet'],
    },
  ],
}

const mockOfferStack: OfferStackData = {
  title: 'The Complete Growth System',
  tagline: 'Everything you need to scale your business to 7 figures',
  mainOffer: {
    name: 'Growth Accelerator Program',
    value: '$9,997',
    price: '$2,497',
  },
  bonuses: [
    { name: 'Private Community Access', value: '$497/year', tag: 'High Value' },
    { name: 'Weekly Group Coaching Calls', value: '$1,997', tag: 'Core Offer' },
    { name: 'Done-For-You Templates', value: '$997' },
    { name: 'Lifetime Updates', value: '$1,497' },
  ],
  totalValue: '$14,985',
  price: '$2,497',
  guarantee: '30-Day Money-Back Guarantee',
}

const mockClientBrief: ClientBriefData = {
  projectName: 'Brand Refresh Campaign',
  client: 'TechStart Inc.',
  objective: 'Reposition the brand as an enterprise-ready solution while maintaining appeal to startups',
  targetAudience: 'CTOs and Engineering leads at companies with 50-500 employees',
  keyMessages: [
    'Enterprise-grade reliability',
    'Developer-first experience',
    'Scalable infrastructure',
    'Transparent pricing',
  ],
  deliverables: [
    'Updated brand guidelines',
    'New website design',
    'Marketing collateral suite',
    'Social media templates',
  ],
  timeline: '6 weeks',
  budget: '$45,000 - $60,000',
}

const mockEmail: EmailData = {
  subject: 'Following up on our conversation',
  greeting: 'Hi [Client Name],',
  body: [
    "I hope this email finds you well. I wanted to follow up on our conversation from last week about your upcoming website redesign project.",
    "As discussed, I've put together a preliminary proposal that outlines the scope, timeline, and investment for the project. I believe our approach aligns perfectly with your goals of increasing conversions and improving user experience.",
    "I'm excited about the opportunity to work together and help bring your vision to life.",
  ],
  callToAction: "Would you be available for a 30-minute call this week to discuss the next steps? I'm free Tuesday or Thursday afternoon.",
  signature: 'Best regards,\n[Your Name]',
}

const mockGeneric: GenericData = {
  title: 'Generated Response',
  content: 'Your request has been processed. The AI has analyzed your input and generated a comprehensive response based on the parameters provided.',
}

export function generateMockOutput(command: string): OutputItem {
  const type = getOutputType(command)
  
  let data: OutputItem['data']
  
  switch (type) {
    case 'proposal':
      data = mockProposal
      break
    case 'landing-page':
      data = mockLandingPage
      break
    case 'offer-stack':
      data = mockOfferStack
      break
    case 'client-brief':
      data = mockClientBrief
      break
    case 'follow-up-email':
      data = mockEmail
      break
    default:
      data = mockGeneric
  }

  return {
    id: generateId(),
    type,
    command,
    timestamp: new Date(),
    data,
  }
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Acme Website Redesign',
    type: 'proposal',
    tags: ['Proposal'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 2),
    outputs: [],
  },
  {
    id: '2',
    name: 'SaaS Landing Page',
    type: 'landing-page',
    tags: ['Landing Page'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24),
    outputs: [],
  },
  {
    id: '3',
    name: 'Growth System Launch',
    type: 'offer-stack',
    tags: ['Offer Stack'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    outputs: [],
  },
  {
    id: '4',
    name: 'IdeationStation',
    type: 'generic',
    tags: ['Research Terminal'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    outputs: [],
  },
  {
    id: '5',
    name: 'AvantSavant',
    type: 'generic',
    tags: ['Education Platform'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    outputs: [],
  },
  {
    id: '6',
    name: 'Negentropic Workflows',
    type: 'generic',
    tags: ['Agentic System', 'Workflow'],
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    outputs: [],
  },
]

export const mockHistory: HistoryItem[] = [
  {
    id: '1',
    command: 'generate proposal for website redesign',
    type: 'proposal',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
  },
  {
    id: '2',
    command: 'generate landing page structure',
    type: 'landing-page',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '3',
    command: 'generate offer stack for coaching program',
    type: 'offer-stack',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
  },
  {
    id: '4',
    command: 'generate client brief for TechStart',
    type: 'client-brief',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
]

export const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Proposal Template',
    type: 'proposal',
    description: 'Professional project proposal with scope, timeline, and pricing',
  },
  {
    id: '2',
    name: 'Landing Page Template',
    type: 'landing-page',
    description: 'High-converting landing page structure with all essential sections',
  },
  {
    id: '3',
    name: 'Offer Stack Template',
    type: 'offer-stack',
    description: 'Value-stacked offer with bonuses and price anchoring',
  },
  {
    id: '4',
    name: 'Client Brief Template',
    type: 'client-brief',
    description: 'Comprehensive client brief for project kickoff',
  },
  {
    id: '5',
    name: 'Follow-up Email Template',
    type: 'follow-up-email',
    description: 'Professional follow-up email for client communication',
  },
]
