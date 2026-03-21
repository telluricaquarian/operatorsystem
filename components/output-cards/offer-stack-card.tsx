'use client'

import { Copy, Download, Gift, Check, Shield } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { OutputItem, OfferStackData } from '@/lib/types'

interface OfferStackCardProps {
  output: OutputItem
}

export function OfferStackCard({ output }: OfferStackCardProps) {
  const data = output.data as OfferStackData

  return (
    <Card className="animate-in fade-in-0 slide-in-from-bottom-4 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <Gift className="size-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{data.title}</CardTitle>
              <CardDescription className="mt-1">{data.tagline}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Offer Stack
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Main Offer */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="font-semibold">{data.mainOffer.name}</h4>
            <Badge className="bg-primary text-primary-foreground">Main Offer</Badge>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">{data.mainOffer.price}</span>
            <span className="text-sm text-muted-foreground line-through">
              {data.mainOffer.value}
            </span>
          </div>
        </div>

        {/* Bonuses */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Bonuses Included:</h4>
          {data.bonuses.map((bonus, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-secondary/20 p-3"
            >
              <div className="flex items-center gap-2">
                <Check className="size-4 text-primary" />
                <span className="text-sm">{bonus.name}</span>
                {bonus.tag && (
                  <Badge variant="outline" className="text-xs">
                    {bonus.tag}
                  </Badge>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{bonus.value}</span>
            </div>
          ))}
        </div>

        <Separator className="bg-border/50" />

        {/* Total Value */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Value:</span>
            <span className="font-medium line-through">{data.totalValue}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Your Investment:</span>
            <span className="text-2xl font-bold text-primary">{data.price}</span>
          </div>
        </div>

        {/* Guarantee */}
        <div className="flex items-center gap-2 rounded-lg bg-secondary/30 p-3">
          <Shield className="size-5 text-primary" />
          <span className="text-sm font-medium">{data.guarantee}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-border/50 pt-4">
        <Button size="sm" className="gap-1.5">
          <Download className="size-3.5" />
          Export
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5">
          <Copy className="size-3.5" />
          Copy
        </Button>
      </CardFooter>
    </Card>
  )
}
